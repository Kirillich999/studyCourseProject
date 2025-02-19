import { IMenuitem } from "@/app/interfaces/menu.interface"
import { IPage } from "@/app/interfaces/page.interface"
import React from "react"
import axios from "axios"
import { firstLevelMenu } from "@/app/helper/menu.helper"
import { notFound } from "next/navigation"
import { IProduct } from "@/app/interfaces/product.interface"
import { TopPageComponent } from "@/app/components/top-page-component/top-page-component"
import { MENU_CATEGORY } from "@/app/enum/menu-category.enum"

interface IParams {
    params: {
        type: string;
        page: string;
    }
}


const firstCategory = 0;

 export default async function TopPage(params:IParams) {
   
    const {pageData, products, firstCategory} = await getMenuItem(params) 
    return <TopPageComponent
        page={pageData}
        products={products}
        firstCategory={firstCategory ?? MENU_CATEGORY.COURSES}
    />
       
    
}


export async function generateStaticParams() {
    const paths = [];
    for (const fm of firstLevelMenu) {
        const {data: menu} = await axios.post<IMenuitem[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/find`, {firstCategory })
       paths.push(...menu?.flatMap(m => m.pages).map((p)=> {
        return {
            [fm.route]: p.alias
        }

        
    }))
    }
    return paths;
}

export async function generalMetadata(params: IParams ) {
    const menu = await getMenuItem(params);
    return {
        title: menu?.pageData.title
    }
        
    
    
}

export const getMenuItem = async ({params}: IParams) => {
    const firstCategoryItem = firstLevelMenu.find(m=> m.route === params.type)
    try {
   
     const {data: menu} = await axios.post<IMenuitem[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/find`, {firstCategory: firstCategoryItem?.id })
     const {data: pageData} = await axios<IPage>(`${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/byAlias/${params.page}`)
     const {data: products} = await axios.post<IProduct[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/find`, {
        "category": pageData.category,
        "limit": 10,
     } )
     return {
         menu,
         pageData,
         products,
         firstCategory: firstCategoryItem?.id
     }
    }
    catch {
     notFound()
     }
   
    }
   
