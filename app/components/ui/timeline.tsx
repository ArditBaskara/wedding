'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.2', 'end end'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto py-16 sm:py-20 md:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-yellow-900 font-great mb-16 text-center">
          Our History
        </h2>

        <div ref={ref} className="relative space-y-14 pb-8">
          {data.map((item, index) => (
            <div key={index} className="relative pl-10 md:pl-12">
              {/* Card */}
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-lg ring-1 ring-white/30">
                <h3 className="text-xl md:text-2xl font-semibold text-yellow-800 dark:text-neutral-300 mb-2 drop-shadow">
                  {item.title}
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="text-xs text-justify sm:text-lg text-slate-950 drop-shadow-sm"
                >
                  {item.content}
                </motion.div>
              </div>
            </div>
          ))}

          {/* Vertical Scroll Line */}
          <div
            style={{ height: `${height}px` }}
            className="absolute left-[8px] md:left-[10px] top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-300 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-yellow-500 via-blue-500 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
