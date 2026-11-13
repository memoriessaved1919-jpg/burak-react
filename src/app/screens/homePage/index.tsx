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

export default function HomePage() {
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
