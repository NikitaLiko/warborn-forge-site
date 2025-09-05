import { Button } from "@/components/ui/button";
import { Shield, Sword, Users } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-accent" />
          <h1 className="text-2xl font-bold text-glow tracking-wider">
            WAR<span className="text-accent">BORN</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-accent transition-colors">
            Главная
          </a>
          <a href="#about" className="text-foreground hover:text-accent transition-colors">
            О проекте
          </a>
          <a href="#features" className="text-foreground hover:text-accent transition-colors">
            Особенности
          </a>
          <a href="#join" className="text-foreground hover:text-accent transition-colors">
            Как присоединиться
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="stealth" size="sm">
            <Users className="h-4 w-4" />
            Discord
          </Button>
          <Button variant="tactical" size="sm">
            <Sword className="h-4 w-4" />
            Играть
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;