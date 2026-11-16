// App.tsx ichida ishlatilgan HomePage componenti,
// bu component asosiy sahifani tashkil qiladi va boshqa kichik componentlarni o'z ichiga oladi.
import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../libs/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../libs/enums/product.enum";
import "../../../css/home.css";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  // bu yerda dispatch orqali actionlarni chaqirish uchun funksiya yaratildi
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), // bu yerda setPopularDishes actionini chaqirib, data ni reducerga yuboradi.
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)), // bu yerda setNewDishes actionini chaqirib, data ni reducerga yuboradi.
}); // bu yerda setPopularDishes reducer orqliy o'zimizni setPopularDishes komandamizni hosil qilyapmiz, data ni reducerga yuboradi
/* const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes }),
); */
// createSelectorsiz har safar yangi quti yaratilardi. Store’ning boshqa joyi o’zgarsa ham React “yangi quti keldi” deb HomePage’ni qayta chizardi.
//createSelector esa natijani eslab qoladi: popularDishes o’zgarmasa, o’sha eski quti qaytadi va keraksiz re-render bo’lmaydi.

/** View/ UI **/
export default function HomePage() {
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch()); //useDispatch bilan yozadi
  // const { popularDishes } = useSelector(popularDishesRetriever); //. useSelector bilan o’qiydi, bu yerda useSelector orqali popularDishes ni olish uchun funksiya yaratildi
  // Malumotlarni Redux arxitekturiga yozish mantigi bilan ishlash uchun,
  // bu component ichida uch hil lifecycle metodlarini ishlatish mumkin.

  // Selector: Store dan malumotlarni qabul qilish => Data

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    // Bckenddan malumotlarni olish va Redux store ga yozish uchun actionlar chaqiriladi => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data); // Backenddan olingan malumotlar Redux store ga yoziladi
      })
      .catch((err) => console.log(err));
    // Slice: Backenddan olgan malumotlarimiz Reducer orqali Redux store ga yoziladi => Store

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        //productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setNewDishes(data); // Backenddan olingan malumotlar Redux store ga yoziladi
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log("popularDishes:", popularDishes);
  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
