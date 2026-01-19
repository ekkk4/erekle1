import { motion } from "framer-motion";
import { Trophy, MapPin } from "lucide-react";
import { ExternalLink } from "lucide-react";
import achievementsBg from "@/assets/achievements-bg.jpg";
import georgiaFlag from "@/assets/georgia-flag.png";

const achievements = [
  {
    title: "Georgia Crossing",
    subtitle: "World Record",
    description: "Crossed the entire country of Georgia east to west — from Mijniskure in Vashlovani National Reserve to Ureki on the Black Sea coast — covering 525 km in 29 hours, in record time.",
    icon: Trophy,
    highlight: true,
    flagBg: georgiaFlag,
    link: "https://grf.ge/en/record/1709251-fastest-crossing-of-georgia-by-bicycle-ew-male-solo/",
  },
  {
    title: "Portugal to Georgia",
    subtitle: "Epic Journey",
    description: "Rode from Portugal to Georgia on an epic, self-powered journey — a long-haul ride across 10 countries and 5100 km, built on curiosity, grit, and the love of the open road.",
    icon: MapPin,
    highlight: false,
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={achievementsBg}
          alt="Achievements background"
          className="w-full h-full object-cover"
          style={{ objectPosition: "60% center" }}
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            <span className="text-gradient">ACHIEVEMENTS</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`card-glow bg-card/60 backdrop-blur-sm p-8 rounded-lg border ${
                achievement.highlight ? "border-primary/50" : "border-border"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg relative overflow-hidden ${
                    achievement.highlight ? "bg-primary/20" : "bg-muted"
                  }`}
                >
                  {achievement.flagBg && (
                    <img
                      src={achievement.flagBg}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                  )}
                  <achievement.icon
                    className={`w-6 h-6 relative z-10 ${
                      achievement.highlight ? "text-white" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-primary text-sm tracking-wider mb-1">
                    {achievement.subtitle}
                  </p>
                  <h3 className="font-display text-3xl mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    >
                      View Official Record <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
