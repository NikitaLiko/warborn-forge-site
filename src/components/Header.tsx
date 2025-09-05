import { Button } from "@/components/ui/button";
import { Shield, Sword, Users } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">
            WAR<span className="text-accent">BORN</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-foreground/80 hover:text-accent transition-colors">
            О проекте
          </a>
          <a href="#features" className="text-foreground/80 hover:text-accent transition-colors">
            Особенности
          </a>
          <a href="#join" className="text-foreground/80 hover:text-accent transition-colors">
            Присоединиться
          </a>
        </div>

        <Button variant="tactical" size="sm">
          Играть
        </Button>
      </nav>
    </header>
  );
};

export default Header;