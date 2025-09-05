import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Sword, Users, Target, Zap, Crown } from "lucide-react";
import militaryBase from "@/assets/military-base.jpg";
import combatScene from "@/assets/combat-scene.jpg";

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
    <section id="features" className="py-20 bg-gradient-to-b from-background to-camo-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Боевые <span className="text-accent">Возможности</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            WarBorn предлагает уникальный военный опыт с продвинутыми системами боя и тактики
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-card/50 border-primary/30 tactical-hover p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/20 border border-accent/30 rounded-lg tactical-glow mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Screenshots Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative group">
            <img 
              src={militaryBase} 
              alt="Военная база WarBorn" 
              className="w-full h-64 object-cover minecraft-pixel border-2 border-primary/30 tactical-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-bold text-accent mb-2">Военные базы</h3>
                <p className="text-foreground/90">Стройте и защищайте свои укрепления</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <img 
              src={combatScene} 
              alt="Боевые действия WarBorn" 
              className="w-full h-64 object-cover minecraft-pixel border-2 border-primary/30 tactical-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-bold text-accent mb-2">PvP сражения</h3>
                <p className="text-foreground/90">Участвуйте в эпических битвах</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;