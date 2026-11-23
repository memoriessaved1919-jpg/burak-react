import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";
import { OrdersPageState } from "../../../libs/types/screen";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  ordersPageSlice.actions; // Reducerlar orqali yuborilgan actionlarni export qilish, bu actionlar componentlarda ishlatiladi

const OrdersPageReducer = ordersPageSlice.reducer;

export default OrdersPageReducer; // Slice reducerini export qilish, bu reducer Redux store ga ulanishi kerak
