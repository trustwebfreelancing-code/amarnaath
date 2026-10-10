import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export const AmarnaathhLogo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showWordmark = true,
  className = '',
}) => {
  // Height sizing
  const dimensions = {
    sm: { icon: 28, textClass: 'text-base', subtextClass: 'text-[9px]' },
    md: { icon: 34, textClass: 'text-lg', subtextClass: 'text-[10px]' },
    lg: { icon: 42, textClass: 'text-xl', subtextClass: 'text-xs' },
  }[size];

  const brandGreen = '#00873E';
  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const subtextColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Amarnaathh Engineering AE Emblem */}
      <svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="Amarnaathh Engineering AE Mark"
      >
        <rect width="100" height="100" rx="4" fill={brandGreen} />
        {/* Stylized AE Monogram */}
        <path
          d="M18 82 L38 20 L56 82 H43 L38 64 H26 L23 82 H18 Z M29 52 H36 L32.5 37 Z"
          fill="white"
        />
        {/* Geometric E bar extensions */}
        <path
          d="M52 20 H86 V34 H66 V44 H82 V58 H66 V68 H86 V82 H52 V20 Z"
          fill="white"
        />
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-none justify-center">
          <span className={`font-bold tracking-tight ${textColor} ${dimensions.textClass}`}>
            Amarnaathh <span className="font-semibold text-[#00873E]">Engineering</span>
          </span>
          <span className={`font-medium tracking-wider uppercase mt-0.5 ${subtextColor} ${dimensions.subtextClass}`}>
            Precision Machinery
          </span>
        </div>
      )}
    </div>
  );
};
