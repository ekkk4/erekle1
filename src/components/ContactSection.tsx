import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";

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
            <p className="text-lg text-secondary-foreground leading-relaxed max-w-2xl mx-auto">
              I'm always open to collaborating with brands and organizations that share 
              my passion for adventure, endurance, and pushing boundaries. Whether you're 
              interested in sponsorship, partnerships, or media inquiries—let's connect.
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
              href="mailto:contact@ereklebagashvili.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-xl tracking-wider hover:opacity-90 transition-opacity mb-8"
            >
              <Mail className="w-5 h-5" />
              SEND EMAIL
            </a>

            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Partnership Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground text-sm tracking-wider mb-4">
              OPEN TO PARTNERSHIPS IN
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Cycling Equipment", "Nutrition", "Apparel", "Tech & Gadgets", "Travel", "Media"].map(
                (category, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {category}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
