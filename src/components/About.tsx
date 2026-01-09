import { motion } from "framer-motion";
import { Brain, Shield, Eye, LineChart, Bot, Cpu } from "lucide-react";

const focusAreas = [
  { icon: Shield, label: "Network Security", description: "IoT Intrusion Detection Systems" },
  { icon: Eye, label: "Computer Vision", description: "Object Detection & Recognition" },
  { icon: Brain, label: "Medical Imaging", description: "CT Segmentation Pipelines" },
  { icon: LineChart, label: "Time Series", description: "Diffusion Models & Forecasting" },
  { icon: Bot, label: "Enterprise AI", description: "LangGraph Agent Systems" },
  { icon: Cpu, label: "Reinforcement Learning", description: "Simulation & Control" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading mx-auto">
            A data scientist driven by building intelligent systems that work under real-world constraints
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 gradient-text">My Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rather than focusing solely on benchmark performance, I prioritize 
                <span className="text-foreground font-medium"> interpretability</span>, 
                <span className="text-foreground font-medium"> robustness</span>, and 
                <span className="text-foreground font-medium"> system-level thinking</span>—ensuring 
                that models are not only accurate but also meaningful and usable in production contexts.
              </p>
              <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                "AI systems should be interpretable, context-aware, and engineered for reality—not just for benchmarks."
              </blockquote>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">MSc</span>
                </div>
                <div>
                  <p className="font-medium">5-Year Integrated MSc Data Science</p>
                  <p className="text-muted-foreground text-sm">Amrita Vishwa Vidyapeetham, Ettimadai</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Research & Engineering Focus</h3>
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors group"
                >
                  <area.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium mb-1">{area.label}</h4>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
