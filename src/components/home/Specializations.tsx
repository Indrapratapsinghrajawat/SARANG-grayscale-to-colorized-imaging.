import { Radio, Brain, Globe, AlertTriangle } from "lucide-react";

const specializations = [
  {
    icon: Radio,
    title: "SAR Image Processing",
    description: "Specialized techniques for handling radar imagery, including speckle noise preservation and texture-aware processing.",
  },
  {
    icon: Brain,
    title: "Deep Learning & GANs",
    description: "Conditional Generative Adversarial Networks optimized for SAR-specific colorization without domain translation artifacts.",
  },
  {
    icon: Globe,
    title: "Remote Sensing",
    description: "Earth observation applications leveraging all-weather, day-and-night SAR imaging capabilities.",
  },
  {
    icon: AlertTriangle,
    title: "Disaster Intelligence",
    description: "Rapid interpretation tools for emergency response, environmental monitoring, and defense surveillance.",
  },
];

export const Specializations = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Specializations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This research integrates multiple domains to deliver a robust SAR colorization system 
            that maintains scientific integrity while improving visual interpretability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 card-hover group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <spec.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{spec.title}</h3>
              <p className="text-sm text-muted-foreground">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
