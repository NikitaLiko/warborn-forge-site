import { Button } from "@/components/ui/button";
import { Shield, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animated"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent/30 rounded-full floating"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary-glow/40 rounded-full floating-delayed"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/50 rounded-full floating"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/40 rounded-full floating-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent/60 rounded-full floating"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-glow/50 rounded-full floating-delayed"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-32 w-20 h-20 border border-accent/20 rotating"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border border-primary/30 rotating" style={{animationDirection: 'reverse'}}></div>
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
            <Button variant="tactical" size="lg" className="glow-pulse">
              Начать Операцию
            </Button>
            <Button variant="outline" size="lg" className="gradient-pulse">
              Discord
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 floating">
        <div className="w-6 h-10 border-2 border-accent/60 rounded-full p-1">
          <div className="w-1 h-3 bg-accent rounded-full mx-auto glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;