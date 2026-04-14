import { motion } from "motion/react";
import { Zap, Brain, ShieldCheck, Target } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Zap className="text-primary" size={40} />,
      title: "Rapid Recovery",
      description: "A highly efficient 10-minute session designed to intercept the 2–3 PM wall when the brain stops working effectively."
    },
    {
      icon: <Brain className="text-primary" size={40} />,
      title: "Cognitive Clarity",
      description: "Clear the 'cumulative cognitive residue' that builds up during high-stakes corporate decision making."
    },
    {
      icon: <ShieldCheck className="text-primary" size={40} />,
      title: "Psychosocial Safety",
      description: "A confidential space to decompress away from the office, protecting you from the damage of toxic resilience."
    },
    {
      icon: <Target className="text-primary" size={40} />,
      title: "Actionable Output",
      description: "Walk out within an hour feeling calm, functional, and knowing exactly what your next step is."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-secondary mb-6">The Outcomes</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-8">Systemic Recalibration.</h1>
          <p className="text-lg sm:text-xl text-on-surface-variant font-light leading-relaxed">
            Reset Pods™ provide a fast-acting physical intervention for mid-day corporate burnout. It's an operational reset for the brain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 sm:p-12 rounded-2xl bg-surface-container-low border border-outline-variant/10 flex flex-col gap-6"
            >
              <div>{b.icon}</div>
              <h3 className="text-3xl font-bold text-on-surface">{b.title}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-primary text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to reset your baseline?</h3>
          <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join our launch event at 80 Ann St and experience the 10-minute reset firsthand.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
            Book Your Session
          </button>
        </div>
      </div>
    </motion.div>
  );
}
