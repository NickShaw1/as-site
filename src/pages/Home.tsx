import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { HoverRouterLink } from '../components/HoverButton'

const STATS = [
  { stat:'200k+',     label:'diagnosed in the UK alone',         note:'You are far from alone in this.',                   color:'#A6215F' },
  { stat:'Treatable', label:'with modern biologics and NSAIDs',  note:'Effective options exist and keep improving.',        color:'#092126' },
  { stat:'Liveable',  label:'with the right support and habits', note:'Most people maintain active, full lives.',           color:'#A6215F' },
  { stat:'1 in 200',  label:'people affected',                   note:'Affecting around 1 in 200 of the population.',      color:'#092126' },
  { stat:'7–10 yrs',  label:'avg. diagnosis delay',              note:'Years lost to pain before getting answers.',        color:'#A6215F' },
  { stat:'90%',       label:'carry HLA-B27',                     note:'A strong genetic link, but not the whole picture.', color:'#092126' },
]

const SIJointIllustration = memo(function SIJointIllustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width:'100%', height:'100%' }} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="boneSheen" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="white" stopOpacity="0.04"/>
        </radialGradient>
        <marker id="arrowTip" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M 0 0 L 7 3.5 L 0 7 Z" fill="rgba(255,255,255,0.9)"/>
        </marker>
      </defs>

      {/* ── SACRUM ── */}
      <path d="M 168,82 L 232,82 C 246,94 250,112 246,134 C 242,152 238,162 234,172 C 230,196 226,224 220,252 C 216,270 208,286 200,296 C 192,286 184,270 180,252 C 174,224 170,196 166,172 C 162,162 158,152 154,134 C 150,112 154,94 168,82 Z"
        fill="url(#boneSheen)" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5"/>
      <line x1="200" y1="94" x2="200" y2="266" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" strokeDasharray="3 4"/>
      {[112,136,160,184].map((y,i) => (
        <g key={i}>
          <ellipse cx={186} cy={y} rx={4.5} ry={3} fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9"/>
          <ellipse cx={214} cy={y} rx={4.5} ry={3} fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9"/>
        </g>
      ))}
      <path d="M 192,296 C 190,308 192,322 200,328 C 208,322 210,308 208,296 Z"
        fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>

      {/* ── LEFT ILIUM + ISCHIUM + PUBIS ── */}
      <path d="
        M 168,82
        C 148,76 116,62 76,44 C 46,30 18,28 6,56
        C -2,76 2,106 16,134 C 26,154 38,170 44,190
        C 48,204 48,218 46,232 C 44,246 40,258 40,268
        C 46,284 58,294 70,306 C 80,316 88,332 90,350
        C 96,366 102,378 114,386
        C 132,394 152,396 170,394 C 180,392 188,388 194,382
        L 192,364
        C 184,368 174,370 164,368 C 154,364 148,352 146,338
        C 144,322 148,306 154,292 C 160,278 164,266 165,252
        C 166,236 165,220 164,206 C 163,190 163,174 164,158
        C 165,138 166,112 168,82 Z
      " fill="url(#boneSheen)" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5"/>
      <ellipse cx={100} cy={306} rx={25} ry={23} fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/>
      <ellipse cx={100} cy={306} rx={13} ry={12} fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"/>
      <ellipse cx={142} cy={354} rx={20} ry={15} fill="rgba(0,0,0,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>

      {/* ── RIGHT ILIUM + ISCHIUM + PUBIS ── */}
      <path d="
        M 232,82
        C 252,76 284,62 324,44 C 354,30 382,28 394,56
        C 402,76 398,106 384,134 C 374,154 362,170 356,190
        C 352,204 352,218 354,232 C 356,246 360,258 360,268
        C 354,284 342,294 330,306 C 320,316 312,332 310,350
        C 304,366 298,378 286,386
        C 268,394 248,396 230,394 C 220,392 212,388 206,382
        L 208,364
        C 216,368 226,370 236,368 C 246,364 252,352 254,338
        C 256,322 252,306 246,292 C 240,278 236,266 235,252
        C 234,236 235,220 236,206 C 237,190 237,174 236,158
        C 235,138 234,112 232,82 Z
      " fill="url(#boneSheen)" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5"/>
      <ellipse cx={300} cy={306} rx={25} ry={23} fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/>
      <ellipse cx={300} cy={306} rx={13} ry={12} fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"/>
      <ellipse cx={258} cy={354} rx={20} ry={15} fill="rgba(0,0,0,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>

      {/* ── PUBIC SYMPHYSIS ── */}
      <rect x={188} y={376} width={24} height={14} rx={4}
        fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
      <line x1="200" y1="376" x2="200" y2="390" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8"/>

      {/* ── SI JOINT GLOW ── */}
      <ellipse cx={168} cy={170} rx={12} ry={82} fill="#F24B4B" fillOpacity={0.55}
        style={{ filter:'blur(10px)', animation:'siPulse 2.5s ease-in-out infinite', willChange:'opacity' }}/>
      <ellipse cx={168} cy={170} rx={5} ry={44} fill="#F2BC57" fillOpacity={0.9}
        style={{ filter:'blur(3px)', animation:'siPulse 2.5s ease-in-out infinite', willChange:'opacity' }}/>
      <ellipse cx={232} cy={170} rx={12} ry={82} fill="#F24B4B" fillOpacity={0.55}
        style={{ filter:'blur(10px)', animation:'siPulse 2.5s ease-in-out infinite 0.4s', willChange:'opacity' }}/>
      <ellipse cx={232} cy={170} rx={5} ry={44} fill="#F2BC57" fillOpacity={0.9}
        style={{ filter:'blur(3px)', animation:'siPulse 2.5s ease-in-out infinite 0.4s', willChange:'opacity' }}/>

      {/* ── RADIATING PAIN LINES ── */}
      {[108,132,158,182,208,234,258].map((deg,i) => {
        const rad=(deg*Math.PI)/180, len=28+(i%3)*14
        return <line key={`l${i}`} x1={168} y1={170} x2={168+Math.cos(rad)*len} y2={170+Math.sin(rad)*len}
          stroke="rgba(255,255,255,0.6)" strokeWidth="0.8"
          style={{ animation:`rayFade 2.5s ease-in-out infinite ${(i*0.13).toFixed(2)}s`, willChange:'opacity' }}/>
      })}
      {[282,308,332,358,22,48,72].map((deg,i) => {
        const rad=(deg*Math.PI)/180, len=28+(i%3)*14
        return <line key={`r${i}`} x1={232} y1={170} x2={232+Math.cos(rad)*len} y2={170+Math.sin(rad)*len}
          stroke="rgba(255,255,255,0.6)" strokeWidth="0.8"
          style={{ animation:`rayFade 2.5s ease-in-out infinite ${(0.2+i*0.13).toFixed(2)}s`, willChange:'opacity' }}/>
      })}

      {/* ── ANNOTATION ── */}
      <line x1="310" y1="62" x2="244" y2="116" stroke="white" strokeWidth="1.5" markerEnd="url(#arrowTip)"/>
      <rect x="248" y="14" width="148" height="50" rx="8" fill="white"/>
      <text x="322" y="34" fill="#092126" fontSize="13" fontWeight="700" textAnchor="middle" style={{ letterSpacing:'0.04em' }}>SACROILIAC JOINT</text>
      <text x="322" y="52" fill="#F24B4B" fontSize="13" fontWeight="700" textAnchor="middle" style={{ letterSpacing:'0.04em' }}>INFLAMMATION</text>
    </svg>
  )
})


