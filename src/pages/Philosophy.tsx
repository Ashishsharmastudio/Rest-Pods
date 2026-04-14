import { motion } from "motion/react";

export default function Philosophy() {
  const expertise = [
    "Risk Analysis",
    "Corporate Governance",
    "Process Improvement",
    "Knowledge Management",
    "Stakeholder Management"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-32">
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
              <img 
                className="rounded-xl shadow-2xl relative z-10 w-full h-[400px] sm:h-[600px] object-cover" 
                src="https://media.antigravity.dev/v1/media/06758652-9694-4d87-951e-6169543e33c2?file_type=image%2Fjpeg&file_name=input_file_0.png" 
                alt="Tatiana Lopukhova"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
                <h4 className="text-xs font-black uppercase tracking-widest text-secondary mb-4">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white border border-outline-variant/20 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-secondary mb-6">The Founder's Story</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-12 leading-tight">
              I didn’t plan to do this work.
            </h1>
            
            <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg sm:text-xl font-light">
              <p>
                I spent 25 years in corporate. Operations, knowledge, delivery... I understood how things were supposed to work.
              </p>
              <p>
                But over time, I started seeing the same pattern. On paper, everything looked fine. In reality, people were getting stuck, sidelined, or worn down. Not because they weren’t capable, but because the system around them wasn’t working the way it claimed to.
              </p>
              
              <div className="py-8 border-y border-outline-variant/10 my-12">
                <h3 className="text-2xl font-bold text-on-surface mb-4">The Pattern</h3>
                <p>
                  Conversations don’t land. Decisions stall. Accountability shifts. And you start questioning yourself. You push harder. Try to be clearer. More resilient.
                </p>
                <p className="mt-4 font-bold text-primary italic">
                  But the problem isn’t effort. It’s trying to operate clearly inside something that isn’t.
                </p>
              </div>

              <p>
                That’s the point where I step in. I help professionals understand what’s actually happening. Not what’s written in policy or said in meetings, but how the system is really behaving.
              </p>
              
              <p>
                My background is in operations and knowledge management. I’ve worked at the intersection of process, people, and decision-making. I have seen how work is designed, and how it breaks under pressure.
              </p>

              <blockquote className="font-bold text-on-surface italic border-l-4 border-secondary pl-6 py-4 text-2xl bg-surface-container-low/50">
                "Psychosocial harm is a risk that no one names early enough."
              </blockquote>

              <p>
                I don’t approach this as coaching or theory. I look at patterns, behaviour, incentives, and timing. What’s happening. Why it’s happening. What it means for you. What your options actually are.
              </p>

              <p className="text-sm font-medium text-on-surface mt-12">
                Tatiana Lopukhova<br/>
                <span className="text-on-surface-variant font-normal">Founder, Corporate Recovery Co.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 py-24 border-t border-outline-variant/10">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-on-surface">The "Why"</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Treating workplace friction as a system failure, not a personal failing. The pods are an antidote to toxic resilience.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-on-surface">The Antidote</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              A safe, confidential environment to decompress away from the office, allowing professionals to stop over-editing themselves.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-on-surface">The Outcome</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Make clear, informed decisions about how to navigate your corporate environment—whether you stay, set boundaries, or leave.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
