import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
}

/** HOMEPAGE STATE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsrs: Member[];
}

/** PRODUCTs PAGE STATE **/
/** ORDERS PAGE  **/
