import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SORT_VARIANT } from "./sort.enum";

export interface ISortProps extends DetailedHTMLProps <HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort : SORT_VARIANT;
    setSort: (sort: SORT_VARIANT) => void;
}