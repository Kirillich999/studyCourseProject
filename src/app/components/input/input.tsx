import React, { ForwardedRef, forwardRef } from "react";
import styles from "./input.module.css"
import cn from "classnames"
import { IInputprops } from "./input.type";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({error, className, ...props}: IInputprops, ref: ForwardedRef<HTMLInputElement>) => {
    return(
        <div className={cn(styles.wrapper)}>
            <input ref={ref} className={cn(styles.input, className ?? "", {
                [styles.inputError]: error
            })} {...props}/>
            {error && <span className={cn(styles.error)}> {error.message}</span>}
        </div>
    )
})