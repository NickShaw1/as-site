import { usePageMeta } from '../hooks/usePageMeta'
import { HoverRouterLink } from '../components/HoverButton'

export default function NotFound() {
  usePageMeta(
    '404 — Page Not Found | AS Aware',
    'The page you were looking for could not be found.'
  )
  return (
    <div className="bg-white">

      <div className="relative overflow-hidden" style={{ background:'linear-gradient(135deg,#092126 0%,#A6215F 40%,#F24B4B 70%,#F2BC57 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
          <p className="text-white text-xs uppercase tracking-widest font-semibold mb-3">Error 404</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">Page not found.</h1>
          <p className="text-white mt-3 max-w-xl text-sm leading-relaxed">
            This page does not exist or may have moved.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div
          className="text-[9rem] font-black leading-none mb-6 select-none"
          style={{ background:'linear-gradient(135deg,#092126,#A6215F)', WebkitBackgroundClip:'text', backgroundClip:'text', WebkitTextFillColor:'transparent', color:'transparent' }}
          aria-hidden="true"
        >
          404
        </div>
        <p className="text-slate-500 text-sm max-w-sm mb-8 leading-relaxed">
          You might have followed a broken link. Head back home or use the navigation above.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <HoverRouterLink to="/" bg="#092126" hoverBg="#1a3d44"
            className="px-5 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-all text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]">
            Go home
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
            </svg>
          </HoverRouterLink>
          <HoverRouterLink to="/about" bg="#A6215F" hoverBg="#bf2870"
            className="px-5 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-all text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]">
            About AS
          </HoverRouterLink>
        </div>
      </div>

    </div>
  )
}
