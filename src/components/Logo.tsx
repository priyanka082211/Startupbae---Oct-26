import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
  onClick?: () => void;
  showMonogram?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  isLight = false,
  onClick,
  showMonogram = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 text-left transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C83B7A] ${className}`}
      aria-label="StartupBae Home"
    >
      {showMonogram && (
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg shadow-xs transition-transform ${
            isLight
              ? 'bg-[#FFF8F0] text-[#3B2347]'
              : 'bg-[#3B2347] text-[#FFF8F0]'
          }`}
          aria-hidden="true"
        >
          {/* Abstract SB Monogram */}
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 6C7 4.89543 7.89543 4 9 4H13C14.6569 4 16 5.34315 16 7C16 8.35824 15.0976 9.50567 13.8447 9.87358C15.6888 10.3544 17 12.0252 17 14C17 16.2091 15.2091 18 13 18H8C7.44772 18 7 17.5523 7 17V6Z"
              fill={isLight ? '#3B2347' : '#FBE7E2'}
              fillOpacity="0.4"
            />
            <path
              d="M7 8.5C7 7.11929 8.11929 6 9.5 6H12C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10H8"
              stroke="#C83B7A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 10H13.5C14.8807 10 16 11.1193 16 12.5C16 13.8807 14.8807 15 13.5 15H8"
              stroke={isLight ? '#3B2347' : '#FFF8F0'}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      <span className="font-sans text-2xl font-bold tracking-tight lowercase select-none">
        <span className={isLight ? 'text-[#FFF8F0]' : 'text-[#3B2347]'}>
          startup
        </span>
        <span className="text-[#C83B7A]">bae</span>
      </span>
    </button>
  );
};
