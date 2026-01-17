import { motion } from "framer-motion";

const BioSection = () => {
  return (
    <section id="bio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-5xl md:text-6xl mb-4">
              THE <span className="text-gradient">JOURNEY</span>
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-secondary-foreground leading-relaxed"
          >
            <p>
              Born in the heart of the Caucasus, I discovered ultracycling not as a sport, 
              but as a way of life. What started as solo rides through the winding mountain 
              roads of Georgia transformed into a relentless pursuit of pushing beyond 
              perceived limits.
            </p>
            <p>
              Ultracycling is more than endurance—it's a meditation on persistence, 
              a dialogue between mind and body that unfolds over hundreds of kilometers 
              and sleepless nights. Every ride is a journey into the unknown, where the 
              only certainty is the next pedal stroke.
            </p>
            <p>
              My mission is simple: to prove that with unwavering determination, 
              the impossible becomes merely unexplored territory. From setting national 
              records to conquering transcontinental routes, each achievement is a 
              stepping stone toward the next horizon.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            {[
              { value: "50,000+", label: "KM RIDDEN" },
              { value: "3", label: "RECORDS" },
              { value: "12+", label: "COUNTRIES" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
