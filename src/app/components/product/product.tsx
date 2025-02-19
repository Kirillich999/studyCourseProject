"use client"
import React, { useState } from "react";
import { IProductProps } from "./product.type";
import { Card } from "../card/card";
import cn from "classnames"
import styles from "./product.module.css"
import { formatPrice } from "@/app/helper/format-price.helper";
import { Tag } from "../tag/tag";
import { TAG_SIZE, TAG_VARIANT } from "../tag/tag.enum";
import { Rating } from "../rating/rating";
import { Htag } from "../Htag/Htag";
import { H_TAG_VARIANT } from "../Htag/Htag.enum";
import { Button } from "../button/button";
import { ARROW_BUTTON_POSITION, BUTTON_VARIANT } from "../button/button.enum";
import { declensionWords } from "@/app/helper/declension-words.helper";
import Image from "next/image";
import { Review } from "../review/review";

export function Product({product, className, ...props}:IProductProps) {

    const [isOpenReview, setIsOpenReview] = useState<boolean>(false);
    const onOpenReview = () => {
        setIsOpenReview(prev => !prev);

    }
    return(
        <>
        <Card
        color="white"
        className={cn(styles.product, className ?? "")}
        {...props}
        >
            <div className={cn(styles.logo)}>
            {/* <img src={product.image} alt={product?.title}/> */}
            <Image
            width={70}
            height={70}
            src={product?.image}
            alt={product?.title}
            quality={100}
            />
            </div>

            <div className={cn(styles.title)}>
            {product.title}
            </div>

            <div className={cn(styles.price)}>
                {formatPrice(product.price)}
                <Tag size={TAG_SIZE.MIDDLE} variant={TAG_VARIANT.GREEN}>
                    {formatPrice(product.price - product.oldPrice)}
                </Tag>
            </div>

            <div  className={cn(styles.credit)}>
                {formatPrice(product.credit)}
            </div>

            <div  className={cn(styles.rating)}>
                <Rating rating={product.reviewAvg ?? product.initialRating}/>
            </div>

            <div  className={cn(styles.tag)}>
              {product.tags.map((t) => <Tag key={t} size={TAG_SIZE.MIDDLE} variant={TAG_VARIANT.TRANSPARENT}>

              {t}</Tag>)}
            </div>

            <div  className={cn(styles.priceTitle)}>
                Цена
            </div>

            <div  className={cn(styles.creditTitle)}>
                в кредит
            </div>

            <div className={cn(styles.rateTitle)}>
                {product.reviewCount} {declensionWords(product?.reviewCount, ["отзыв", "отзыва","отзывов"])}
            </div>

            <div  className={cn(styles.hr)}/>

            <div className={cn(styles.textAbout)}> 

            <Htag tag={H_TAG_VARIANT.h4} >
            {product?.description}
            </Htag> 
 
             </div>


                <div className={cn(styles.features)}>
                 {product?.characteristics.map((c) => (
                    <div key={c.name} className={cn(styles.char)}>
                            <span className={cn(styles.charName)} > {c.name}</span>
                            <span className={cn(styles.charDots)}></span>
                            <span className={cn(styles.charValue)}> {c.value}</span>

                    </div>
                 ))}
                        
                </div>

                <div className={cn(styles.advBlock)}>
                <div className={cn(styles.adv)}>
                {product?.advantages && <div  className={cn(styles.advantages)}> 
                        <div className={cn(styles.advTitle)} >
                            Преимущества
                        </div> 

                            <div className={cn(styles.advDesc)}>
                                {product?.advantages ?? ""}
                            </div>

                        </div>
                        }

                </div>

                    {product?.disadvantages && <div  className={cn(styles.disAdvantages)}> 
                        <div className={cn(styles.advTitle)} >
                            Недостатки
                        </div> 

                            <div className={cn(styles.advDesc)}>
                                {product?.disadvantages ?? ""}
                            </div>

                        </div>
                        }
                </div>

                <div  className={cn(styles.hr2)}/>

                <div className={cn(styles.actions)}>
                    <Button variant={BUTTON_VARIANT.PRIMARY}>
                       Узнать подробнее 
                    </Button>

                    <Button 
                    onClick={onOpenReview}
                    className={cn(styles.reviewBtn)}
                    variant={BUTTON_VARIANT.TRANSPARENT}
                    arrow={isOpenReview ? ARROW_BUTTON_POSITION.DOWN : ARROW_BUTTON_POSITION.RIGHT}
                    >
                      Читать отзывы
                    </Button>

                </div>

            
             

        </Card>

            <Card 
            className={cn(styles.reviewWrapper, {
                [styles.reviewOpened] : isOpenReview,
                [styles.reviewClosed] : !isOpenReview,
            } )}
            color="purple">

                { product?.reviews?.map((r) => (
                    <Review review={r} key={r._id}/>
                ))}
            </Card>
        </>

     )
}