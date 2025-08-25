import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Carreiras', href: '#' },
    { name: 'Imprensa', href: '#' },
    { name: 'Parcerias', href: '#' },
  ],
  support: [
    { name: 'Central de Ajuda', href: '#' },
    { name: 'Trocas e Devoluções', href: '#' },
    { name: 'Garantia', href: '#' },
    { name: 'Rastreamento', href: '#' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'LGPD', href: '#' },
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                  TechStore
                </h3>
                <p className="text-muted-foreground mt-2">
                  Sua referência em tecnologia e inovação. Produtos de qualidade com os melhores preços do mercado.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">contato@techstore.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">(11) 99999-9999</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Suporte</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="max-w-md">
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">
                Receba as melhores ofertas e novidades em primeira mão
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-2 bg-surface-elevated border border-border rounded-md focus:outline-none focus:border-primary"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 TechStore. Todos os direitos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-surface-elevated rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};