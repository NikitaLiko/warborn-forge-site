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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-accent">Присоединиться</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto text-center mb-8">
          <div className="bg-muted/20 p-6 rounded border border-primary/30">
            <code className="text-lg font-mono text-accent">
              {serverIP}
            </code>
            <div className="mt-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(serverIP)}
              >
                <Copy className="h-4 w-4 mr-2" />
                Копировать IP
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="tactical" size="lg">
            <MessageCircle className="h-5 w-5 mr-2" />
            Discord
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Join;