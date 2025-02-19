import { DetailsHTMLAttributes, ReactNode } from "react";
import { TAG_SIZE, TAG_VARIANT } from "./tag.enum";


export interface ITagProps extends DetailsHTMLAttributes <HTMLDivElement> {
    variant: TAG_VARIANT;
    children:ReactNode ;
    size: TAG_SIZE;
    href?: string;

}