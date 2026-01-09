import { motion } from "framer-motion";
import { ExternalLink, Shield, Car, Brain, Clock, FileSearch, Eye } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "IoT Intrusion Detection System",
    category: "Network Security",
    description: "Complete IDS using real-world network traffic with Uniflow, Biflow, and packet-level representations. Comparative study of balanced vs imbalanced datasets with focus on behavioral inference of attacks.",
    tech: ["XGBoost", "Neural Networks", "SVM", "Stacking Ensembles"],
    highlight: "Research paper in preparation",
  },
  {
    icon: FileSearch,
    title: "JobDesk.ai - Resume Screening Agent",
    category: "Enterprise AI",
    description: "Enterprise-grade resume screening system using LangGraph-based multi-agent architecture. Models hiring as a structured decision workflow with skill extraction, scoring, and explainable recommendations.",
    tech: ["LangGraph", "LLM Agents", "RAG", "Multi-Agent Systems"],
    highlight: "Production-ready system",
  },
  {
    icon: Eye,
    title: "Automatic Number Plate Recognition",
    category: "Computer Vision",
    description: "ANPR system for apartment gate automation in Indian traffic conditions using YOLOv8. Integrated OCR with Tesseract, optimized for front-facing, short-range deployment scenarios.",
    tech: ["YOLOv8", "Tesseract OCR", "OpenCV", "Python"],
    highlight: "Real deployment ready",
  },
  {
    icon: Brain,
    title: "Medical Image Segmentation",
    category: "Medical AI",
    description: "Chest CT scan segmentation for lungs, heart, and trachea. Custom pipeline from raw NRRD data with multi-class tensor representations—no pretrained models used.",
    tech: ["PyTorch", "NRRD Processing", "3D Segmentation", "Medical Imaging"],
    highlight: "From-scratch implementation",
  },
  {
    icon: Clock,
    title: "Time Series Diffusion Models",
    category: "Ongoing Research",
    description: "Exploring diffusion-based generative approaches for temporal data modeling, forecasting, and anomaly-aware generation. Focus on long-range dependencies and uncertainty quantification.",
    tech: ["Diffusion Models", "Time Series", "PyTorch", "Probabilistic ML"],
    highlight: "Active research",
  },
  {
    icon: Car,
    title: "Self-Driving Car Simulation",
    category: "Reinforcement Learning",
    description: "RL-based autonomous driving agent for Indian road conditions using CARLA (Town10HD_Opt). Custom Gym environment with realistic traffic and collision detection.",
    tech: ["CARLA", "OpenAI Gym", "PPO/DQN", "Python"],
    highlight: "India-specific scenarios",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            End-to-end solutions spanning security, vision, medical AI, and enterprise systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all group hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <span className="text-xs text-primary font-medium">{project.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
