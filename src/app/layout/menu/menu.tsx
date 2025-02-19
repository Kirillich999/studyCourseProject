"use client"
import styles from "./menu.module.css"

import cn from "classnames"
import { AppContext } from "@/app/context/app.context";
import { IFirstEvelmenuItem, IMenuitem, IPageItem } from "@/app/interfaces/menu.interface";
import { useContext } from "react";
import { firstLevelMenu } from "@/app/helper/menu.helper";
import Link from "next/link";
import { usePathname } from "next/navigation";



export function Menu() {
    const {menu, firstCategory, setMenu} = useContext(AppContext);
    const pathname = usePathname();
    const openSecondLevelMenu = (secondCategory: string) => {
        const updatedMenu = menu.map((m) => {
            if (m._id.secondCategory === secondCategory) {
                 m.isOpened = !m.isOpened
                return m;
        } 
        return m;
    }
       
    )
    if (setMenu) setMenu(updatedMenu)
    }


    const buildFirstLevelMenu = () => {
        return (
            <>
           {
             firstLevelMenu?.map((m: IFirstEvelmenuItem) => {
                const isActive = m.id === firstCategory;
                return (
                 <div key={m.id}>
                    
                    <div className={cn(styles.firstLevel, {
                        [styles.firstLevelActive] : isActive,
                    })}>
                        {m.icon}
                        <span>{m.name}</span>
                    </div>
                    {isActive && buildSecondLevelMenu(m)}
                 </div>
                )
            })
           }
            </>
        )
    }

    const buildSecondLevelMenu = (menuitem: IFirstEvelmenuItem) => {
        return (
            <div className={cn(styles.secondBlock)}>
                {
                    menu.map((m: IMenuitem) => {
                        const isOpenedMenu = m.pages.map(p => p.alias).includes(pathname.split("/")[2])
                        if (isOpenedMenu) m.isOpened = true;
                        return (
                            <div key={m._id.secondCategory}>
                                   <div onClick={()=> openSecondLevelMenu(m._id.secondCategory)} className={cn(styles.secondLevel)}>
                                   {m._id.secondCategory}
                                    </div> 

                                    <div className={cn(styles.secondLevelBlock, {
                                        [styles.secondLevelBlockActive] : m?.isOpened
                                    })}>
                                        {buildThirdLevelMenu(m.pages, menuitem.route)}
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const buildThirdLevelMenu = (pages: IPageItem[], route:string) => {
        return (
            <>
            {
                pages.map((p) => {
                    return (
                        <Link className={cn(styles.thirdlevel, {
                            [styles.thirdlevelActive]: pathname === `/${route}/${p.alias}`
                        })} 
                        key={p._id} 
                        href={`/${route}/${p.alias}`}>
                        {p.category}
                        </Link>
                    )
                })
            }</>
        )
        
    }
    
    return (
        <>
       {buildFirstLevelMenu()}
        </>
    )
}