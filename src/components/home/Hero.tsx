import { ArrowRight, Radar, Cpu, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8 animate-fade-up opacity-0 stagger-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Final Year Engineering Project</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 stagger-2">
            <span className="inline-block animate-text-reveal">SAR Image</span>{" "}
            <span className="relative inline-block">
              <span className="text-gradient animate-glow-pulse">Colorization</span>
              <span className="absolute inset-0 text-gradient opacity-50 animate-text-flicker" aria-hidden="true">Colorization</span>
            </span>
            <br />
            <span className="inline-block animate-text-reveal-delayed">Using Deep Learning</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up opacity-0 stagger-3">Transform grayscale Synthetic Aperture Radar images into meaningful colorized visuals using Pix2Pix-based Conditional GANs improving interpretability for disaster monitoring, environmental analysis, and defense applications.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/about">
                Explore Research
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Visual Flow */}
          <div className="animate-fade-up opacity-0 stagger-5">
            <p className="text-sm text-muted-foreground mb-6">How It Works</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* SAR Image */}
              <div className="glass rounded-2xl p-6 w-48 card-hover">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center">
                  <Radar className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="font-medium text-sm">Grayscale SAR</p>
                <p className="text-xs text-muted-foreground">Input Image</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="h-6 w-6 text-primary hidden md:block" />
              <div className="h-6 w-px bg-primary md:hidden" />

              {/* Deep Learning */}
              <div className="glass rounded-2xl p-6 w-48 card-hover border-primary/30 glow-subtle">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium text-sm">CGAN Model</p>
                <p className="text-xs text-muted-foreground">Pix2Pix Processing</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="h-6 w-6 text-primary hidden md:block" />
              <div className="h-6 w-px bg-primary md:hidden" />

              {/* Colorized Output */}
              <div className="glass rounded-2xl p-6 w-48 card-hover">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Image className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium text-sm">Colorized SAR</p>
                <p className="text-xs text-muted-foreground">Enhanced Output</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};