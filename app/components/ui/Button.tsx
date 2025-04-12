'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  animate?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  animate = false, // default jadi false sekarang
  className,
  ...props
}) => {
  const baseStyle =
    'flex items-center gap-2 px-4 py-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none shadow-md';
  const variantStyle =
    variant === 'primary'
      ? 'bg-yellow-600 text-white hover:bg-yellow-700'
      : 'bg-white text-yellow-800 border border-yellow-600 hover:bg-yellow-100';
  const breathing = animate ? 'animate-pulse' : '';

  return (
    <button
      className={twMerge(
        `${baseStyle} ${variantStyle} ${breathing}`,
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
