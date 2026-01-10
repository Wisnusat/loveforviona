import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  name?: string;
}

const HeroSection = ({ name = "My Love" }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-sparkle delay-100">
        <Sparkles className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute top-40 right-20 animate-sparkle delay-300">
        <Sparkles className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-40 left-20 animate-sparkle delay-500">
        <Sparkles className="w-5 h-5 text-accent" />
      </div>
      <div className="absolute top-32 right-1/4 animate-sparkle delay-200">
        <Sparkles className="w-4 h-4 text-accent" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft" />
            <span className="text-lg tracking-widest uppercase text-muted-foreground font-medium">
              Happy Birthday
            </span>
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl text-script text-foreground mb-6 leading-tight">
            {name}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Today we celebrate the most beautiful soul in the world.
            Every moment with you is a gift I treasure forever.
          </p>

          <div className="flex items-center justify-center gap-2 text-primary">
            <Heart className="w-5 h-5 fill-primary animate-bounce-gentle" />
            <span className="text-lg font-medium">With all my love</span>
            <Heart className="w-5 h-5 fill-primary animate-bounce-gentle delay-200" />
          </div>
        </div>

        {/* Decorative heart cluster */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-4 opacity-20">
          <Heart className="w-20 h-20 text-primary fill-primary" />
          <Heart className="w-16 h-16 text-primary fill-primary -mt-4" />
          <Heart className="w-24 h-24 text-primary fill-primary" />
          <Heart className="w-16 h-16 text-primary fill-primary -mt-4" />
          <Heart className="w-20 h-20 text-primary fill-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