export default function Home() {
  usePageMeta(
    'AS Aware | Reliable Guidance for People Living with Ankylosing Spondylitis (Axial SpA)',
    'Clear, reliable information for people living with or newly diagnosed with Ankylosing Spondylitis (Axial SpA). Symptoms, diagnosis, treatment and daily life guidance.'
  )
  const refReality   = useReveal()
  const refGuideHead = useReveal()
  const refWhatIsAS  = useReveal(80)
  const refSymDiag   = useReveal(120)
  const refRow3      = useReveal(120)
  const refResources = useReveal(100)

  return (
    <div className="bg-white">

      {/* Hero */}
      <section aria-label="Introduction" className="relative overflow-hidden" style={{ background:'linear-gradient(135deg,#092126 0%,#A6215F 40%,#F24B4B 70%,#F2BC57 100%)' }}>
        <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div style={{ width:'320px', height:'320px', transform:'translateX(19rem) translateY(-0.5rem)' }}>
            <SIJointIllustration/>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="py-16 lg:py-20 max-w-lg">
            <h1 className="text-white leading-none tracking-tight mb-4 whitespace-nowrap"
              style={{ fontSize:'clamp(3.5rem,7vw,6.5rem)', fontWeight:700, WebkitFontSmoothing:'antialiased', MozOsxFontSmoothing:'grayscale' } as React.CSSProperties}>
              <span style={{ color:'transparent', WebkitTextStroke:'2.5px rgba(255,255,255,0.9)' }}>AS</span>{' '}Aware.
            </h1>
            <p className="text-white mb-4" style={{ fontSize:'clamp(1.1rem,2.2vw,1.65rem)', fontWeight:700, WebkitFontSmoothing:'antialiased', MozOsxFontSmoothing:'grayscale' } as React.CSSProperties}>
              Understanding AS starts here.
            </p>
            <p className="text-white text-sm leading-relaxed mb-8 max-w-sm">
              Clear, reliable guidance for people living with or newly diagnosed with Ankylosing Spondylitis (Axial Spondyloarthritis). With early diagnosis and the right care, most people continue to lead full, active lives.
            </p>
            <div className="flex flex-wrap gap-2">
              <HoverRouterLink to="/about" bg="#092126" hoverBg="#1a3d44"
                className="px-4 py-2 rounded-lg text-sm font-bold transition-all"
                style={{ color:'#fff' }}>
                What is AS?
              </HoverRouterLink>
              <HoverRouterLink to="/about#symptoms-checker" bg="rgba(242,75,75,0.18)" hoverBg="rgba(242,75,75,0.30)"
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ color:'#fff', border:'1px solid rgba(242,75,75,0.5)' }}>
                Symptom checker
              </HoverRouterLink>
            </div>
          </div>
        </div>
      </section>

      {/* Reality strip */}
      <section aria-label="Key statistics" className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={refReality}>
            <div className="flex items-center gap-4 mb-8" aria-hidden="true">
              <div className="flex-1 h-px bg-slate-200"/>
              <span className="text-xs font-black tracking-widest uppercase whitespace-nowrap" style={{ color:'#A6215F' }}>
                Here&#8217;s the reality
              </span>
              <div className="flex-1 h-px bg-slate-200"/>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STATS.map(({stat,label,note,color}) => (
                <div key={stat} className="text-center">
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-4xl font-black mb-1" style={{ color }}>{stat}</dd>
                  <dd className="font-semibold text-sm mb-1 text-slate-700" aria-hidden="true">{label}</dd>
                  <dd className="text-xs text-slate-600">{note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section aria-label="AS guide" className="py-14" style={{ background:'#F2F2F2' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div ref={refGuideHead} className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color:'#A6215F' }}>Your guide</p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color:'#092126' }}>
              Everything you need to understand AS, in one place.
            </h2>
          </div>

          {/* Feature: What is AS */}
          <div ref={refWhatIsAS} className="mb-5">
            <Link to="/about" className="group block rounded-3xl overflow-hidden hover:-translate-y-0.5 transition-transform"
              style={{ background:'linear-gradient(135deg,#092126,#A6215F)', boxShadow:'0 4px 28px rgba(9,33,38,0.3)' }}>
              <div className="px-8 py-8">
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color:'#F2BC57' }}>The condition</p>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-snug mb-3">
                  What is Ankylosing Spondylitis (Axial SpA)?
                </h3>
                <p className="text-sm leading-relaxed text-white/60 mb-5">
                  AS is an inflammatory condition where the immune system attacks the joints of the spine and pelvis. Over time, inflammation can cause the vertebrae to fuse. Caught early and managed well, most people live full, active lives.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-black transition-all" style={{ color:'#F2BC57' }} aria-hidden="true">
                  Read the full guide
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          </div>

          {/* Symptoms + Diagnosis */}
          <div ref={refSymDiag} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            <Link to="/about#symptoms" className="group rounded-3xl p-7 flex flex-col border shadow-sm hover:-translate-y-0.5 transition-transform bg-white" style={{ borderColor:'rgba(166,33,95,0.2)' }}
              aria-label="Symptoms — learn more about recognising AS symptoms">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:'rgba(166,33,95,0.1)', border:'1px solid rgba(166,33,95,0.25)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color:'#A6215F' }}>Recognising AS</p>
              </div>
              <h3 className="text-xl font-black mb-2" style={{ color:'#092126' }}>Symptoms</h3>
              <p className="text-sm leading-relaxed mb-5 text-slate-500">
                Inflammatory back pain is different from mechanical pain: it worsens with rest and improves with movement. It is often accompanied by fatigue, morning stiffness and in some cases eye inflammation.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-black transition-all" style={{ color:'#A6215F' }} aria-hidden="true">
                Learn more about symptoms
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </span>
            </Link>

            <Link to="/about#diagnosis" className="group rounded-3xl p-7 flex flex-col border shadow-sm hover:-translate-y-0.5 transition-transform bg-white" style={{ borderColor:'rgba(166,33,95,0.2)' }}
              aria-label="Getting diagnosed — how diagnosis works for AS">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:'rgba(166,33,95,0.1)', border:'1px solid rgba(166,33,95,0.25)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                  </svg>
                </div>
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color:'#A6215F' }}>The path forward</p>
              </div>
              <h3 className="text-xl font-black mb-2" style={{ color:'#092126' }}>Getting Diagnosed</h3>
              <p className="text-sm leading-relaxed flex-1 text-slate-500">
                Diagnosis involves MRI imaging, the HLA-B27 blood marker and clinical assessment by a rheumatologist. Knowing the right questions to ask your GP can make an enormous difference.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black transition-all" style={{ color:'#A6215F' }} aria-hidden="true">
                How diagnosis works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </span>
            </Link>
          </div>

          {/* Row 3 */}
          <div ref={refRow3} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">

            <Link to="/living-with-as#exercise" className="group rounded-3xl p-7 flex flex-col border shadow-sm hover:-translate-y-0.5 transition-transform bg-white" style={{ borderColor:'rgba(166,33,95,0.2)' }}
              aria-label="Exercise and movement guide for living with AS">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background:'rgba(166,33,95,0.1)', border:'1px solid rgba(166,33,95,0.25)' }}>
                <svg className="w-4 h-4" fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color:'#092126' }}>Exercise and Movement</h3>
              <p className="text-sm leading-relaxed flex-1 text-slate-500">
                Movement is one of the most powerful tools you have. Swimming, cycling and targeted physiotherapy help preserve flexibility and reduce stiffness long-term.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition-all" style={{ color:'#A6215F' }} aria-hidden="true">
                Movement guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </span>
            </Link>

            <Link to="/living-with-as#treatment" className="group rounded-3xl p-7 flex flex-col border shadow-sm hover:-translate-y-0.5 transition-transform bg-white" style={{ borderColor:'rgba(166,33,95,0.2)' }}
              aria-label="Treatment options for Ankylosing Spondylitis">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background:'rgba(166,33,95,0.1)', border:'1px solid rgba(166,33,95,0.25)' }}>
                <svg className="w-4 h-4" fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color:'#092126' }}>Treatment Options</h3>
              <p className="text-sm leading-relaxed flex-1 text-slate-500">
                NSAIDs remain the first step. For moderate to severe AS, biologics including TNF and IL-17 inhibitors are highly effective and increasingly accessible.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition-all" style={{ color:'#A6215F' }} aria-hidden="true">
                Treatment overview
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </span>
            </Link>

            <Link to="/living-with-as#mental-health" className="group rounded-3xl p-7 flex flex-col border shadow-sm hover:-translate-y-0.5 transition-transform bg-white sm:col-span-2 md:col-span-1" style={{ borderColor:'rgba(166,33,95,0.2)' }}
              aria-label="Mental health and wellbeing support for people with AS">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background:'rgba(166,33,95,0.1)', border:'1px solid rgba(166,33,95,0.25)' }}>
                <svg className="w-4 h-4" fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color:'#092126' }}>Mental Health</h3>
              <p className="text-sm leading-relaxed flex-1 text-slate-500">
                Living with persistent pain takes a real toll. Seeking support is not a sign of weakness. CBT, pacing strategies and peer connection are all evidence-based tools.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition-all" style={{ color:'#A6215F' }} aria-hidden="true">
                Wellbeing support
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </span>
            </Link>
          </div>

          {/* Feature: Resources */}
          <div ref={refResources}>
            <Link to="/resources" className="group block rounded-3xl overflow-hidden hover:-translate-y-0.5 transition-transform"
              style={{ background:'linear-gradient(135deg,#092126,#A6215F)', boxShadow:'0 4px 28px rgba(9,33,38,0.3)' }}
              aria-label="Support and resources — browse organisations and community groups for people living with AS">
              <div className="px-8 py-8">
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color:'#F2BC57' }}>Community</p>
                <h3 className="text-2xl font-black mb-2 text-white">Support and Resources</h3>
                <p className="text-sm leading-relaxed mb-5 text-white/70">
                  Trusted organisations, clinical guidelines and community groups for people living with AS around the world. NASS, Arthritis UK, SAA and more.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-black transition-all" style={{ color:'#F2BC57' }} aria-hidden="true">
                  Browse resources
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
