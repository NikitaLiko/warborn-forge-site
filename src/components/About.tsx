import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Server, Trophy, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Активных игроков", value: "500+" },
    { icon: Server, label: "Версия сервера", value: "1.20.4" },
    { icon: Trophy, label: "Проведено операций", value: "1000+" },
    { icon: Clock, label: "Время работы", value: "24/7" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-camo-dark to-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">
            О проекте <span className="text-accent">WarBorn</span>
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            Элитный военный проект в Minecraft с тактическими операциями, 
            реалистичным PvP и продвинутой системой рангов.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;