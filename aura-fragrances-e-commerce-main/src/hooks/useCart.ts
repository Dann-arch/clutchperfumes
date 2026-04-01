import { useState, useCallback } from "react";
import { getCart, addToCart, removeFromCart, updateQuantity, calculateTotal, getCartCount, type CartItem, type Product } from "@/lib/cart";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(getCart);
  const [isOpen, setIsOpen] = useState(false);

  const add = useCallback((product: Product) => {
    setItems(addToCart(product));
  }, []);

  const remove = useCallback((productId: string) => {
    setItems(removeFromCart(productId));
  }, []);

  const update = useCallback((productId: string, quantity: number) => {
    setItems(updateQuantity(productId, quantity));
  }, []);

  return {
    items,
    isOpen,
    setIsOpen,
    add,
    remove,
    update,
    total: calculateTotal(items),
    count: getCartCount(items),
  };
}
