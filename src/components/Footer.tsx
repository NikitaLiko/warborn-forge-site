import { Shield, MessageCircle, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/30 py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-combat opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="floating">
          <h3 className="text-xl font-bold mb-4 glow-pulse">
            WAR<span className="text-accent">BORN</span>
          </h3>
        </div>
        <p className="text-foreground/60 text-sm">
          © 2024 WarBorn Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;