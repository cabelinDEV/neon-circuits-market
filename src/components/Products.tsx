import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import laptopImage from '@/assets/laptop-gaming.jpg';
import smartphoneImage from '@/assets/smartphone-tech.jpg';
import headsetImage from '@/assets/headset-gaming.jpg';

const products = [
  {
    id: '1',
    name: 'Notebook Gamer RGB Pro',
    price: 4999.99,
    image: laptopImage,
    category: 'notebooks',
  },
  {
    id: '2',
    name: 'Smartphone Tech Ultra',
    price: 2499.99,
    image: smartphoneImage,
    category: 'smartphones',
  },
  {
    id: '3',
    name: 'Headset Gaming Elite',
    price: 899.99,
    image: headsetImage,
    category: 'acessorios',
  },
  {
    id: '4',
    name: 'Notebook Ultra Thin',
    price: 3299.99,
    image: laptopImage,
    category: 'notebooks',
  },
  {
    id: '5',
    name: 'Smartphone Pro Max',
    price: 1899.99,
    image: smartphoneImage,
    category: 'smartphones',
  },
  {
    id: '6',
    name: 'Headset Wireless Pro',
    price: 699.99,
    image: headsetImage,
    category: 'acessorios',
  },
];

const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'notebooks', name: 'Notebooks' },
  { id: 'smartphones', name: 'Smartphones' },
  { id: 'acessorios', name: 'Acessórios' },
];

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Nossos Produtos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção cuidadosamente curada de produtos tecnológicos de última geração
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "tech" : "ghost"}
              onClick={() => setSelectedCategory(category.id)}
              className="hover-glow"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};