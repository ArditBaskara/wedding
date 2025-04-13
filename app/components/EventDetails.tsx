'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EventDetails() {
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
        className="text-center max-w-2xl w-full"
      >
        <p className="text-sm md:text-base text-gray-800 mb-6 leading-relaxed">
          Dengan segala kerendahan hati kami berharap kehadiran
          Bapak/Ibu/Saudara/i dalam acara pernikahan anak kami yang akan
          diselenggarakan pada:
        </p>

        {/* Tanggal */}
        <div className="flex items-center justify-center gap-3 text-gray-800 font-serif mb-4">
          <div className="text-sm md:text-base text-gray-600">APRIL</div>
          <div className="text-4xl font-bold leading-none">| 26 |</div>
          <div className="text-sm md:text-base text-gray-600">2025</div>
        </div>

        {/* Jadwal */}
        <div className="flex justify-center text-xs md:text-sm font-medium text-gray-700 gap-6 mb-8">
          <div className="leading-snug">
            <p className="font-bold text-yellow-900">Akad Nikah</p>
            <p className="font-serif font-normal">08.00 WIB</p>
          </div>
          <div className="leading-snug">
            <p className="font-bold text-yellow-900">Syukuran</p>
            <p className="font-serif font-normal">09.30 WIB</p>
          </div>
        </div>

        {/* Lokasi & Barcode sejajar semua device */}
        <div className="flex flex-row justify-center items-start gap-4 mb-6 w-full max-w-xs mx-auto">
          {/* Gambar Barcode */}
          <div className="flex-shrink-0 bg-white rounded-xl shadow-md p-2 border border-yellow-100 text-center w-[90px]">
            <Image
              src="/assets/frame.png"
              alt="Barcode Lokasi"
              width={70}
              height={70}
              className="rounded-md mx-auto"
            />
            <p className="text-[10px] text-gray-500 mt-1">Scan untuk lokasi</p>
          </div>

          {/* Teks Lokasi */}
          <div className="text-xs text-gray-800 leading-relaxed text-left">
            <p className="font-medium text-yellow-900 text-sm mb-1">Lokasi</p>
            <p>
              Bertempat di, <br />
              <span className="font-semibold text-yellow-900">
                Didagoan Kopi
              </span>
              <br />
              Jl. Bukit Pakar Utara No.27, Ciburial, Kec. Cimenyan,
              <br />
              Kabupaten Bandung, Jawa Barat 40135
            </p>
          </div>
        </div>

        {/* Tombol Lokasi */}
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
