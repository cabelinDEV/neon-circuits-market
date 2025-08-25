import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="group relative bg-card-gradient rounded-lg overflow-hidden border border-border hover-lift hover:border-neon transition-all duration-300">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            R$ {product.price.toFixed(2)}
          </span>
          
          <Button
            variant="cart"
            size="sm"
            onClick={handleAddToCart}
            className="hover-glow"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-tech-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};