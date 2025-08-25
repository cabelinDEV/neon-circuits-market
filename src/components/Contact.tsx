import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@techstore.com.br',
      link: 'mailto:contato@techstore.com.br'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'São Paulo, SP - Brasil',
      link: '#'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Entre em </span>
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida ou precisa de ajuda? Nossa equipe está pronta para atender você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card-gradient rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-surface-elevated border-border focus:border-primary"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-surface-elevated border-border focus:border-primary"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-surface-elevated border-border focus:border-primary resize-none"
                  placeholder="Como podemos ajudar você?"
                />
              </div>

              <Button type="submit" variant="tech" size="lg" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Outras formas de contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-card-gradient rounded-lg border border-border hover-lift group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-card-gradient rounded-lg p-6 border border-border">
              <h4 className="text-lg font-semibold mb-4">Perguntas Frequentes</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">Qual o prazo de entrega?</p>
                  <p className="text-muted-foreground">Entregamos em todo o Brasil em até 7 dias úteis</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Posso parcelar minha compra?</p>
                  <p className="text-muted-foreground">Sim, parcelamos em até 12x sem juros no cartão</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Como funciona a garantia?</p>
                  <p className="text-muted-foreground">Todos os produtos têm garantia de fábrica + garantia estendida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};