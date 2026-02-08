import { Link } from "react-router-dom";
import { Satellite, Github, Linkedin, Mail } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Satellite className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg">SAR-RANG</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              A deep learning system for SAR image colorization using Conditional GANs. Final year engineering project
              focused on improving SAR data interpretability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Blogs", "FAQs"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 SAR-RANG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
