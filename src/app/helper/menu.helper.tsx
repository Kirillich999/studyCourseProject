

import CoursesIcon from "../layout/menu/icons/courses.svg"
import BooksIcon from "../layout/menu/icons/books.svg"
import ProductsIcon from "../layout/menu/icons/products.svg"
import ServicesIcon from "../layout/menu/icons/services.svg"
import { MENU_CATEGORY } from "@/app/enum/menu-category.enum";
import { IFirstEvelmenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu: IFirstEvelmenuItem[] = [
    {
        route: "courses",
        name: "Курсы",
        icon: <CoursesIcon/>,
        id:  MENU_CATEGORY.COURSES,
    },

    {
        route: "services",
        name: "Сервисы",
        icon: <ServicesIcon/>,
        id:  MENU_CATEGORY.SERVICES,
    },

    {
        route: "books",
        name: "Книги",
        icon: <BooksIcon/>,
        id:  MENU_CATEGORY.BOOKS,
    },

    {
        route: "products",
        name: "Товары",
        icon: <ProductsIcon/>,
        id:  MENU_CATEGORY.PRODUCTS,
    }
]