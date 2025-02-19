import React, { ForwardedRef, forwardRef } from "react";
import styles from "./textarea.module.css"
import cn from "classnames"
import { IItextAreaProps } from "./textarea.type";

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(({className, ...props}: IItextAreaProps, ref:ForwardedRef <HTMLTextAreaElement>) => {
    return(
        <textarea ref={ref} className={cn(styles.textarea, className ?? "")} {...props}/>
    )
})