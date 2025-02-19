import styles from "./layout.module.css"
import React from "react"
import cn from "classnames"
import { ILayoutProps } from "./layout.type"
import { Header } from "./header/header"
import { Sidebar } from "./sidebar/sidebar"
import { Footer } from "./footer/footer"


export function Layout ({children}: ILayoutProps) {
    return (
        <div className={cn(styles.wrapper)}>
            <Header className={cn(styles.header)} />
            <Sidebar className={cn(styles.sidebar)} />

            <div className={cn(styles.body)} >
                {children}
            </div>
            < Footer className={cn(styles.footer)}/>
        </div>

    )
}