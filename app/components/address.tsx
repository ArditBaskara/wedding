'use client';

import { motion } from 'framer-motion';

export default function WeddingInvitationSection() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-8 py-16"
      style={{
        backgroundImage: "url('/assets/children.png')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/90 items-center justify-center backdrop-blur-md shadow-xl rounded-2xl max-w-md sm:max-w-lg md:max-w-xl w-full px-6 md:px-12 py-10 md:py-14 text-center space-y-5"
      >
        <h2 className="text-3xl md:text-3xl font-great font-bold text-yellow-900">
          AssalamualaikumWr.Wb
        </h2>

        <p className="text-base md:text-lg text-gray-800 font-serif leading-relaxed">
          Dengan penuh rasa syukur dan memohon rahmat serta ridha Allah Swt.,
          kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
          pernikahan:
        </p>

        {/* Mempelai Wanita */}
        <div className="space-y-2">
          <h1 className="font-great text-3xl md:text-4xl text-yellow-900">
            Anisa Larasati Supriyati
          </h1>
          <p className="italic text-gray-700 text-sm md:text-base">
            Putri pertama dari <br />
            Bapak Ir. Acep Suhendi & <br />
            (Almarhumah) Ibu Teti Supriyati
          </p>
        </div>

        <p className="text-3xl md:text-4xl text-yellow-900 font-great">&</p>

        {/* Mempelai Pria */}
        <div className="space-y-1">
          <h1 className="font-great text-3xl md:text-4xl text-yellow-900">
            Indra Kurniawan
          </h1>
          <p className="italic text-gray-700 text-sm md:text-base">
            Putra kelima dari <br />
            Bapak Bastian & <br />
            Ibu Sri Mulyati
          </p>
        </div>
      </motion.div>
    </section>
  );
}
