import { Button } from '@/components/ui/button';
import { Clock, Zap, Percent } from 'lucide-react';

export const Offers = () => {
  return (
    <section id="offers" className="py-20 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Offer Banner */}
        <div className="relative bg-card-gradient rounded-2xl p-8 md:p-12 mb-12 overflow-hidden border border-border">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-tech-gradient opacity-10" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tech-purple/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary mb-6">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Oferta Limitada</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Até </span>
              <span className="bg-tech-gradient bg-clip-text text-transparent">50% OFF</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aproveite descontos incríveis em notebooks gamers, smartphones premium e acessórios de última geração
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="tech" size="lg">
                Ver Ofertas
              </Button>
              <Button variant="neon" size="lg">
                Cupons Exclusivos
              </Button>
            </div>
          </div>
        </div>

        {/* Offer Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card-gradient rounded-lg p-6 border border-border hover-lift group">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 transition-colors">
                <Percent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Notebooks Gaming</h3>
              <p className="text-3xl font-bold text-primary mb-2">40% OFF</p>
              <p className="text-muted-foreground mb-4">
                Os melhores notebooks para games com descontos imperdíveis
              </p>
              <Button variant="outline" size="sm" className="hover:border-primary">
                Ver Mais
              </Button>
            </div>
          </div>

          <div className="bg-card-gradient rounded-lg p-6 border border-border hover-lift group">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-purple/20 rounded-full mb-4 group-hover:bg-tech-purple/30 transition-colors">
                <Clock className="h-8 w-8 text-tech-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flash Sale</h3>
              <p className="text-3xl font-bold text-tech-purple mb-2">24h</p>
              <p className="text-muted-foreground mb-4">
                Ofertas relâmpago com duração limitada
              </p>
              <Button variant="outline" size="sm" className="hover:border-tech-purple">
                Ver Mais
              </Button>
            </div>
          </div>

          <div className="bg-card-gradient rounded-lg p-6 border border-border hover-lift group">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-4 group-hover:bg-success/30 transition-colors">
                <Zap className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frete Grátis</h3>
              <p className="text-3xl font-bold text-success mb-2">R$ 0</p>
              <p className="text-muted-foreground mb-4">
                Frete gratuito em compras acima de R$ 299
              </p>
              <Button variant="outline" size="sm" className="hover:border-success">
                Ver Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};