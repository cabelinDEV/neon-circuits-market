import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Produtos', href: '#products' },
    { name: 'Ofertas', href: '#offers' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-tech-gradient bg-clip-text text-transparent">
              TechStore
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow-neon px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:text-primary relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </Button>

            <Button variant="neon" size="sm" className="hidden md:flex">
              Login
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-md rounded-lg mt-2 border border-border">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Button variant="neon" size="sm" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};