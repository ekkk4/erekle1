import { motion } from "framer-motion";
import { Target, Mountain, Globe } from "lucide-react";

const upcomingChallenges = [
  {
    title: "Azerbaijan Crossing",
    subtitle: "World Record Attempt",
    description: "Aiming to set a new world record crossing Azerbaijan, tackling the diverse terrain from the Caspian coast to the Greater Caucasus.",
    icon: Target,
    status: "2025",
  },
  {
    title: "Turkey Crossing",
    subtitle: "Ultra Challenge",
    description: "An ambitious east-to-west traverse of Turkey, one of the most demanding ultra-distance routes in the world.",
    icon: Mountain,
    status: "2025",
  },
  {
    title: "Transcontinental Race",
    subtitle: "TCR 2026",
    description: "The ultimate test of self-supported ultra-distance racing. From Belgium to Turkey, 4,000+ km of pure endurance.",
    icon: Globe,
    status: "2026",
  },
];

const UpcomingSection = () => {
  return (
    <section id="upcoming" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            UPCOMING <span className="text-gradient">CHALLENGES</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            The journey never ends. Here's what's on the horizon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {upcomingChallenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-glow bg-card p-6 rounded-lg border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/20 transition-colors">
                  <challenge.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-display text-2xl text-primary">
                  {challenge.status}
                </span>
              </div>
              <p className="text-primary/80 text-sm tracking-wider mb-2">
                {challenge.subtitle}
              </p>
              <h3 className="font-display text-2xl mb-3">{challenge.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
