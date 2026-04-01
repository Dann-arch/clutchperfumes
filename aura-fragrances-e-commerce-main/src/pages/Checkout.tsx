import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import { getCart, calculateTotal, type CartItem } from "@/lib/cart";

const Checkout = () => {
  const navigate = useNavigate();
  const [items] = useState<CartItem[]>(getCart);
  const total = calculateTotal(items);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      localStorage.removeItem("clutch-co-cart");
    }, 2000);
  };

  if (items.length === 0 && !success) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <p className="font-display text-2xl text-foreground mb-4">Your cart is empty</p>
        <button onClick={() => navigate("/")} className="font-body text-xs tracking-[0.3em] uppercase px-8 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
          Continue Shopping
        </button>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
        <div className="animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Lock className="h-7 w-7 text-accent" />
          </div>
          <h1 className="font-display text-3xl font-semibold text-foreground mb-3">Order Confirmed</h1>
          <p className="font-body text-sm text-muted-foreground mb-8 max-w-sm">
            Thank you for your purchase! Your luxury fragrances are on their way.
          </p>
          <button onClick={() => navigate("/")} className="font-body text-xs tracking-[0.3em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </button>

        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-10">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form fields */}
          <div className="lg:col-span-3 space-y-8">
            {/* Shipping */}
            <div>
              <h2 className="font-display text-lg font-medium text-foreground mb-5">Shipping Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="First Name" value={form.firstName} onChange={(v) => update("firstName", v)} required />
                <Input label="Last Name" value={form.lastName} onChange={(v) => update("lastName", v)} required />
                <Input label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required className="sm:col-span-2" />
                <Input label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} required className="sm:col-span-2" />
                <Input label="Address" value={form.address} onChange={(v) => update("address", v)} required className="sm:col-span-2" />
                <Input label="City" value={form.city} onChange={(v) => update("city", v)} required />
                <Input label="ZIP / Postal Code" value={form.zip} onChange={(v) => update("zip", v)} required />
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="font-display text-lg font-medium text-foreground mb-5">Payment Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 relative">
                  <Input label="Card Number" value={form.cardNumber} onChange={(v) => update("cardNumber", v)} placeholder="1234 5678 9012 3456" required maxLength={19} />
                  <CreditCard className="absolute right-3 top-9 h-4 w-4 text-muted-foreground" />
                </div>
                <Input label="Expiry (MM/YY)" value={form.expiry} onChange={(v) => update("expiry", v)} placeholder="MM/YY" required maxLength={5} />
                <Input label="CVV" value={form.cvv} onChange={(v) => update("cvv", v)} placeholder="123" required maxLength={4} />
              </div>
              <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                <Lock className="h-3 w-3" />
                <span className="font-body text-[10px] tracking-widest uppercase">Secure & encrypted payment</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-secondary/50 p-6 sticky top-24">
              <h2 className="font-display text-lg font-medium text-foreground mb-5">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img src={item.product.image} alt={item.product.name} className="h-16 w-14 object-cover bg-secondary" />
                    <div className="flex-1">
                      <p className="font-display text-sm text-foreground">{item.product.name}</p>
                      <p className="font-body text-[10px] text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-body text-sm font-semibold text-foreground">
                      Ksh {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between font-body text-xs text-muted-foreground">
                  <span>Subtotal</span>
                  <span>Ksh {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body text-xs text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-body text-sm font-semibold text-foreground pt-2 border-t border-border">
                  <span>Total</span>
                  <span>Ksh {total.toLocaleString()}</span>
                </div>
              </div>
              <button
                type="submit"
                disabled={processing}
                className="w-full mt-6 font-body text-xs tracking-[0.3em] uppercase py-4 bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-60 disabled:cursor-wait"
              >
                {processing ? "Processing..." : `Pay Ksh ${total.toLocaleString()}`}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function Input({
  label, value, onChange, className = "", type = "text", ...props
}: {
  label: string; value: string; onChange: (v: string) => void; className?: string; type?: string;
  [key: string]: unknown;
}) {
  return (
    <div className={className}>
      <label className="block font-body text-[10px] tracking-widest uppercase text-muted-foreground mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full font-body text-sm bg-background border border-border px-3 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
        {...props}
      />
    </div>
  );
}

export default Checkout;
