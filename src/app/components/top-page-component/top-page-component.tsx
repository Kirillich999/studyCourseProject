"use client"
import styles from "./top-page-component.module.css"
import cn from "classnames"

import React, { useReducer } from "react"
import { ITopPageComponent } from "./top-page-component.props"
import { Htag } from "../Htag/Htag"
import { H_TAG_VARIANT } from "../Htag/Htag.enum"
import { Tag } from "../tag/tag"
import { TAG_SIZE, TAG_VARIANT } from "../tag/tag.enum"
import RateIcon from "./rate-icon.svg"
import { Card } from "../card/card"
import { formatPrice } from "@/app/helper/format-price.helper"
import CheckIcon from "./check-icon.svg"
import { Sort } from "../sort/sort"
import { sortReducer } from "./sort-reducer"
import { SORT_VARIANT } from "../sort/sort.enum"
import { Product } from "../product/product"


export function TopPageComponent({products, page }: ITopPageComponent) {
    const [{products: sortedProducts, sort}, dispatch] = useReducer(sortReducer, {products, sort: SORT_VARIANT.RATING})
    const setSort = (sort: SORT_VARIANT) => {
        dispatch({type: sort})
    }
    return(
        <div className={cn(styles.wrapper)}>
            <div className={cn(styles.title)}>
            <Htag tag={H_TAG_VARIANT.h1}>Курсы по Photoshop</Htag>
            <Tag size={TAG_SIZE.MIDDLE} variant={TAG_VARIANT.GRAY}>{products.length}</Tag>
            <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                { sortedProducts?.map((p) => (
                    <Product layout key={p._id} product={p}/>
                ) )}
            </div>
                
                <div className={cn(styles.hhtitle)}>
                    <Htag tag={H_TAG_VARIANT.h2}>Вакансии - Photoshop</Htag>
                    <Tag size={TAG_SIZE.MIDDLE} variant={TAG_VARIANT.RED} href="https//hh.ru">hh.ru</Tag>

                </div>
                <div className={cn(styles.hh)}>

                    <Card color="white">
                    <div className={cn(styles.cardtitle)}>
                    Всего Вакансий
                    </div>

                    <div className={cn(styles.hhStatCount)}>
                        {page?.hh?.count}

                    </div>

                    </Card>

                    <Card className={cn(styles.salary)} color="white">
                   <div>
                   <div className={cn(styles.cardtitle)}>
                    Начальный
                    </div>
                    <div className={cn(styles.salaryDesc)}>
                    {formatPrice(page?.hh?.juniorSalary)}
                    </div>
                    <div className={cn(styles.rate)} >
                    <RateIcon className={cn(styles.filledRate)}/>
                    <RateIcon/>
                    <RateIcon/>
                    </div>
                   </div>

                   <div>
                   <div className={cn(styles.cardtitle)}>
                    Средний
                    </div>
                    <div className={cn(styles.salaryDesc)}>
                    {formatPrice(page?.hh?.middleSalary)}
                    </div>
                    <div className={cn(styles.rate)} >
                    <RateIcon className={cn(styles.filledRate)}/>
                    <RateIcon className={cn(styles.filledRate)}/>
                    <RateIcon/>
                    </div>
                   </div>

                   <div>
                   <div className={cn(styles.cardtitle)}>
                    Профессионал
                    </div>
                    <div className={cn(styles.salaryDesc)}>
                        {formatPrice(page?.hh?.seniorSalary)}
                    </div>
                    <div className={cn(styles.rate)} >
                    <RateIcon className={cn(styles.filledRate)}/>
                    <RateIcon className={cn(styles.filledRate)}/>
                    <RateIcon className={cn(styles.filledRate)}/>
                    </div>
                   </div>
                    </Card>
                </div>
                <Htag tag={H_TAG_VARIANT.h2}> Преимущества </Htag>
                 <div className={cn(styles.advantageWrapper)}>

                 {
                        page.advantages && page.advantages.map((a) => (
                            <div key={a._id} className={cn(styles.advantage)}>
                                <CheckIcon/>
                                <div className={cn(styles.advantageTitle)}> {a.title} </div>
                                <div className={cn(styles.vline)}/>
                                <div>{a.description}</div>
                            </div>
                        ))
                    }

                 </div>
                 { <div className={cn(styles.seoText)} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
                 <Htag tag={H_TAG_VARIANT.h2}> Получаемые навыки </Htag>
                        {
                            page.tags.map((t) => (
                                <Tag 
                                className={cn(styles.tag)}
                                key={t}
                                size={TAG_SIZE.MIDDLE}
                                variant={TAG_VARIANT.PRIMARY}>
                                    {t}
                                </Tag>
                            ))
                        }
        </div>
    )
}