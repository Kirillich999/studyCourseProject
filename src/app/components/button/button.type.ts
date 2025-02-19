import { ButtonHTMLAttributes, ReactNode } from "react";
import { ARROW_BUTTON_POSITION, BUTTON_VARIANT } from "./button.enum";

export interface IButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    children: ReactNode;
    variant: BUTTON_VARIANT;
    arrow?: ARROW_BUTTON_POSITION
}