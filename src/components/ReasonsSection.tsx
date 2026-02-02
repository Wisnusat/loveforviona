import { Heart, Star } from "lucide-react";

const reasons = [
  "Your beautiful smile that brightens every room",
  "The way you laugh at my silly jokes",
  "Your kind and caring heart",
  "How you make every moment special",
  "Your strength and determination",
  "The way you look at me with love",
  "Your endless patience and understanding",
  "How you always know how to make me happy",
  "Your beautiful soul inside and out",
  "Simply because you're you",
];

const ReasonsSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* <Star className="w-8 h-8 text-accent mx-auto mb-4" /> */}
          <h2 className="text-5xl md:text-6xl text-script text-foreground mb-4">
            10 Reasons I Love You
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group gradient-card p-6 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-5 h-5 text-primary fill-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-sm text-accent font-semibold">#{index + 1}</span>
                  <p className="text-foreground/80 mt-1">{reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            ...and a million more reasons that words can't express
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-soft" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
