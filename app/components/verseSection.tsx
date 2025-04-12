'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

export default function VerseSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Khusus Halaman Ini */}
      <div className="absolute inset-0">
        <Image
          src="/assets/children.png" // <- Ganti dengan background yang kamu mau
          alt="Background Verse Section"
          fill
          className="object-fill"
          priority
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0" />
      </div>
      ={/* Konten */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-great mb-6 text-yellow-900">
          Ar-Rum 21
        </h1>

        <p className="text-xl md:text-2xl leading-loose font-serif text-yellow-900 mb-6">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
          إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-justify md:text-s font-normal text-gray-700 leading-relaxed bg-white/80 backdrop-blur p-6 rounded-xl shadow-md max-w-2xl"
        >
          <Typewriter
            words={[
              '“Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan Pasangan-Pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Di Antaramu Rasa Kasih Dan Sayang. Sesungguhnya Pada Yang Demikian Itu Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir.”',
            ]}
            loop={1}
            typeSpeed={30}
            deleteSpeed={0}
            cursor={false}
          />
        </motion.p>
      </motion.div>
    </section>
  );
}
