import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import ReasonsSection from "@/components/ReasonsSection";
import MemoriesSection from "@/components/MemoriesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <main className="relative z-10">
        <HeroSection name="My Love" />
        <LoveLetterSection />
        <MemoriesSection />
        <ReasonsSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
