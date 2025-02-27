"use client"
import styles from "./menu.module.css"

import cn from "classnames"
import { AppContext } from "@/app/context/app.context";
import { IFirstEvelmenuItem, IMenuitem, IPageItem } from "@/app/interfaces/menu.interface";
import { useContext } from "react";
import { firstLevelMenu } from "@/app/helper/menu.helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion"



export function Menu() {
    const {menu, firstCategory, setMenu} = useContext(AppContext);
    const pathname = usePathname();

    const variants = {
        visible: {
            marginBottom: 5,
            marginTop:5,
            transition: {
                when:"beforeChildren",
                staggerChildren: 0.1

            }
        },
        hidden: {
            marginBottom: 5,  
        }
    }


    const variantsChildren = {
        visible: {
           opacity:1,
           height:29,
        },
        hidden: {
            opacity:0,
            height:0
        }
    }

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


    const openSecondLevelMenuKey = (e: KeyboardEvent, secondCategory: string) => {
            if (e.code === "Enter" || e.code === "Space" ) {
            e.preventDefault();
                openSecondLevelMenu(secondCategory)
            }
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
                            <div
                            tabIndex={0}
                            onKeyDown={(e) => openSecondLevelMenuKey(e, m._id.secondCategory)}
                             key={m._id.secondCategory}>
                                   <div onClick={()=> openSecondLevelMenu(m._id.secondCategory)} className={cn(styles.secondLevel)}>
                                   {m._id.secondCategory}
                                    </div> 

                                    <motion.div 
                                    layout
                                    initial = {m?.isOpened ? "visible" : "hidden"}
                                    animate = {m?.isOpened ? "visible" : "hidden"}
                                    variants={variants}
                                    className={cn(styles.secondLevelBlock, {
                                        
                                    })}>
                                        {buildThirdLevelMenu(m.pages, menuitem.route, m.isOpened ?? false )}
                                    </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const buildThirdLevelMenu = (pages: IPageItem[], route:string, isOpen: boolean) => {
        return (
            <>
            {
                pages.map((p) => {
                    return (
                      <motion.div
                       key={p._id} 
                       variants={variantsChildren}>
                          <Link
                          tabIndex={isOpen ? 0 : -1}
                          className={cn(styles.thirdlevel, {
                            [styles.thirdlevelActive]: pathname === `/${route}/${p.alias}`
                        })} 
                        key={p._id} 
                        href={`/${route}/${p.alias}`}>
                        {p.category}
                        </Link>


                      </motion.div>
                    )
                })
            }</>
        )
        
    }
    
    return (
        <nav role="navigation">
       {buildFirstLevelMenu()}
        </nav>
    )
}