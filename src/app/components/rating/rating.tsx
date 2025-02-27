"use client"
import React, { JSX, useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from "react";
import { IRatingProps } from "./rating.type";
import StarIcon from  "./star.svg"
import styles from "./rating.module.css"
import cn from "classnames"



// eslint-disable-next-line react/display-name
export const Rating = forwardRef(({isEditable, rating, setRating, ...props}:IRatingProps, ref: ForwardedRef <HTMLDivElement>) => {

    const [arrayStar, setArrayStar] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        renderStar(rating)
    }, [rating])

    const renderStar = ( currentRating: number) => {
        const updatedStars = arrayStar.map((star: JSX.Element, idx: number) => {
            return (
                <StarIcon className={cn(styles.star, {
                    [styles.filled]: idx < currentRating,
                    [styles.editedStar]: isEditable,
                })} 
                key={idx}
                onMouseEnter={() => onHoverStar(idx+1)}
                onMouseLeave={() => onHoverStar(rating)}
                onKeyDown={(e: KeyboardEvent<SVGElement>) => onPressRating(e,idx + 1)}
                onClick={() => onSetRating(idx + 1)}
                tabIndex={isEditable ? 0 : -1}
                />
            )
        })

        setArrayStar(updatedStars)
    }

    const onPressRating = (e: KeyboardEvent<SVGElement>, rating: number) => {
        if(setRating && isEditable && e.code === "Space" ) {
            e.preventDefault()
            setRating(rating)

        }

    }

    const onSetRating = (rating: number) => {
        if(isEditable && setRating) setRating(rating)
            return


    }

    const onHoverStar = (idx: number) => {
        if (!isEditable) return;
        renderStar(idx)
    }
    
    return (
        <div
        ref={ref}
        {...props}>
            {arrayStar.map((star: JSX.Element, idx: number)=> <React.Fragment key={idx}> {star}</React.Fragment>  )}

        </div>
    )

})