import React from "react";
import { IFooterProps } from "./footer.type";
import {format} from "date-fns"
import styles from "./footer.module.css"
import cn from "classnames"


export function Footer ({ className, ...props}:IFooterProps) {
    return (
        <div className={cn(className ?? "", styles.footer)} {...props}>
        
        <div>IBRAIN © 2023 - {format(new Date(), "yyyy")} Все права защищены</div>

        <div>Пользовательское соглашение </div>

        <div>Политика конфиденциальности</div>
        </div>
    )
}