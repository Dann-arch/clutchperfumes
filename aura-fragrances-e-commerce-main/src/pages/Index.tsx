import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const cart = useCart();
  const shopRef = useRef<HTMLElement>(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cart.count} onCartClick={() => cart.setIsOpen(true)} onShopClick={scrollToShop} />
      <HeroSection onShopClick={scrollToShop} />
      <ProductGrid ref={shopRef} onAddToCart={cart.add} />
      <Footer />
      <CartDrawer
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        total={cart.total}
        onRemove={cart.remove}
        onUpdateQuantity={cart.update}
      />
    </div>
  );
};

export default Index;
