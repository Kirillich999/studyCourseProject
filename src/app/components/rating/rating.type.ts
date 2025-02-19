import { DetailsHTMLAttributes } from "react";

export interface IRatingProps extends DetailsHTMLAttributes <HTMLDivElement> {
    rating: number;
    isEditable?: boolean;
    setRating?: (rating: number) => void;

}