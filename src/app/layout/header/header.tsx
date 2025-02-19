import React from "react";
import { IHeaderProps } from "./header.type";


export function Header ({ ...props}:IHeaderProps) {
    return (
        <div {...props}>
            Header
        </div>
    )
}