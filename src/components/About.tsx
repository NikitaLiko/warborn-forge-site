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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              О проекте <span className="text-accent">WarBorn</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                WarBorn — это элитный военный проект в Minecraft, где каждый игрок становится 
                частью масштабных тактических операций. Мы создали уникальную среду, где 
                реализм военных действий сочетается с творческими возможностями Minecraft.
              </p>
              
              <p>
                Наш сервер предлагает сложные миссии, продвинутую систему рангов и 
                возможность участвовать в крупномасштабных битвах с использованием 
                современного военного снаряжения.
              </p>
              
              <p>
                Присоединяйся к сообществу профессиональных игроков и покажи свои 
                тактические навыки в самых сложных условиях!
              </p>
            </div>

            <div className="mt-8">
              <Button variant="tactical" size="lg" className="mr-4">
                Начать играть
              </Button>
              <Button variant="command" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="bg-card/50 border-primary/30 p-6 text-center tactical-hover backdrop-blur-sm">
                    <div className="flex flex-col items-center">
                      <div className="p-3 bg-primary/20 border border-accent/30 rounded-lg tactical-glow mb-4">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-2xl font-bold text-accent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground/70">
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <Card className="mt-8 bg-primary/10 border-accent/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-accent mb-4">
                Почему WarBorn?
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Стабильный сервер без лагов
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Активная администрация
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Регулярные обновления контента
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Дружелюбное сообщество
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;