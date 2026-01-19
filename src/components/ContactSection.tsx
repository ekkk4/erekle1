import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
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
              <span className="text-gradient">PARTNERSHIPS</span> & CONTACT
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-foreground font-medium">
              Partnerships@teamerekle.com
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-glow bg-card p-8 md:p-12 rounded-lg border border-border text-center"
          >
            <h3 className="font-display text-3xl mb-6">GET IN TOUCH</h3>
            
            <a
              href="mailto:Partnerships@teamerekle.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-xl tracking-wider hover:opacity-90 transition-opacity mb-8"
            >
              <Mail className="w-5 h-5" />
              Send us an email
            </a>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/ekkk4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://strava.app.link/1YWwMEVk3Zb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="Strava"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                </svg>
              </a>
              <a
                href="https://www.komoot.com/user/4469421429290"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="Komoot"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.667a6.667 6.667 0 1 1 0-13.334 6.667 6.667 0 0 1 0 13.334zm0-10.667a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
