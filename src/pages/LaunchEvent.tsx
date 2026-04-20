import { motion } from "motion/react";
import { 
  ArrowDown, 
  Calendar, 
  Clock, 
  MapPin, 
  Car, 
  Train, 
  Bike, 
  Footprints 
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 md:px-16 overflow-hidden">
      <div className="z-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.1em] uppercase rounded-full mb-6"
        >
          Corporate Recovery Co. Presents
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8 leading-[0.9]"
        >
          Free 10-Minute <br /> 
          <span className="text-primary-dim">Reset for Burnout.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 font-light leading-relaxed"
        >
          Intercept the 2–3 PM wall. A rapid, physical intervention for high-performers navigating complex corporate systems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={() => window.location.href = "/booking"}
            className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-xl shadow-primary/10"
          >
            Book Appointment
            <ArrowDown size={20} />
          </button>
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-20 md:opacity-40 -z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover" 
          src="https://picsum.photos/seed/reset-hero/1920/1080" 
          alt="Modern corporate office"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const Problem = () => {
  const symptoms = [
    { title: "Exhausted but Wired", detail: "Replaying work problems at night while showing up without clarity." },
    { title: "Toxic Resilience", detail: "Trying to 'push through' or 'be more resilient' when the system is failing." },
    { title: "Psychosocial Harm", detail: "The exact moment where workplace friction turns into real damage." }
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-secondary mb-6">The Problem</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-8 leading-tight">
              Workplace friction is a system failure, not a personal failing.
            </h3>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              High-performers operating in confusing, political, or unhealthy corporate systems often feel "off" but aren't broken yet. This is the critical window for intervention.
            </p>
          </div>
          <div className="space-y-6">
            {symptoms.map((s, i) => (
              <div key={i} className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/10">
                <h4 className="text-lg font-bold text-on-surface mb-2">{s.title}</h4>
                <p className="text-on-surface-variant text-sm">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Protocol = () => {
  const features = [
    {
      title: "Operational Reset.",
      description: "Not a spa day or life coaching. A space where the body switches off, bottlenecks are cleared, and the head resets."
    },
    {
      title: "Rapid Intervention.",
      description: "A highly efficient 10-minute session designed to intercept the 2–3 PM wall when the brain stops working effectively."
    },
    {
      title: "Clear Output.",
      description: "Walk out within an hour feeling calm, functional, and knowing exactly what your next step is."
    }
  ];

  return (
    <section className="bg-surface-container-low py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-4">The Reset Pods™ Protocol</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              A premium, physical service providing rapid, in-person interventions for mid-day corporate burnout.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-8 bg-outline-variant/20 mb-3"></div>
          <div className="text-on-surface-variant font-mono text-xs tracking-widest uppercase">Brisbane 2024</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/15 overflow-hidden rounded-xl border border-outline-variant/15 shadow-sm">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest p-10 flex flex-col gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="data-pillar"></div>
                <h3 className="text-xl font-bold text-on-surface leading-tight" dangerouslySetInnerHTML={{ __html: f.title.replace(' ', '<br/>') }}></h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventDetails = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-surface" id="event">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-10">Event Details</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-1">Date</p>
                    <p className="text-xl font-bold text-on-surface">Monday 11 May</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-1">Time</p>
                    <p className="text-xl font-bold text-on-surface">12:00 - 18:00 (6 hours)</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-1">Location</p>
                    <p className="text-xl font-bold text-on-surface leading-tight">80 Ann Street<br />Fortitude Valley, QLD 4006</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-outline-variant/20">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant mb-6">Transportation Options</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: <Car size={20} />, label: "Driving" },
                  { icon: <Train size={20} />, label: "Public Transport" },
                  { icon: <Bike size={20} />, label: "Cycling" },
                  { icon: <Footprints size={20} />, label: "Walking" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center p-4 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors">
                    <div className="text-primary mb-2">{item.icon}</div>
                    <span className="text-[10px] font-bold uppercase text-center">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl transition-opacity group-hover:opacity-100 opacity-50"></div>
            <div className="relative overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl bg-surface-container-low aspect-square sm:aspect-video lg:aspect-square">
              <img 
                className="w-full h-full object-cover map-container" 
                src="https://picsum.photos/seed/brisbane80ann/1200/1200" 
                alt="Event Location Map"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-overlay rounded-lg border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <p className="text-xs font-bold text-on-surface uppercase tracking-widest">Live Event Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSignals = () => {
  const testimonials = [
    { name: "Senior Lead", company: "Tier-One Law Firm", text: "The 10-minute reset is the only intervention that actually clears the cognitive fog of a 12-hour day." },
    { name: "Project Director", company: "Infrastructure Major", text: "Reset Pods™ have become our go-to tool for protecting team capacity during high-stakes delivery phases." },
    { name: "Executive", company: "Financial Services", text: "It's clinical, efficient, and precise. No fluff, just functionality." }
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-black tracking-[0.2em] uppercase text-secondary mb-12 text-center">Operational Validation</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col gap-6 p-8 rounded-3xl bg-surface-container-low border border-outline-variant/5">
              <p className="text-lg font-light italic text-on-surface-variant leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-on-surface">{t.name}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderSnippet = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/3">
          <img 
            className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover" 
            src="https://picsum.photos/seed/tatiana-business/800/1200" 
            alt="Tatiana Lopukhova"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-secondary mb-6">Meet the Founder</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-on-surface mb-6">Tatiana Lopukhova</h3>
          <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed mb-8 font-light italic">
            "I help professionals navigate confusing, political, or unhealthy workplaces — understand what’s really happening and make clear, informed decisions about what to do next."
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            With 25 years in corporate operations and knowledge management, Tatiana treats workplace friction as a system failure. Reset Pods™ is the physical manifestation of her mission to protect professionals from psychosocial harm.
          </p>
          <a href="/philosophy" className="text-primary font-bold border-b border-primary pb-1 hover:opacity-80 transition-opacity">
            Read the Full Philosophy
          </a>
        </div>
      </div>
    </section>
  );
};

export default function LaunchEvent() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Problem />
      <Protocol />
      <TrustSignals />
      <FounderSnippet />
      <EventDetails />
    </motion.div>
  );
}
