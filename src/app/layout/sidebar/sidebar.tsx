import cn from "classnames"
import styles from "./sidebar.module.css"
import React from "react";
import { ISidebarProps } from "./sidebar.type";
import { Menu } from "../menu/menu";
import Logo from "./logo.svg"
import { Search } from "@/app/components";



export function Sidebar ({ className, ...props}:ISidebarProps) {
    return (
        <div className={cn(className ?? "", styles.sidebar)} {...props}>
        <Logo/>
       <Search/>
        <Menu/>
        </div>
    )
}