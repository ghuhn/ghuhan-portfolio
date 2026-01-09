import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading mx-auto">
            Professional journey and key milestones
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border ml-4">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-sm font-mono text-primary">Internship</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Data Science</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Helyxon Technologies Pvt Ltd</h3>
              <p className="text-muted-foreground text-sm mb-4">Data Science Intern</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Applied data science on real business problems involving preprocessing, EDA, and feature engineering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Developed end-to-end analytical pipelines with clean, reproducible workflows
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Translated business requirements into actionable data solutions
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-8 border-l-2 border-border"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border ml-4">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-sm font-mono text-primary">Education</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Ongoing</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Amrita Vishwa Vidyapeetham</h3>
              <p className="text-muted-foreground text-sm mb-2">Ettimadai, Coimbatore</p>
              <p className="text-foreground font-medium">5-Year Integrated MSc in Data Science</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Comprehensive program covering statistics, machine learning, deep learning, 
                  and applied AI with hands-on research experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Python", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost",
              "LangChain", "LangGraph", "OpenCV", "YOLO", "Pandas", "NumPy",
              "SQL", "Docker", "Git", "CARLA", "Hugging Face", "Streamlit",
              "FastAPI", "Matplotlib", "Seaborn"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
