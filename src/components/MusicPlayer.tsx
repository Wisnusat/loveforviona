import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music, Gift } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Show dialog after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleStartMusic = async () => {
    setShowDialog(false);
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Failed to play audio:", error);
      }
    }
  };

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
      <audio ref={audioRef} src="/backsound.mp3" loop preload="auto" />
      
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-rose-600 text-2xl">
              <Gift className="w-6 h-6 animate-bounce" />
              Please enjoy this little gift from me ✨
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-700 text-base pt-2">
              <span className="text-sm text-gray-600 mt-2 block">
                Tap the button to start the journey
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={handleStartMusic}
              className="bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Music className="w-4 h-4 mr-2" />
              Start Journey
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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