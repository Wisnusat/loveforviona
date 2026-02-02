import { Heart, Camera } from "lucide-react";

const memories = [
  {
    title: "Our First Meet",
    description: "The day my heart knew it found home",
    imageSrc: "/foto5.jpeg",
  },
  {
    title: "By Your Side",
    description: "Finding comfort, laughter, and love in every moment we share",
    imageSrc: "/foto2.jpeg",
  },
  // {
  //   title: "Quiet Moments",
  //   description: "When it's just us and the world fades away",
  //   imageSrc: "/foto3.jpeg",
  // },
  {
    title: "Forever & Always",
    description: "A love that grows stronger with every moment",
    imageSrc: "/foto4.jpeg",
  },
  {
    title: "Laughter & Joy",
    description: "You make every day brighter",
    imageSrc: "/foto1.jpeg",
  },
];

const MemoriesSection = () => {
  return (
    <section className="py-20 px-4 gradient-romantic">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* <Camera className="w-8 h-8 text-accent mx-auto mb-4" /> */}
          <h2 className="text-5xl md:text-6xl text-script text-foreground mb-4">
            Our Precious Memories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every moment with you becomes a cherished memory I hold close to my heart
          </p>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl aspect-[4/3] bg-secondary shadow-card hover:shadow-glow transition-all duration-500`}
            >
              <img
                src={memory.imageSrc}
                alt={memory.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              {/* Placeholder gradient background */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${135 + index * 30}deg, hsl(350 70% ${85 - index * 5}% / 0.35), hsl(${350 + index * 10} 60% ${90 - index * 3}% / 0.35))`,
                }}
              />
              
              {/* Heart pattern overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Heart className="w-32 h-32 text-primary fill-primary" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl text-script text-white mb-1">
                  {memory.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {memory.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* <p className="text-center text-muted-foreground mt-8 italic">
          Add your own photos to make it even more special ✨
        </p> */}
      </div>
    </section>
  );
};

export default MemoriesSection;
