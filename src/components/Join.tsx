import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download, MessageCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Join = () => {
  const { toast } = useToast();
  
  const serverIP = "warborn.server.ru";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Скопировано!",
      description: "IP адрес сервера скопирован в буфер обмена",
    });
  };

  const steps = [
    {
      number: "01",
      title: "Скачай Minecraft",
      description: "Убедись, что у тебя установлена версия 1.20.4"
    },
    {
      number: "02", 
      title: "Подключись к серверу",
      description: "Используй IP адрес для подключения"
    },
    {
      number: "03",
      title: "Пройди регистрацию",
      description: "Создай аккаунт и выбери стартовую фракцию"
    },
    {
      number: "04",
      title: "Начни играть",
      description: "Присоединяйся к операциям и стройj свою базу"
    }
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-b from-background to-night-ops">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Присоединяйся к <span className="text-accent">Операции</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Готов стать частью элитного военного подразделения? Следуй инструкции ниже
          </p>
        </div>

        {/* Server IP Card */}
        <Card className="max-w-2xl mx-auto mb-16 bg-primary/10 border-accent/30 p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-accent mb-4">IP Адрес Сервера</h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <code className="text-2xl font-mono bg-muted/30 px-6 py-3 rounded border border-primary/30">
              {serverIP}
            </code>
            <Button 
              variant="combat" 
              size="lg"
              onClick={() => copyToClipboard(serverIP)}
            >
              <Copy className="h-5 w-5" />
              Копировать
            </Button>
          </div>
          <p className="text-foreground/70">
            Версия: <span className="text-accent font-semibold">1.20.4</span> | 
            Режим: <span className="text-accent font-semibold">Survival PvP</span>
          </p>
        </Card>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/50 border-primary/30 p-6 tactical-hover backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-accent">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="tactical" size="lg" className="text-lg px-8 py-6">
            <Download className="h-5 w-5" />
            Скачать Minecraft
          </Button>
          
          <Button variant="command" size="lg" className="text-lg px-8 py-6">
            <MessageCircle className="h-5 w-5" />
            Discord Сервер
          </Button>
          
          <Button variant="stealth" size="lg" className="text-lg px-8 py-6">
            <FileText className="h-5 w-5" />
            Правила сервера
          </Button>
        </div>

        {/* Requirements */}
        <Card className="max-w-4xl mx-auto mt-12 bg-muted/20 border-primary/20 p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">
            Системные требования
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-accent mb-3">Минимальные</h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>Java 17+</li>
                <li>4 ГБ RAM</li>
                <li>Minecraft 1.20.4</li>
                <li>Стабильное интернет соединение</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-accent mb-3">Рекомендуемые</h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>Java 21</li>
                <li>8+ ГБ RAM</li>
                <li>Minecraft Premium</li>
                <li>Discord для связи</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-accent mb-3">Опциональные</h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>OptiFine/Sodium</li>
                <li>JourneyMap</li>
                <li>Microphone</li>
                <li>Tactical текстур пак</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Join;