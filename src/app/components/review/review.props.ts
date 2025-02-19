import { Review } from "@/app/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IReviewProps extends DetailedHTMLProps <HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: Review
}