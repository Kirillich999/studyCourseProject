"use client"
import React, { ChangeEvent, useState } from "react";
import cn from "classnames"
import styles from "./search.module.css"
import SearchIcon from "./search-icon.svg"
import { ISearchProps } from "./search.type";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { BUTTON_VARIANT } from "../button/button.enum";
import { useRouter } from "next/navigation";

export function Search ({className, ...props}: ISearchProps) {
const [search, setSearch] = useState<string>(" ")
const router = useRouter();
const getSearch = () => {
    router.push(`/search?q=${search}`)
}

const handleKeyDown = (e: KeyboardEvent) => {
    if(e.code === "Enter") {
        getSearch()
    }

}

const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)

}
    return (
        <form role="search" className={cn(styles.search,className ?? "")} {...props}>
            <Input 
            value={search} 
            onChange={onChange} 
            className={cn(styles.input)} 
            placeholder="Поиск..."
            onKeyDown={handleKeyDown}/>

            <Button 
            onClick={getSearch} 
            className={cn(styles.button)} 
            variant={BUTTON_VARIANT.PRIMARY}
            aria-label="Поиск по сайту"
            >
                <SearchIcon/>
            </Button>
        </form>
    )
}