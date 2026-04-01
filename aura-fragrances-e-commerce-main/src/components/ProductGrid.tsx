import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/cart";
import { forwardRef } from "react";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = forwardRef<HTMLElement, ProductGridProps>(({ onAddToCart }, ref) => {
  return (
    <section ref={ref} id="product-grid" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-3">
            The Collection
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Our Fragrances
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {products.map((product, i) => (
            <div key={product.id} style={{ animationDelay: `${i * 100}ms` }}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ProductGrid.displayName = "ProductGrid";

export default ProductGrid;
