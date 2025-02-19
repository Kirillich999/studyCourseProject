"use client"
import React, { JSX, useEffect, useState, KeyboardEvent } from "react";
import { IRatingProps } from "./rating.type";
import StarIcon from  "./star.svg"
import styles from "./rating.module.css"
import cn from "classnames"


export function Rating ({isEditable, rating, setRating, ...props}:IRatingProps) {

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
        
        {...props}>
            {arrayStar.map((star: JSX.Element, idx: number)=> <React.Fragment key={idx}> {star}</React.Fragment>  )}

        </div>
    )

}