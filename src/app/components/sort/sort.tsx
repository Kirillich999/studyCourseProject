"use client"
import React from "react";
import { ISortProps } from "./sort.type";
import cn from "classnames"
import { SORT_VARIANT } from "./sort.enum";
import SortIcon from "./sort-icon.svg"
import styles from "./sort.module.css"


export function Sort({setSort, sort, className, ...props}:ISortProps) {
    const priceSort = () => {
        setSort(SORT_VARIANT.PRICE)
    }

    const sortRating = () => {
        setSort(SORT_VARIANT.RATING)
    }

    return (
        <div className={cn(className ?? "", styles.sort )} {...props}>
           <span  className={cn({
            [styles.active]: sort === SORT_VARIANT.RATING
           })}
           onClick={sortRating}
           >
            <SortIcon className={cn(styles.sortIcon)}/> По рейтингу
           </span>



           <span  className={cn({
            [styles.active]: sort === SORT_VARIANT.PRICE
           })}
           onClick={priceSort}
           >
            <SortIcon className={cn(styles.sortIcon)}/> По цене
           </span>

        </div>
    )
}