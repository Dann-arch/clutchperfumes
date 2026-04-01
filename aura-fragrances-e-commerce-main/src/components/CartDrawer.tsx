import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "@/lib/cart";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

const CartDrawer = ({ isOpen, onClose, items, total, onRemove, onUpdateQuantity }: CartDrawerProps) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background border-l border-border animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-xl font-semibold text-foreground">Your Cart</h2>
          <button onClick={onClose} className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/30 mb-4" />
              <p className="font-body text-sm text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-24 w-20 object-cover bg-secondary"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-sm font-medium text-foreground">{item.product.name}</h3>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{item.product.category}</p>
                    <p className="font-body text-sm font-semibold text-foreground mt-2">Ksh {item.product.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-body text-xs w-4 text-center text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => onRemove(item.product.id)}
                        className="ml-auto font-body text-[10px] tracking-widest uppercase text-muted-foreground hover:text-destructive transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex justify-between">
              <span className="font-body text-sm text-muted-foreground">Subtotal</span>
              <span className="font-body text-sm font-semibold text-foreground">Ksh {total.toLocaleString()}</span>
            </div>
            <button
              onClick={() => { onClose(); navigate("/checkout"); }}
              className="w-full font-body text-xs tracking-[0.3em] uppercase py-4 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
