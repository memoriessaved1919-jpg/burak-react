import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../libs/types/screen";

const initialState: ProductsPageState = {
  restaurants: null,
  chosenProduct: null,
  products: [],
};

const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurants = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setRestaurant, setChosenProduct, setProducts } =
  productsPageSlice.actions; // action yaratuvchilar uchun (komponentlarni dipach qilish uchun)

const ProductsPageReducer = productsPageSlice.reducer; // redux storega ulash uchun

export default ProductsPageReducer;
