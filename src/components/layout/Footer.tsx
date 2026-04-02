import React, { useState } from 'react'

const VERTEBRAE = [3, -3, 4, -4, 2, -2, 1]
const VERT_COLORS = ['#F24B4B', '#A6215F', '#F2BC57', '#ffffff', '#F28B50', '#A6215F', '#F2BC57']

export default function Footer() {
  const [hovered, setHovered] = useState(false)

  return (
    <footer style={{ background:'#092126' }} aria-label="Site footer">
      <style>{`.footer-vert { transition: transform 0.45s cubic-bezier(0.34,1.4,0.64,1); }`}</style>
      <div className="h-1 w-full" style={{ background:'linear-gradient(90deg,#092126,#A6215F,#F24B4B,#F2BC57)' }}/>

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 w-fit cursor-pointer"
              role="img" aria-label="AS Aware"
              onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <svg width="18" height="44" viewBox="0 0 18 44" fill="none" aria-hidden="true">
                <line x1="9" y1="0" x2="9" y2="44" stroke="#F24B4B" strokeWidth="1.5" strokeOpacity="0.5"/>
                {VERTEBRAE.map((offset, i) => (
                  <rect key={i} className="footer-vert"
                    x={3} y={i * 6 + 1} width={12} height={4} rx={1.5}
                    fill={VERT_COLORS[i]}
                    style={{ transform: `translateX(${hovered ? 0 : offset}px)` }}
                  />
                ))}
              </svg>
              <div className="flex flex-col leading-none" aria-hidden="true">
                <span className="text-2xl font-black tracking-tight leading-none"
                  style={{ color:'#F24B4B', WebkitFontSmoothing:'antialiased', MozOsxFontSmoothing:'grayscale' } as React.CSSProperties}>
                  AS
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase mt-1"
                  style={{ color:'#F2BC57', WebkitFontSmoothing:'antialiased', MozOsxFontSmoothing:'grayscale' } as React.CSSProperties}>
                  aware
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed md:max-w-[220px] text-white">
              Information and support for people living with Ankylosing Spondylitis.
            </p>
          </div>

          {/* Pages */}
          <nav aria-label="Footer navigation">
            <h2 className="font-bold mb-4 text-xs uppercase tracking-widest" style={{ color:'#F2BC57' }}>Pages</h2>
            <ul className="text-sm space-y-2">
              {[['Home','/'],['About AS','/about'],['Living with AS','/living-with-as'],['Resources','/resources'],['Contact','/contact']].map(([label,href]) => (
                <li key={href}>
                  <a href={href} className="text-white transition-colors hover:text-white/70">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Disclaimer */}
          <div className="md:max-w-[240px]">
            <h2 className="font-bold mb-4 text-xs uppercase tracking-widest" style={{ color:'#F2BC57' }}>A note</h2>
            <p className="text-sm leading-relaxed text-white">
              This site is here to inform and support, not to replace the advice of a medical professional.
              Speak with your rheumatologist or GP about your own care.
            </p>
          </div>

        </div>

        <div className="border-t pt-6 text-center text-xs" style={{ borderColor:'rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.6)' }}>
          &copy; {new Date().getFullYear()} AS Aware. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
