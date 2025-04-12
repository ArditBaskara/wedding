'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EventDetails() {
  return (
    <section
      className="w-full h-screen relative bg-cover bg-center bg-no-repeat flex items-center justify-center px-2"
      style={{
        backgroundImage: "url('/assets/children.png')", // Ganti sesuai path background-mu
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1 }}
        className="p-4 md:p-6 text-center max-w-xl mt-20"
      >
        <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
          Dengan segala kerendahan hati kami berharap kehadiran
          Bapak/Ibu/Saudara/i dalam acara pernikahan anak kami yang akan
          diselenggarakan pada:
        </p>

        <p className="font-medium text-yellow-900 text-sm md:text-base mb-1">
          Akad Nikah dan Syukuran
        </p>
        <p className="text-sm text-gray-800 mb-1">Sabtu, 26 April 2025</p>
        <p className="text-sm text-gray-800 mb-4">Pukul : 08:00 - 12:00 WIB</p>

        <p className="font-medium text-yellow-900 text-sm md:text-base mb-1">
          Lokasi
        </p>
        <p className="text-sm text-gray-800 mb-4 leading-snug">
          Bertempat di,
          <br />
          Didagoan Kopi
          <br />
          Jl. Bukit Pakar Utara No.27, Ciburial, Kec. Cimenyan,
          <br />
          Kabupaten Bandung, Jawa Barat 40135
        </p>

        <div className="flex justify-center mb-4">
          <Image
            src="/assets/frame.png" // Ganti path sesuai nama file barcode kamu
            alt="Barcode Lokasi"
            width={80}
            height={40}
            className="rounded-md shadow"
          />
        </div>

        <motion.a
          href="https://maps.app.goo.gl/g2wfdFfVE9LhyfFw8?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
          className="inline-block mt-2 px-5 py-2 bg-yellow-700 hover:bg-yellow-800 text-white text-sm rounded-full shadow-lg"
        >
          Lihat Lokasi
        </motion.a>
      </motion.div>
    </section>
  );
}
