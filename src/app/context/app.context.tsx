"use client"
import { createContext, ReactNode, useState } from "react";
import { IAppContext } from "./app-context.type";
import { MENU_CATEGORY } from "../enum/menu-category.enum";
import { IMenuitem } from "../interfaces/menu.interface";


export const AppContext = createContext<IAppContext>( {

        firstCategory: MENU_CATEGORY.COURSES,
        menu: [],

})

export const AppContextProvider = ({menu, firstCategory, children }:IAppContext & {children: ReactNode}) => {
    const [newMenuState, setNewMenuState] = useState(menu);
    const setMenu = (newMenu: IMenuitem[]) => {
        setNewMenuState(newMenu)
    }
    return (
        <AppContext.Provider value={{menu: newMenuState, firstCategory, setMenu}}>
            {children}
        </AppContext.Provider>
    )
}