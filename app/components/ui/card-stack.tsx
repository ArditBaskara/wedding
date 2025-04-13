'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  className,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  className?: string;
}) => {
  const CARD_OFFSET = offset || 8;
  const SCALE_FACTOR = scaleFactor || 0.05;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update cards when items change
    setCards(items);
  }, [items]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div
      className={`relative w-full mx-auto ${className || ''}`}
      style={{ minHeight: '150px' }}
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white w-full rounded-lg p-4 shadow-md border border-neutral-100 flex flex-col justify-between"
            style={{
              transformOrigin: 'center',
              minHeight: '120px',
              maxWidth: '280px',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="flex flex-col h-full">
              {/* Message content area */}
              <div className="flex-grow overflow-y-auto mb-2 pr-1 text-sm text-gray-700">
                {card.content}
              </div>

              {/* Footer with sender info */}
              <div className="text-right text-sm font-medium text-gray-600">
                {card.name}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
