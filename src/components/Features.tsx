import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Sword, Users, Target, Zap, Crown } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Тактическая защита",
      description: "Строй неприступные крепости и оборонительные сооружения"
    },
    {
      icon: Sword,
      title: "Реалистичное PvP",
      description: "Продвинутая система боя с военным снаряжением"
    },
    {
      icon: Users,
      title: "Командная работа",
      description: "Создавай альянсы и координируй военные операции"
    },
    {
      icon: Target,
      title: "Миссии",
      description: "Выполняй сложные тактические задания"
    },
    {
      icon: Zap,
      title: "Современное оружие",
      description: "Арсенал военного снаряжения и техники"
    },
    {
      icon: Crown,
      title: "Ранговая система",
      description: "Продвигайся по военной иерархии"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 gradient-tactical opacity-30"></div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-accent/20 rounded-full rotating"></div>
        <div className="absolute top-40 right-16 w-12 h-12 border border-primary/30 rotating" style={{animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-accent/15 rounded rotating"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">Возможности</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto gradient-pulse rounded-full flex items-center justify-center glow-pulse">
                    <IconComponent className="h-8 w-8 text-background group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-accent group-hover:text-primary-glow transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;