import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface ProductCartItems {
  imgSrc: string;
  title: string;
  price: string;
  productId: string;
  quantity: number;
}

interface CartContextType {
  addToCart: (item: ProductCartItems) => void;
  removeCart: (item: ProductCartItems) => void;
  changeCartQuantity: (item: ProductCartItems, changeType: "plus" | "minus") => void;
  cart: ProductCartItems[];
  totalQuantity: number;
  totalPrice: number;
  formattedTotalPrice: string;
}

const initialState: CartContextType = {
  addToCart: () => {},
  removeCart: () => {},
  changeCartQuantity: () => {},
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  formattedTotalPrice: "R$ 0,00",
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
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (cartItem) => cartItem.productId === item.productId
      );

      if (productIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: updatedCart[productIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeCart = (item: ProductCartItems) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (cartItem) => cartItem.productId !== item.productId
      );
      return updatedCart;
    });
  };

  const changeCartQuantity = (
    item: ProductCartItems,
    changeType: "plus" | "minus"
  ) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (cartItem) => cartItem.productId === item.productId
      );

      if (productIndex !== -1) {
        const updatedCart = [...prevCart];
        const updatedProduct = { ...updatedCart[productIndex] };

        updatedProduct.quantity =
          changeType === "plus"
            ? updatedProduct.quantity + 1
            : Math.max(updatedProduct.quantity - 1, 0);
        updatedCart[productIndex] = updatedProduct;
        return updatedCart;
      }
      return prevCart;
    });
  };

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price);
    const cartQuantity = item.quantity;
    return acc + (isNaN(itemPrice) ? 0 : itemPrice) * cartQuantity;
  }, 0);

  const formattedTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value: CartContextType = {
    addToCart,
    removeCart,
    changeCartQuantity,
    cart,
    totalQuantity,
    totalPrice,
    formattedTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
