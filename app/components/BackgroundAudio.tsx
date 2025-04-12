'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPopup, setShowPopup] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error('Audio play error:', err);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop className="hidden">
        <source
          src="/music/Give Me a Future - Ryan Freeman.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center shadow-lg cursor-pointer relative"
          onClick={() => setShowTitle((prev) => !prev)}
        >
          <AnimatePresence>
            {showTitle && (
              <motion.div
                key="title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-12 bg-white px-3 py-1 text-sm rounded shadow text-pink-700 font-medium"
              >
                Wedding Theme - Instrumental
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="text-white text-xl font-bold"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❚❚' : '▶️'}
          </button>
        </motion.div>
      </div>
    </>
  );
}
