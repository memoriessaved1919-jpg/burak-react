import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";

const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  name: "homePage", // Slice nomi, bu nom Redux store da ishlatiladi
  initialState, // Slice boshlang'ich holati, bu holat Redux store da saqlanadi
  reducers: {
    // Reducerlar, bu funksiyalar orqali slice holatini o'zgartirish mumkin
    setPopularDishes: (state, action) => {
      // state - yuqoridagi initialState, action - reducer orqali yuborilgan malumotlar
      //
      state.popularDishes = action.payload; // payload - reducer orqali yuborilgan malumotlar, bu malumot state.popularDishes ga tenglanyapti
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions; // Reducerlar orqali yuborilgan actionlarni export qilish, bu actionlar componentlarda ishlatiladi

const HomePageReducer = homePageSlice.reducer;

export default HomePageReducer; // Slice reducerini export qilish, bu reducer Redux store ga ulanishi kerak
