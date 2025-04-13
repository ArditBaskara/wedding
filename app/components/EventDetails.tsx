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

        {/* <p className="font-medium text-yellow-900 text-sm md:text-base mb-1">
          Akad Nikah dan Syukuran
        </p>
        <p className="text-sm text-gray-800 mb-1">Sabtu, 26 April 2025</p>
        <p className="text-sm text-gray-800 mb-4">Pukul : 08:00 - 12:00 WIB</p> */}
        {/* 
        <p className="text-xs md:text-sm text-gray-700 mb-2 leading-tight">
          Yang akan dilaksanakan pada:
        </p> */}

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
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 mb-6">
          {/* Gambar Barcode */}
          <div className="bg-white rounded-xl shadow-md p-3 border border-yellow-100 text-center">
            <Image
              src="/assets/frame.png"
              alt="Barcode Lokasi"
              width={120}
              height={120}
              className="rounded-md mx-auto"
            />
            <p className="text-[10px] text-gray-500 mt-2">Scan untuk lokasi</p>
          </div>

          {/* Teks Lokasi */}
          <div className="text-sm text-gray-800 leading-relaxed md:text-left text-center">
            <p className="font-medium text-yellow-900 text-sm md:text-base mb-1">
              Lokasi
            </p>
            <p>
              Bertempat di,
              <br />
              <span className="font-semibold text-yellow-900 text-justify">
                Didagoan Kopi
              </span>
              <br />
              Jl. Bukit Pakar Utara No.27, Ciburial, Kec. Cimenyan,
              <br />
              Kabupaten Bandung, Jawa Barat 40135
            </p>
          </div>
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
