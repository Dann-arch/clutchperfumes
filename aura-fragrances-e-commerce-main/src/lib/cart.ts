export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

const CART_KEY = "clutch-co-cart";

export function getCart(): CartItem[] {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addToCart(product: Product): CartItem[] {
  const cart = getCart();
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart().filter((item) => item.product.id !== productId);
  saveCart(cart);
  return cart;
}

export function updateQuantity(productId: string, quantity: number): CartItem[] {
  const cart = getCart();
  const item = cart.find((i) => i.product.id === productId);
  if (item) {
    item.quantity = Math.max(0, quantity);
    if (item.quantity === 0) return removeFromCart(productId);
  }
  saveCart(cart);
  return cart;
}

export function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
