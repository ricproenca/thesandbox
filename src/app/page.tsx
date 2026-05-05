import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import PracticalInfoSection from "@/components/PracticalInfoSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <HowItWorksSection />
      <ShowcaseSection />
      <PracticalInfoSection />
      <DisclaimerSection />
      <CTASection />
    </main>
  );
}
