import { Shield, MessageCircle, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-night-ops border-t border-primary/30 py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-4">
          WAR<span className="text-accent">BORN</span>
        </h3>
        <p className="text-foreground/60 text-sm">
          © 2024 WarBorn Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;