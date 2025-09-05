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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">Возможности</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <IconComponent className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-accent">
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