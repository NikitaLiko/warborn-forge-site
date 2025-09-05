import { Button } from "@/components/ui/button";
import { Shield, Target, Zap } from "lucide-react";
import heroImage from "@/assets/warborn-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="WarBorn Military Operations" 
          className="w-full h-full object-cover minecraft-pixel"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow tracking-wider">
            WAR<span className="text-accent">BORN</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-medium">
            Элитный военный проект в Minecraft
          </p>
          
          {/* Description */}
          <p className="text-lg mb-12 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Присоединяйся к тактическим операциям, строй неприступные базы и сражайся за выживание 
            в самом реалистичном военном сервере Minecraft
          </p>

          {/* Features Icons */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/20 border border-accent/30 rounded-lg tactical-glow">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <span className="text-sm font-medium">Защита</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/20 border border-accent/30 rounded-lg tactical-glow">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <span className="text-sm font-medium">Точность</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary/20 border border-accent/30 rounded-lg tactical-glow">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <span className="text-sm font-medium">Мощь</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="tactical" size="lg" className="text-lg px-8 py-6">
              Начать Операцию
            </Button>
            <Button variant="command" size="lg" className="text-lg px-8 py-6">
              Присоединиться к Discord
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full p-1">
          <div className="w-1 h-3 bg-accent rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;