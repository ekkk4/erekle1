import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cycling.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Erekle Bagashvili cycling through open terrain"
          className="w-full h-full object-cover object-[50%_center] md:object-[center_60%]"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-left md:max-w-[50%] md:mr-auto md:ml-12 lg:ml-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-4"
        >
          EREKLE
          <br />
          <span className="text-gradient">BAGASHVILI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-10"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}
        >
          Ultracyclist • Adventurer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-start"
        >
          <a
            href="#achievements"
            className="px-5 py-3 bg-primary text-primary-foreground font-display text-base md:text-xl tracking-wider hover:opacity-90 transition-opacity"
          >
            ACHIEVEMENTS
          </a>
          <a
            href="#contact"
            className="px-5 py-3 border border-foreground/30 text-foreground font-display text-base md:text-xl tracking-wider hover:border-primary hover:text-primary transition-colors"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
