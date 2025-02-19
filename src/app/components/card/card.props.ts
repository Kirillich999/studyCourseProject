import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ICaardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    color?: "white" | "purple";
}