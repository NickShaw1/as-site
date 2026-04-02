export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
      <div className="flex flex-col items-center gap-4">
        <svg width="18" height="44" viewBox="0 0 18 44" fill="none">
          <line x1="9" y1="0" x2="9" y2="44" stroke="#A6215F" strokeWidth="1.5" strokeOpacity="0.4"/>
          {[0,1,2,3,4].map(i => (
            <rect key={i} x={3} y={i * 8 + 2} width={12} height={4} rx={1.5}
              fill="#A6215F"
              style={{
                opacity: 0.2,
                animation: `pagePulse 1.2s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </svg>
        <style>{`@keyframes pagePulse { 0%,100%{opacity:0.2} 50%{opacity:0.8} }`}</style>
      </div>
    </div>
  )
}
