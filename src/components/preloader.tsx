'use client';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="w-24 h-24">
        <svg viewBox="0 0 100 100" className="animate-pulse">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 30 70 L 30 30 L 50 30"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            className="animate-draw"
            style={{ strokeDasharray: 100, strokeDashoffset: 100, animation: 'draw 1.5s ease-in-out forwards' }}
          />
          <path
            d="M 55 70 L 75 70 L 75 30 L 55 30"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            className="animate-draw"
            style={{ strokeDasharray: 120, strokeDashoffset: 120, animation: 'draw 1.5s ease-in-out forwards 0.3s' }}
          />
        </svg>
      </div>
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
