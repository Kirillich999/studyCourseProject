import { DetailsHTMLAttributes, ReactNode } from "react";
import { PARAGRAPH_SIZE } from "./paragraph.enum";


export interface IParagraphProps extends DetailsHTMLAttributes <HTMLParagraphElement> {
    children: ReactNode,
    size?: PARAGRAPH_SIZE

}