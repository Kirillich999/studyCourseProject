import React from "react";
import styles from "./textarea.module.css"
import cn from "classnames"
import { IItextAreaProps } from "./textarea.type";

export function Textarea({className, ...props}: IItextAreaProps) {
    return(
        <textarea className={cn(styles.textarea, className ?? "")} {...props}/>
    )
}