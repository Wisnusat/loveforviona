import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a royalty-free romantic piano piece from a public source
  const audioSrc = "/backsound.mp3";

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Autoplay blocked, user needs to click
          });
        }
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    return () => document.removeEventListener("click", handleFirstInteraction);
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        <Music className="w-4 h-4 animate-pulse" />
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
        <span className="text-sm font-medium">
          {isPlaying ? "Playing" : "Play Music"}
        </span>
      </button>
    </>
  );
};

export default MusicPlayer;
