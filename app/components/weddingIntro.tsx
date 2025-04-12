'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WeddingIntro() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-04-26T08:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('Hari ini!');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days} hari ${hours} jam ${minutes} menit`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-screen relative overflow-hidden">
      {/* Gambar Background (Full Screen, object-cover) */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/open.png"
          alt="Background"
          fill
          className="object-contain "
          priority
        />
        {/* Overlay gelap tipis */}
        <div className="absolute inset-0" />

        {/* Light effect di kanan */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/30 to-transparent blur-2xl" />
      </motion.div>

      {/* Konten Utama */}
      <div className="absolute inset-0 z-10 flex items-center justify-center mt-44">
        <div className="text-center text-white px-4 py-6 max-w-md w-72 backdrop-blur-sm rounded-xl bg-white/10 border border-white/10 shadow-1xl">
          <p className="text-lg text-gray-50 font-serif">The Wedding of</p>
          <h2 className="text-4xl font-great text-gray-50 font-bold mt-2">
            Laras & Indra
          </h2>
          <p className="text-lg text-gray-50 font-serif">
            Sabtu, 26 April 2026
          </p>
          <p className="font-bold font-serif text-xl mt-1 text-gray-50">
            {timeLeft}
          </p>
        </div>
      </div>
    </section>
  );
}
