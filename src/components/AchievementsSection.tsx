import { motion } from "framer-motion";
import { Trophy, MapPin, Clock } from "lucide-react";

const achievements = [
  {
    title: "Georgia Crossing",
    subtitle: "World Record",
    description: "Crossed the entire country of Georgia from east to west in record time, conquering the challenging Caucasus mountain passes.",
    icon: Trophy,
    highlight: true,
  },
  {
    title: "Pt to Georgia",
    subtitle: "Ultra Endurance",
    description: "An epic journey connecting Portugal to Georgia, covering thousands of kilometers through diverse European terrain.",
    icon: MapPin,
    highlight: false,
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
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
              className={`card-glow bg-card p-8 rounded-lg border ${
                achievement.highlight ? "border-primary/50" : "border-border"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    achievement.highlight ? "bg-primary/20" : "bg-muted"
                  }`}
                >
                  <achievement.icon
                    className={`w-6 h-6 ${
                      achievement.highlight ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-primary text-sm tracking-wider mb-1">
                    {achievement.subtitle}
                  </p>
                  <h3 className="font-display text-3xl mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
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
