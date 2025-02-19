import { MENU_CATEGORY } from "@/app/enum/menu-category.enum";
import { IPage } from "@/app/interfaces/page.interface";
import { IProduct } from "@/app/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITopPageComponent extends DetailedHTMLProps <HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    page: IPage;
    firstCategory: MENU_CATEGORY;
    products: IProduct[]
}