import React from "react";
import { ITagProps } from "./tag.props";
import cn from "classnames"
import styles from "./tag.module.css"
import { TAG_SIZE, TAG_VARIANT } from "./tag.enum";

export function Tag({ children, variant, size, className, href, ...props}:ITagProps) {
    return (
        <div 
        className={cn(styles.tag, className ?? "", {
            [styles.s]: size === TAG_SIZE.SMALL,
            [styles.m]: size === TAG_SIZE.MIDDLE,
            [styles.transparent]: variant === TAG_VARIANT.TRANSPARENT,
            [styles.gray]: variant === TAG_VARIANT.GRAY,
            [styles.green]: variant === TAG_VARIANT.GREEN,
            [styles.red]: variant === TAG_VARIANT.RED,
            [styles.primary]: variant === TAG_VARIANT.PRIMARY,
           
        })}

        
        {...props}>

{ href ? <a href={href} target="_blank"> {children} </a> : children}
        
        </div>
    )

}