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
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            WAR<span className="text-accent">BORN</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-foreground/80 mb-12 max-w-xl mx-auto">
            Элитный военный проект в Minecraft
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="tactical" size="lg">
              Начать Операцию
            </Button>
            <Button variant="outline" size="lg">
              Discord
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