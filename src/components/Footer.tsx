import { Github, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="gradient-text">Riyad</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Riyad-07"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:riyadislam1998@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+8801521550925"
              className="social-icon"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Md Riyad Islam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
