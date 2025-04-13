'use client';

import { Timeline } from './ui/timeline';

const timelineData = [
  {
    title: 'Awal Bertemu',
    content: (
      <p>
        Dipenghujung tahun 2017, kami bertemu tanpa disengaja hingga kami
        akhirnya memutuskan untuk berpacaran setelah masa pendekatan selama 1
        tahun lamanya.
      </p>
    ),
  },
  {
    title: 'Berpacaran',
    content: (
      <p>
        Setelah kurang lebih berpacaran selama 7 tahun, kami memutuskan untuk
        bertunangan sebagai tanda bahwa kami memiliki komitmen yang lebih
        serius.
      </p>
    ),
  },
  {
    title: 'Tunangan',
    content: (
      <p>
        Kami melaksanakan acara pertunangan sekaligus menunjukan keseriusan kami
        untuk melanjutkan hubungan ini ke jenjang pernikahan.
      </p>
    ),
  },
];

export default function OurStoryPage() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-contain bg-right-bottom z-0"
        style={{
          backgroundImage: "url('/assets/history.png')",
        }}
      />

      {/* Extended Gradient Overlay to push image down */}
      <div className="absolute inset-0 h-[100%] bg-gradient-to-b from-orange-50/80 via-white/60 to-transparent z-0" />

      {/* Timeline content */}
      <div className="relative z-10 pb-64">
        {' '}
        {/* Tambah padding bawah */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
