import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

// Store qanday ko'rinishda bo'ladi.

/** REACT APP STATE **/
// Butun Storeni chizmasi
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

/** HOMEPAGE STATE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE STATE **/
export interface ProductsPageState {
  restaurants: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERS PAGE  **/
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
