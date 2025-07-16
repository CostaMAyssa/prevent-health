
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicePresentation } from "@/components/ServicePresentation";
import ClinicVideoSection from "@/components/ClinicVideoSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { DoctorProfile } from "@/components/DoctorProfile";
import { LocationMap } from "@/components/LocationMap";
import { Footer } from "@/components/Footer";
import { EmotionalFloatingBalloon } from "@/components/EmotionalFloatingBalloon";

const Index = () => {
  return (
    <div className="min-h-screen bg-cor-fundo">
      <Header />
      <HeroSection />
      <DoctorProfile />
      <ServicePresentation />
      <ClinicVideoSection />
      <BenefitsSection />
      <PillarsSection />
      <ProcessSteps />
      <LocationMap />
      <Footer />
      <WhatsAppFloat />
      <EmotionalFloatingBalloon />
    </div>
  );
};

export default Index;
