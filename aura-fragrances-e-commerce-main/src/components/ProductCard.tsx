import type { Product } from "@/lib/cart";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const outOfStock = product.stock === 0;

  const handleAdd = () => {
    if (outOfStock) return;
    onAddToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group animate-fade-in">
      <div className="relative overflow-hidden bg-secondary mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={640}
          height={800}
          className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {outOfStock && (
          <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
        {product.category}
      </p>
      <h3 className="font-display text-lg font-medium text-foreground mb-1">
        {product.name}
      </h3>
      <p className="font-body text-xs text-muted-foreground mb-3 leading-relaxed">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-body text-sm font-semibold text-foreground">
          Ksh {product.price.toLocaleString()}
        </span>
        <button
          onClick={handleAdd}
          disabled={outOfStock}
          className="font-body text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
