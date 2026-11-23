import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";
import { OrdersPageState } from "../../../libs/types/screen";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  name: "ordersPage", // Slice nomi, bu nom Redux store da ishlatiladi
  initialState, // Slice boshlang'ich holati, bu holat Redux store da saqlanadi
  reducers: {
    // reducer esa store’ni yangilaydigan ishchi
    // Reducerlar, bu funksiyalar orqali slice holatini o'zgartirish mumkin
    setPausedOrders: (state, action) => {
      // state - yuqoridagi initialState, action - reducer orqali yuborilgan malumotlar
      //
      state.pausedOrders = action.payload; // payload - reducer orqali yuborilgan malumotlar, bu malumot state.popularDishes ga tenglanyapti
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setfFnidshedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setfFnidshedOrders } =
  ordersPageSlice.actions; // Reducerlar orqali yuborilgan actionlarni export qilish, bu actionlar componentlarda ishlatiladi

const OrdersPageReducer = ordersPageSlice.reducer;

export default OrdersPageReducer; // Slice reducerini export qilish, bu reducer Redux store ga ulanishi kerak
