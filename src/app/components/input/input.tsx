import React from "react";
import styles from "./input.module.css"
import cn from "classnames"
import { IInputprops } from "./input.type";

export function Input({className, ...props}: IInputprops) {
    return(
        <input className={cn(styles.input, className ?? "")} {...props}/>
    )
}