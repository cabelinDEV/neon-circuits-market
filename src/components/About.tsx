import { Shield, Truck, Headphones, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Shield,
    title: 'Garantia Total',
    description: 'Todos os produtos com garantia estendida e suporte técnico especializado',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Entregamos em todo o Brasil com agilidade e segurança',
  },
  {
    icon: Headphones,
    title: 'Suporte 24/7',
    description: 'Atendimento especializado disponível 24 horas por dia',
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Produtos selecionados das melhores marcas do mercado',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Sua referência em </span>
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Tecnologia
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Na TechStore, somos apaixonados por tecnologia e inovação. Há mais de 10 anos no mercado, 
              oferecemos os melhores produtos tecnológicos com qualidade garantida e atendimento excepcional.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Nossa missão é democratizar o acesso à tecnologia de ponta, oferecendo produtos de alta qualidade 
              com os melhores preços do mercado. Cada produto é cuidadosamente selecionado por nossa equipe de especialistas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="tech" size="lg">
                Nossa História
              </Button>
              <Button variant="outline" size="lg">
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card-gradient rounded-lg p-6 border border-border hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card-gradient rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1k+</div>
              <div className="text-muted-foreground">Produtos Disponíveis</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};