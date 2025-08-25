import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-tech.jpg';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center tech-bg overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero Tech" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-dark-gradient opacity-80" />
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-purple/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-elevated border border-border mb-6">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-muted-foreground">Tecnologia de Ponta</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              A melhor tecnologia
            </span>
            <br />
            <span className="text-foreground">ao seu alcance</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubra os produtos mais inovadores do mercado. Notebooks, smartphones, 
            periféricos e gadgets com a qualidade que você merece.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="tech" size="xl" className="group">
            Ver Produtos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="neon" size="xl">
            Ofertas Especiais
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Produtos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50k+</div>
            <div className="text-muted-foreground">Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};