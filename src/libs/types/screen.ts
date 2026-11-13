import { Member } from "./member";
import { Product } from "./product";

// Store qanday ko'rinishda bo'ladi.

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
}

/** HOMEPAGE STATE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE STATE **/
/** ORDERS PAGE  **/
