import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retrieveRestaurant = createSelector(
  selectProductsPage,
  (productPage) => productPage.restaurants,
);
export const retrieveChosenProduct = createSelector(
  selectProductsPage,
  (productPage) => productPage.chosenProduct,
);
export const retrieveProducts = createSelector(
  selectProductsPage,
  (productPage) => productPage.products,
);
