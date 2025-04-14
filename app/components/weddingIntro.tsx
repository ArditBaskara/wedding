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

      setTimeLeft(`${days} hari ${hours} jam ${minutes} menit`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-w-fit h-screen overflow-hidden px-10">
      {/* Background Image */}
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
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-start mt-80 justify-center h-full px-7">
        <div className="text-center text-white px-6 py-5 w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[500px] xl:max-w-[500px] backdrop-blur-sm rounded-xl bg-white/10 border border-white/10 shadow-4xl">
          <p className="text-base sm:text-lg font-serif">The Wedding of</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-great font-bold mt-2">
            Laras
            <br />&<br />
            Indra
          </h2>
          <p className="text-base sm:text-lg font-serif">
            Sabtu, 26 April 2026
          </p>
          <p className="font-bold font-serif text-lg sm:text-xl mt-2">
            {timeLeft}
          </p>
        </div>
      </div>
    </section>
  );
}
