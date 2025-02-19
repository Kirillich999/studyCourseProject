import React from "react"
import { IParagraphProps } from "./paragraph.type"
import cn from "classnames"
import styles from "./paragraph.module.css"
import { PARAGRAPH_SIZE } from "./paragraph.enum"

export function Paragraph({ children, className, size, ...props }:IParagraphProps) {
    return(
        <p
        className={cn(className ?? "", {
            [styles.s]: size === PARAGRAPH_SIZE.SMALL,
            [styles.m]: size ===  PARAGRAPH_SIZE.MIDDLE,
            [styles.l]: size === PARAGRAPH_SIZE.LARGE,

        })}
        {...props}>
            {children}

        </p>
    )
}