const Footer = () => (
  <footer id="about" className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-xl font-semibold mb-4">Clutch & Co.</h3>
          <p className="font-body text-xs text-primary-foreground/60 leading-relaxed">
            Luxury scents handcrafted with the world's finest ingredients. Each fragrance tells a unique story.
          </p>
        </div>
        <div>
          <h4 className="font-body text-[10px] tracking-[0.3em] uppercase mb-4 text-gold-light">Quick Links</h4>
          <ul className="space-y-2 font-body text-xs text-primary-foreground/60">
            <li><a href="#product-grid" className="hover:text-primary-foreground transition-colors">Shop</a></li>
            <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-primary-foreground/40">
          © 2026 Clutch & Co. Luxury Scents. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
