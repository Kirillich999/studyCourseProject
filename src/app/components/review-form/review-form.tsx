"use client"
import React, { useState } from "react";

import cn from "classnames"
import styles from "./review-form.module.css"
import { IReviewFormProps } from "./review-form.props";
import { Input } from "../input/input";
import { Rating } from "../rating/rating";
import { Textarea } from "../textarea/textarea";
import { Button } from "../button/button";
import { BUTTON_VARIANT } from "../button/button.enum";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewResponse } from "./review-form.interface";
import axios, { AxiosError } from "axios";

export function ReviewForm({ productId,className, ...props }:IReviewFormProps) {
   const { register, control,handleSubmit, formState: { errors } } = useForm<IReviewForm>();
   const [error,setError] = useState<string>("")
   const [isSuccess,setIsSuccess] = useState<boolean>(false)

   const onSubmit = async (formData:IReviewForm) => {
    try {   
        const {data} = await axios.post<IReviewResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}review/create-demo`, {
            ...formData, productId
        })
        console.log(data)
        setIsSuccess(true)

    }
    catch (e) {
        if (e instanceof AxiosError){
            setError(e.message)
            throw new Error(e.message)
        }

    }

   }

    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
        <div
        className={cn(styles.reviewForm, className ?? "" )}
        {...props}>

            <Input 
            {...register("name", {
                required: {
                    value: true,
                    message: "заполните имя"
                }
            })} 
            className={cn(styles.name)} 
            error={errors.name}
            placeholder="имя"/>
            <Input {...register("title")}  className={cn(styles.title)} placeholder="Заголовок отзыва"/>
        <div  className={cn(styles.rating)}>
            <span>Оценка:</span>
            <Controller
            control={control}
            name="rating"
            render={({ field}) => (
                <Rating rating={field.value}
                isEditable
                setRating={field.onChange}
                />
            )}
            />
           
        </div>
        <Textarea {...register("description")}  className={cn(styles.desc)} placeholder="Текст отзыва"/>
        <div  className={cn(styles.submit)}>
            <Button variant={BUTTON_VARIANT.PRIMARY}>
            Отправить
            </Button>
            <span  className={cn(styles.info)}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
            </span>
        </div>
        {error && <span>{error}</span>}
        {isSuccess && <span>Отзыв успешно добавлен</span>}
        </div>
        </form>
    )
}