'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HappyEndingSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/ending.png')" }}
      />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-2 font-serif">
            Kami Yang Berbahagia
          </h2>
          <h1 className="text-3xl sm:text-5xl font-great text-yellow-900 mb-4">
            Laras & Indra
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            Atas kehadiran dan doa restunya kami ucapkan terima kasih.
            <br />
            Wassalamu'alaikum Wr. Wb.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <Image
            src="/assets/ending.png"
            alt="Laras dan Indra"
            width={300}
            height={400}
            className="rounded-lg object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
