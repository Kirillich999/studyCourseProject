
import { ARROW_BUTTON_POSITION, Button, BUTTON_VARIANT, H_TAG_VARIANT, Htag, Input, Paragraph, PARAGRAPH_SIZE, Tag, TAG_SIZE, TAG_VARIANT, Textarea } from "./components";
import { Rating } from "./components/rating/rating";
import React from "react";


// import styles from "./page.module.css";

 function Home() {
  // const data = await getMenuItem();
  return (
    <>
      <Htag tag={H_TAG_VARIANT.h1}>Курсы по Photoshop</Htag>
      <Htag tag={H_TAG_VARIANT.h2}>Вакансии - Photoshop</Htag>
      <Htag tag={H_TAG_VARIANT.h3}>Преимущества</Htag>
      <Htag tag={H_TAG_VARIANT.h3}>Курсы</Htag>
      <Button arrow={ARROW_BUTTON_POSITION.RIGHT} variant={BUTTON_VARIANT.PRIMARY}>Узнать подробнее</Button>
      <Button arrow={ARROW_BUTTON_POSITION.DOWN} variant={BUTTON_VARIANT.TRANSPARENT}>Читать отзывы</Button>
      <Paragraph size={PARAGRAPH_SIZE.SMALL}>Мелкий</Paragraph>
      <Paragraph size={PARAGRAPH_SIZE.MIDDLE}>Средний</Paragraph>
      <Paragraph size={PARAGRAPH_SIZE.LARGE}>Большой</Paragraph>
      <Tag variant={TAG_VARIANT.GRAY} size={TAG_SIZE.MIDDLE}>10</Tag>
      <Tag variant={TAG_VARIANT.GREEN} size={TAG_SIZE.SMALL} >10 000 Р</Tag>
      <Tag variant={TAG_VARIANT.TRANSPARENT} size={TAG_SIZE.SMALL}>Photoshoop</Tag>
      <Tag href="https://hh.ru" variant={TAG_VARIANT.RED} size={TAG_SIZE.MIDDLE}>hh.ru</Tag>
      <Tag variant={TAG_VARIANT.PRIMARY} size={TAG_SIZE.SMALL}>Работа в Photoshoop</Tag>
      <Rating rating={0} />
      <Rating rating={2}  isEditable/>
      <Input/>
      <Textarea/>
      
      
      
    </>
  );
}


// export const getMenuItem = async () => {
//  try {
//   const firstCategory = 0;
//   const {data: menu} = await axios.post<IMenuitem[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/find`, {firstCategory })
//   return {
//       menu
//   }
//  }
//  catch (e) {
//   if (e instanceof AxiosError) {
//     throw new Error(e.message)
//   }

//  }
// }


export default Home
