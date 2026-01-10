import { Heart, Pen } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-20 px-4 gradient-romantic">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <Pen className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl text-script text-foreground mb-4">
            A Letter For You
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>

        <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
          {/* Decorative corner hearts */}
          <Heart className="absolute top-4 right-4 w-6 h-6 text-primary/20 fill-primary/20" />
          <Heart className="absolute bottom-4 left-4 w-6 h-6 text-primary/20 fill-primary/20" />

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
            <p className="text-2xl text-script text-foreground">My Dearest Love,</p>
            
            <p>
              On this special day, I want you to know just how much you mean to me. 
              From the moment you came into my life, everything became more beautiful, 
              more meaningful, and filled with so much joy.
            </p>
            
            <p>
              Your smile lights up my darkest days, your laughter is my favorite melody, 
              and your love is the greatest gift I've ever received. Every day with you 
              feels like a dream come true.
            </p>
            
            <p>
              I am so grateful for every moment we share, every adventure we take, 
              and every quiet evening spent together. You make ordinary moments extraordinary 
              just by being in them.
            </p>
            
            <p>
              Happy Birthday, my love. May this year bring you endless happiness, 
              beautiful surprises, and all the love your heart can hold. 
              I promise to be by your side, cherishing you today and always.
            </p>

            <div className="pt-6 text-right">
              <p className="text-2xl text-script text-foreground">Forever Yours,</p>
              <div className="flex items-center justify-end gap-2 mt-2">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <span className="text-primary font-medium">Your Love</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
