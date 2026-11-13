import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage; // bu yerda AppRootState dan homePage state ni chaqirib olamiz.
export const retrievePopularDishes = createSelector(
  selectHomePage,
  (homePage) => homePage.popularDishes, // bu yerda homePage state dan popularDishes ni chaqirib olamiz.
);
export const retrieveNewDishes = createSelector(
  selectHomePage,
  (homePage) => homePage.newDishes, // bu yerda homePage state dan newDishes ni chaqirib olamiz.
);
export const retrieveTopUsers = createSelector(
  selectHomePage,
  (homePage) => homePage.topUsers, // bu yerda homePage state dan topUsers ni chaqirib olamiz.
);
