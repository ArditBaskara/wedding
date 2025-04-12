'use client';

import { motion } from 'framer-motion';

export default function WeddingInvitationSection() {
  return (
    <section
      className="w-full h-screen relative bg-cover bg-center bg-no-repeat flex items-center justify-center px-10"
      style={{
        backgroundImage: "url('/assets/children.png')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1 }}
        className="p-4 md:p-6 text-center"
      >
        <h2 className="text-3xl font-extrabold font-great text-yellow-900 mt-20 leading-snug">
          Assalamu'alaikum Wr. Wb.
        </h2>
        <p className="text-xs md:text-sm text-yellow-900 mb-2 leading-tight">
          Kami mengundang Bapak/Ibu/Saudara/i
          <br />
          untuk menghadiri acara pernikahan:
        </p>

        <div className="mb-4 text-gray-800 text-sm md:text-base leading-snug">
          <h1 className="font-great text-2xl md:text-3xl mb-1">
            Anisa Larasati Supriyati
          </h1>
          <p className="italic text-gray-700">
            Anak Pertama dari
            <br />
            Bpk. Ir. Acep Suhendi &<br />
            (Almh) Ibu Teti Supriyati
          </p>

          <p className="my-2 font-great text-xl md:text-2xl text-yellow-900">
            &
          </p>

          <h1 className="font-great text-2xl md:text-3xl mb-1">
            Indra Kurniawan
          </h1>
          <p className="italic text-gray-700">
            Anak Kelima dari
            <br />
            Bpk. Bastian & Ibu Sri Mulyati
          </p>
        </div>

        <p className="text-xs md:text-sm text-gray-700 mb-2 leading-tight">
          Yang akan dilaksanakan pada:
        </p>

        {/* Tanggal */}
        <div className="flex items-center justify-center gap-3 text-gray-800 font-serif mb-4">
          <div className="text-sm md:text-base text-gray-600">APRIL</div>
          <div className="text-4xl font-bold leading-none">| 26 |</div>
          <div className="text-sm md:text-base text-gray-600">2025</div>
        </div>

        {/* Jadwal */}
        <div className="flex justify-around text-xs md:text-sm font-medium text-gray-700 gap-4 mb-4">
          <div className="leading-snug">
            <p className="font-bold text-yellow-900">Akad Nikah</p>
            <p className="font-serif font-normal">08.00 WIB</p>
          </div>
          <div className="leading-snug">
            <p className="font-bold text-yellow-900">Syukuran</p>
            <p className="font-serif font-normal">09.30 WIB</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
