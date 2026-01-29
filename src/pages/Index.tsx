import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import ReasonsSection from "@/components/ReasonsSection";
import MemoriesSection from "@/components/MemoriesSection";
import FooterSection from "@/components/FooterSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <main className="relative z-10">
        <HeroSection name="Viona" />
        <LoveLetterSection />
        <MemoriesSection />
        <ReasonsSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
