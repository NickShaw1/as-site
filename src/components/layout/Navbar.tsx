import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About AS' },
  { to: '/living-with-as', label: 'Living with AS' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

const VERTEBRAE = [3, -3, 4, -4, 2, -2, 1]
const VERT_COLORS = ['#F24B4B', '#A6215F', '#F2BC57', '#092126', '#F28B50', '#A6215F', '#F2BC57']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <style>{`
        .spine-vertebra { transition: transform 0.45s cubic-bezier(0.34,1.4,0.64,1); }
        .skip-link {
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
        .skip-link:focus {
          position: fixed;
          top: 0;
          left: 0;
          width: auto;
          height: auto;
          padding: 10px 20px;
          background: #fff;
          color: #000;
          font-size: 14px;
          font-weight: 700;
          z-index: 9999;
          outline: 2px solid #000;
          outline-offset: 0;
        }
      `}</style>

      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">

          <NavLink to="/" className="flex items-center gap-2.5"
            aria-label="AS Aware — home"
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <svg width="18" height="44" viewBox="0 0 18 44" fill="none" aria-hidden="true">
              <line x1="9" y1="0" x2="9" y2="44" stroke="#A6215F" strokeWidth="1.5" strokeOpacity="0.4"/>
              {VERTEBRAE.map((offset, i) => (
                <rect key={i} className="spine-vertebra"
                  x={3} y={i * 6 + 1} width={12} height={4} rx={1.5}
                  fill={VERT_COLORS[i]}
                  style={{ transform: `translateX(${hovered ? 0 : offset}px)` }}
                />
              ))}
            </svg>
            <div className="flex flex-col leading-none" aria-hidden="true">
              <span className="text-2xl font-black tracking-tight leading-none"
                style={{ color:'#A6215F', WebkitFontSmoothing:'antialiased', MozOsxFontSmoothing:'grayscale' } as React.CSSProperties}>
                AS
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase mt-1"
                style={{ color:'#092126', WebkitFontSmoothing:'antialiased', MozOsxFontSmoothing:'grayscale' } as React.CSSProperties}>
                aware
              </span>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'}
                className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150"
                style={({ isActive }) => ({ color: isActive ? '#092126' : '#64748B', background: isActive ? 'rgba(9,33,38,0.07)' : 'transparent' })}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='rgba(9,33,38,0.05)'; el.style.color='#092126' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; if (!el.getAttribute('aria-current')) { el.style.background='transparent'; el.style.color='#64748B' } }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && <span className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full" style={{ background:'#F24B4B' }} aria-hidden="true"/>}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button className="md:hidden p-2 rounded-lg text-slate-600 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-opacity duration-300"
        style={{ background: 'rgba(9,33,38,0.4)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className="md:hidden fixed top-0 right-0 h-full z-50 bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col"
        style={{ width: '55vw', transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between px-8 h-20 border-b border-slate-100 flex-shrink-0">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#A6215F' }}>Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer"
              style={({ isActive }) => ({ color: isActive ? '#092126' : '#64748B', background: isActive ? 'rgba(9,33,38,0.07)' : 'transparent' })}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; if (!el.getAttribute('aria-current')) el.style.background = 'rgba(9,33,38,0.04)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; if (!el.getAttribute('aria-current')) el.style.background = 'transparent' }}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
      </header>
    </>
  )
}
