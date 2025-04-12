'use client';

import { useEffect, useState, useRef, use } from 'react';
import RSVPForm from '@/app/components/RSVPForm';
import EventDetails from '@/app/components/EventDetails';
import WeddingIntro from '@/app/components/weddingIntro';
import VerseSection from '@/app/components/verseSection';
import WeddingInvitationSection from '@/app/components/address';
import ScrollSection from '@/app/components/ui/ScrollSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import OurStoryPage from '@/app/components/ourStory';
import GiftSection from '@/app/components/giftSection';
import HappyEndingSection from '@/app/components/ending';
import DoaPage from '@/app/components/doaPage';

export default function InvitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [name, setName] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const res = await fetch(`/api/guests/${slug}`);
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        setName(data.name);
      } catch {
        setNotFound(true);
      }
    };
    fetchGuest();
  }, [slug]);

  const handleOpen = async () => {
    try {
      await audioRef.current?.play();
    } catch (err) {
      console.warn('Audio autoplay blocked:', err);
    }
    setOpened(true);
  };

  if (notFound) return <div className="p-8">Undangan tidak ditemukan 😢</div>;

  return (
    <>
      <audio ref={audioRef} loop className="hidden">
        <source
          src="/music/Give Me a Future - Ryan Freeman.mp3"
          type="audio/mpeg"
        />
      </audio>

      {!opened ? (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        >
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/assets/open.png"
              alt="Laras & Indra"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-slate-950/20" />
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative z-10 text-white px-6 py-4 max-w-md backdrop-blur-sm rounded-2xl bg-white/10 border border-white/20 shadow-2xl mt-40"
          >
            {/* Teks Judul Undangan */}
            <div className="mb-6">
              <p className="text-base md:text-lg font-serif font-bold">
                Undangan
              </p>
              <h1 className="text-4xl md:text-5xl font-great leading-snug mt-1">
                Laras & Indra
              </h1>
              <p className="text-sm md:text-base mt-2 font-serif font-bold">
                Sabtu, 26 April 2025
              </p>
            </div>

            {/* Nama Tamu */}
            <p className="text-sm md:text-base font-mono font-light">
              Kepada Yth.
            </p>
            <p className="text-xl md:text-3xl font-serif font-extrabold mt-1 mb-6">
              {name || '...'}
            </p>

            {/* Tombol Buka */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.03, 1],
                transition: { duration: 2, repeat: Infinity },
              }}
              onClick={handleOpen}
              className="bg-gradient-to-r from-yellow-50 to-amber-900 hover:from-rose-500 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-xl font-bold tracking-wide transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10"> Buka Undangan</span>
              <span className="absolute inset-0 bg-white/10 blur-sm animate-pulse" />
            </motion.button>
          </motion.div>
        </motion.section>
      ) : (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center min-h-screen flex flex-col justify-center items-center"
        >
          <ScrollSection>
            <WeddingIntro />
          </ScrollSection>
          <ScrollSection delay={0.1}>
            <VerseSection />
          </ScrollSection>
          <ScrollSection delay={0.2}>
            <WeddingInvitationSection />
          </ScrollSection>
          <ScrollSection delay={0.3}>
            <EventDetails />
          </ScrollSection>
          <ScrollSection delay={0.4}>
            <OurStoryPage />
          </ScrollSection>
          <ScrollSection delay={0.5}>
            <GiftSection />
          </ScrollSection>
          <ScrollSection delay={0.6}>
            <RSVPForm />
          </ScrollSection>
          <ScrollSection delay={0.7}>
            <DoaPage />
          </ScrollSection>
          <ScrollSection delay={0.8}>
            <HappyEndingSection />
          </ScrollSection>
        </motion.main>
      )}
    </>
  );
}
