import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import IdeasSection from "@/components/IdeasSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PracticalInfoSection from "@/components/PracticalInfoSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import AiTransparencySection from "@/components/AiTransparencySection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <IdeasSection />
      <HowItWorksSection />
      <PracticalInfoSection />
      <DisclaimerSection />
      <AiTransparencySection />
      <CTASection />
    </main>
  );
}
