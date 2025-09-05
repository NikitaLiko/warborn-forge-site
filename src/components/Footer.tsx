import { Shield, MessageCircle, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-night-ops border-t border-primary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-glow tracking-wider">
                WAR<span className="text-accent">BORN</span>
              </h3>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Элитный военный проект в Minecraft. Присоединяйся к тактическим операциям 
              и стань частью легендарного сообщества WarBorn.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 bg-primary/20 border border-accent/30 rounded tactical-hover text-accent"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary/20 border border-accent/30 rounded tactical-hover text-accent"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-accent transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-accent transition-colors">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#features" className="text-foreground/70 hover:text-accent transition-colors">
                  Особенности
                </a>
              </li>
              <li>
                <a href="#join" className="text-foreground/70 hover:text-accent transition-colors">
                  Как присоединиться
                </a>
              </li>
            </ul>
          </div>

          {/* Server Info */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Сервер</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/70">
                <span className="text-accent">IP:</span> warborn.server.ru
              </li>
              <li className="text-foreground/70">
                <span className="text-accent">Версия:</span> 1.20.4
              </li>
              <li className="text-foreground/70">
                <span className="text-accent">Режим:</span> Survival PvP
              </li>
              <li className="text-foreground/70">
                <span className="text-accent">Онлайн:</span> 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © 2024 WarBorn Project. Все права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              Правила сервера
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;