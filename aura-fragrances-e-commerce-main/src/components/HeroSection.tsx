import heroImage from "@/assets/hero-perfume.jpg";

interface HeroSectionProps {
  onShopClick: () => void;
}

const HeroSection = ({ onShopClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury perfume collection"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>
      <div className="relative flex min-h-[80vh] items-center justify-center text-center px-4">
        <div className="max-w-2xl animate-fade-in">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-light mb-4">
            Luxury Scents
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-6">
            Discover Your
            <br />
            <span className="italic text-gold-light">Signature Scent</span>
          </h1>
          <p className="font-body text-sm md:text-base text-primary-foreground/80 mb-10 max-w-md mx-auto leading-relaxed">
            Handcrafted fragrances that tell your story. Each bottle is a journey through the world's finest ingredients.
          </p>
          <button
            onClick={onShopClick}
            className="font-body text-xs tracking-[0.3em] uppercase px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Discover the Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
