import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 bg-card text-center">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl text-script text-foreground mb-4">
            Happy Birthday, My Love
          </h2>
          <p className="text-muted-foreground text-lg">
            Here's to another year of love, laughter, and making beautiful memories together
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-8">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="text-primary fill-primary animate-pulse-soft"
              style={{
                width: i === 2 ? 32 : i === 1 || i === 3 ? 24 : 18,
                height: i === 2 ? 32 : i === 1 || i === 3 ? 24 : 18,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary inline-block mx-1" />
            {" "}just for you
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Forever & Always
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
