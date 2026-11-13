import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    //@ts-ignore //
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer, // bu yerda homePageSlice.reducer ni ulayapmiz, bu reducer orqali slice holati Redux store ga yoziladi
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
