import { MENU_CATEGORY } from "../enum/menu-category.enum";
import { IMenuitem } from "../interfaces/menu.interface";


export interface IAppContext {
    firstCategory: MENU_CATEGORY;
    menu: IMenuitem[];
    setMenu?: (newMenu: IMenuitem[]) => void;
}