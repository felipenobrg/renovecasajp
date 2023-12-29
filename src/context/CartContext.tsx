// CartContext.tsx
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface ProductCartItems {
  imgSrc: string;
  title: string;
  price: string;
  productId: number;
}

interface CartContextType {
  cart: ProductCartItems[];
  addToCart: (item: ProductCartItems) => void;
  cartQuantity: number;
  totalPrice: number;
  formattedTotalPrice: string;
}

const initialState: CartContextType = {
  cart: [],
  addToCart: () => {},
  cartQuantity: 0,
  totalPrice: 0,
  formattedTotalPrice: 'R$ 0,00',
};

const CartContext = createContext<CartContextType>(initialState);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<ProductCartItems[]>(initialState.cart);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart) as ProductCartItems[]);
    }
  }, []);

  const addToCart = (item: ProductCartItems) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartQuantity = cart.length;

  const totalPrice = cart.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price);
    return acc + (isNaN(itemPrice) ? 0 : itemPrice);
  }, 0);

  const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice);

  const value: CartContextType = {
    cart,
    addToCart,
    cartQuantity,
    totalPrice,
    formattedTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
