
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicePresentation } from "@/components/ServicePresentation";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { DoctorProfile } from "@/components/DoctorProfile";
import { LocationMap } from "@/components/LocationMap";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cor-fundo">
      <Header />
      <HeroSection />
      <DoctorProfile />
      <ServicePresentation />
      <BenefitsSection />
      <PillarsSection />
      <ProcessSteps />
      <LocationMap />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
