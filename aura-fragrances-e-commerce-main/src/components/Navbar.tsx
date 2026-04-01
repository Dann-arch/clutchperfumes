import { ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.jpg";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onShopClick: () => void;
}

const Navbar = ({ cartCount, onCartClick, onShopClick }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Clutch & Co." className="h-12 w-12 rounded-full object-cover" />
          <span className="font-display text-xl font-semibold tracking-wide text-foreground">
            Clutch & Co.
          </span>
        </a>

        <nav className="flex items-center gap-8">
          <button
            onClick={onShopClick}
            className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Shop
          </button>
          <a
            href="#about"
            className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            About
          </a>
          <button
            onClick={onCartClick}
            className="relative p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
