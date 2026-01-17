import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import AchievementsSection from "@/components/AchievementsSection";
import UpcomingSection from "@/components/UpcomingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BioSection />
      <AchievementsSection />
      <UpcomingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
