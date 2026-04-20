import { motion } from "motion/react";
import { Building2, Users, BarChart3, Shield } from "lucide-react";

export default function Corporate() {
  const solutions = [
    {
      icon: <Building2 className="text-secondary" size={32} />,
      title: "Enterprise Deployment",
      description: "Scale Reset Pods™ across your global office footprint to support high-performing teams."
    },
    {
      icon: <Users className="text-secondary" size={32} />,
      title: "Team Recalibration",
      description: "Group sessions designed to clear collective cognitive residue and improve team decision-making."
    },
    {
      icon: <BarChart3 className="text-secondary" size={32} />,
      title: "Operational Analytics",
      description: "Data-driven insights into team burnout levels and recovery efficiency."
    },
    {
      icon: <Shield className="text-secondary" size={32} />,
      title: "Risk Mitigation",
      description: "Proactively address psychosocial harm and reduce the cost of corporate burnout."
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
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-secondary mb-6">Corporate Solutions</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-8 leading-tight">
              Systemic Recovery for Tier-One Firms.
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed font-light">
              Corporate Recovery Co. provides the architectural infrastructure to protect your most valuable assets: your people's cognitive capacity.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" 
              src="https://picsum.photos/seed/business-recovery/1200/800" 
              alt="Corporate environment"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {solutions.map((s, i) => (
            <div key={i} className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10">
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-on-surface mb-4">{s.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-32 py-24 border-y border-outline-variant/10">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-on-surface mb-8">Operational Risk & Psychosocial Safety</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              Founded by Tatiana Lopukhova, an ESM Knowledge Manager with 25 years in corporate operations (Kinetic IT, Arup), Corporate Recovery Co. treats workplace friction as a **system failure**. 
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-surface-container-low rounded-xl">
                <h4 className="font-bold text-on-surface mb-2">Systemic Recalibration</h4>
                <p className="text-sm text-on-surface-variant">Moving beyond 'wellness' to address the intersection of process, people, and decision-making.</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl">
                <h4 className="font-bold text-on-surface mb-2">Evidence-Based Recovery</h4>
                <p className="text-sm text-on-surface-variant">Utilizing patterns, behaviour, and incentives to protect high-performers from burnout.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-highest p-8 sm:p-16 rounded-3xl">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface mb-8">Partner with Corporate Recovery Co.</h3>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
              We are officially launching on April 24. Join the waitlist for enterprise partnerships and bring Reset Pods™ to your organization.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Corporate Email Address" 
                className="flex-grow px-6 py-4 rounded-lg bg-white border border-outline-variant/20 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all">
                Request Partnership
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
