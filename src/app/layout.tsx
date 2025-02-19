import  Head  from "next/head";
import "./globals.css";
import React from "react";
import { Layout } from "./layout/layout";
import { AppContextProvider } from "./context/app.context";
import axios from "axios";
import { IMenuitem } from "./interfaces/menu.interface";
import { MENU_CATEGORY } from "./enum/menu-category.enum";




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {menu} = await getMenuItem()
  return (
    <html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
      </Head>
      <body>
      
    <AppContextProvider menu={menu} firstCategory={MENU_CATEGORY.COURSES}>

      <Layout>
      {children}
      </Layout>
    </AppContextProvider>

      </body>
    </html>
  );
}


export const getMenuItem = async () => {
  // try {
   const {data: menu} = await axios.post<IMenuitem[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/find`, {firstCategory: MENU_CATEGORY.COURSES })
   
   return {
       menu
       
   } }