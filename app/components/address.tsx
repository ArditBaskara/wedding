'use client';

import { motion } from 'framer-motion';

export default function WeddingInvitationSection() {
  return (
    <section
      className="w-full min-h-screen relative bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: "url('/assets/children.png')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center  p-6  max-w-xl w-full"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold font-great text-yellow-900 mb-4 leading-snug">
          Assalamu'alaikum Wr. Wb.
        </h2>
        <p className="text-sm md:text-base text-yellow-900 mb-4 leading-relaxed">
          Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan:
        </p>

        <div className="text-gray-800 text-sm md:text-base leading-relaxed">
          <h1 className="font-great text-2xl md:text-3xl mb-2">
            Anisa Larasati Supriyati
          </h1>
          <p className="italic text-gray-700 mb-4">
            Anak Pertama dari
            <br />
            Bpk. Ir. Acep Suhendi &<br />
            (Almh) Ibu Teti Supriyati
          </p>

          <p className="my-2 font-great text-xl md:text-2xl text-yellow-900">
            &
          </p>

          <h1 className="font-great text-2xl md:text-3xl mb-2">
            Indra Kurniawan
          </h1>
          <p className="italic text-gray-700">
            Anak Kelima dari
            <br />
            Bpk. Bastian & Ibu Sri Mulyati
          </p>
        </div>
      </motion.div>
    </section>
  );
}
