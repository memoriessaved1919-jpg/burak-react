// App.tsx ichida ishlatilgan HomePage componenti,
// bu component asosiy sahifani tashkil qiladi va boshqa kichik componentlarni o'z ichiga oladi.
import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../libs/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDIspatch = (dispatch: Dispatch) => ({
  // bu yerda dispatch orqali actionlarni chaqirish uchun funksiya yaratildi
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), // bu yerda setPopularDishes actionini chaqirib, data ni reducerga yuboradi.   //3
}); // bu yerda setPopularDishes reducer orqliy o'zimizni setPopularDishes komandamizni hosil qilyapmiz, data ni reducerga yuboradi
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes }),
); // bu yerda retrievePopularDishes selectorini chaqirib, popularDishes ni olish uchun funksiya yaratildi

export default function HomePage() {
  const { setPopularDishes } = actionDIspatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever); // bu yerda useSelector orqali popularDishes ni olish uchun funksiya yaratildi
  // Malumotlarni Redux arxitekturiga yozish mantigi bilan ishlash uchun,
  // bu component ichida uch hil lifecycle metodlarini ishlatish mumkin.

  // Selector: Store dan malumotlarni qabul qilish => Data

  useEffect(() => {
    // Bckenddan malumotlarni olish va Redux store ga yozish uchun actionlar chaqiriladi => Data
    // Slice: Backenddan olgan malumotlarimiz Reducer orqali Redux store ga yoziladi => Store
  }, []);
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
