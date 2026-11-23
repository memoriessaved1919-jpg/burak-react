import { useState } from "react";
import { CartItem } from "../../libs/types/search";

const useBasket = () => {
  // [SAVAT 10/10] Refresh'dan keyin: savat localStorage'dan qayta o'qiladi
  const cartJson: string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

  const onAdd = (input: CartItem) => {
    // [SAVAT 4/10] Savatda bormi? find bilan tekshiramiz
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id,
    );
    // Bor bo'lsa, faqat sonini +1 qilamiz
    // [SAVAT 5/10] Yangi array yasaladi: bor → map bilan quantity + 1, yo'q → [...cartItems, input]. Eski array o'zgarmaydi
    if (exist) {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item,
      );
      // [SAVAT 6/10] State yangilanadi: yangi array kelgani uchun React o'zgarishni sezadi
      setCartItems(cartUpdate);
      // [SAVAT 7/10] localStorage'ga yoziladi: array JSON.stringify bilan matnga aylantiriladi
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      // Yo'q bo'lsa, oxiriga qo'shamiz
      const cartUpdate = [...cartItems, { ...input }];
      // Yangi array state'ga beriladi.
      setCartItems(cartUpdate);
      // Xuddi shu array brauzer xotirasiga ham yoziladi. localStorage faqat matn saqlaydi,
      // shuning uchun array JSON.stringify bilan matnga aylantiriladi.
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onRemove = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id,
    );
    if (exist.quantity === 1) {
      const cartUpdate = cartItems.filter(
        (item: CartItem) => item._id !== input._id,
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity - 1 }
          : item,
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onDelete = (input: CartItem) => {
    const cartUpdate = cartItems.filter(
      (item: CartItem) => item._id !== input._id,
    );
    setCartItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cartData");
  };

  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};

export default useBasket;
