'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

export default function VerseSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/children.png"
          alt="Background Verse Section"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Konten */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col gap-6 w-full max-w-4xl"
      >
        {/* Card: Surat & Ayat Arab */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md text-center"
        >
          <h1 className="text-3xl md:text-4xl font-great font-extrabold text-yellow-900 mb-4">
            Ar-Rum 21
          </h1>
          <p className="text-xl md:text-2xl font-serif text-gray-900 leading-loose">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>
        </motion.div>

        {/* Card: Artinya */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-md text-justify"
        >
          <Typewriter
            words={[
              '“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”',
            ]}
            loop={1}
            typeSpeed={30}
            deleteSpeed={0}
            cursor={false}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
