import React, { useEffect, useState } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;
  const [uniqueId, setUniqueId] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const id = `shiny-text-${Math.random().toString(36).substr(2, 9)}`;
    setUniqueId(id);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!uniqueId || !isMounted) return;

const keyframes = `
  @keyframes shineAnimation-${uniqueId} {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;


    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, [uniqueId, isMounted]);

  return (
    <span
      className={`relative inline-block font-semibold text-neutral-400 ${className}`}
      style={{ color: disabled ? '#b5b5b5a4' : undefined }}
    >
      {text}
      {!disabled && (
        <span
  className="absolute inset-0"
  style={{
    backgroundImage:
      'linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)',
    backgroundSize: '200% 100%',
    backgroundPosition: '0% 0%',
    animation: `shineAnimation-${uniqueId} ${animationDuration} linear infinite`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    pointerEvents: 'none',
    zIndex: 1,
  }}
>
  {text}
</span>

      )}
    </span>
  );
};

export default ShinyText;
