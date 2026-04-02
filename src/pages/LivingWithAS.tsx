import { usePageMeta } from '../hooks/usePageMeta'

const sections = [
  { id: 'exercise', icon: 'exercise', title:'Exercise & Movement', intro:'Regular, gentle movement is one of the most effective tools for managing AS.',
    items:['Low-impact aerobic exercise (swimming, cycling, walking) preserves flexibility','Daily spine and hip stretching routines are essential, not optional','Hydrotherapy is highly effective and gentle on inflamed joints','Avoid high-impact contact sports during flares','A physiotherapist can build a programme tailored to your level'],
    accent:'#A6215F', bg:'rgba(166,33,95,0.06)', border:'rgba(166,33,95,0.2)' },
  { id: 'posture', icon: 'sleep', title:'Posture & Sleep', intro:'How you rest matters as much as how you move.',
    items:['Sleep on a firm mattress with a low pillow for spinal alignment','Sleep flat on your back and avoid the curled foetal position','Ergonomic seating and correct screen height reduce daytime strain','Take movement breaks every 30 to 45 minutes when sitting','Avoid staying in any single position for extended periods'],
    accent:'#A6215F', bg:'rgba(166,33,95,0.06)', border:'rgba(166,33,95,0.2)' },
  { id: 'diet', icon: 'diet', title:'Diet & Nutrition', intro:'No single AS diet exists, but anti-inflammatory eating supports overall wellbeing.',
    items:['Omega-3 rich foods, vegetables and whole grains may reduce inflammation','Some patients report improvement on a low-starch diet','Maintain a healthy weight to reduce joint strain','Stay well-hydrated, particularly during flares','Limit processed foods, alcohol and high sugar intake'],
    accent:'#A6215F', bg:'rgba(166,33,95,0.06)', border:'rgba(166,33,95,0.2)' },
  { id: 'mental-health', icon: 'mental', title:'Mental Health', intro:'Chronic pain takes a toll beyond the physical.',
    items:['Seeking mental health support is a strength, not a weakness','CBT (Cognitive Behavioural Therapy) helps manage pain-related distress','AS support groups offer community and shared understanding','Pacing (balancing activity with rest) reduces fatigue crashes','Be open with family, friends and employers where comfortable'],
    accent:'#A6215F', bg:'rgba(166,33,95,0.06)', border:'rgba(166,33,95,0.2)' },
]

const treatments = [
  { name:'NSAIDs',        body:'First-line treatment that reduces pain and inflammation. Regular use may also slow structural damage.',                                                color:'#F2BC57' },
  { name:'Biologics',     body:'TNF inhibitors and IL-17 inhibitors (adalimumab, secukinumab) for moderate-to-severe AS when NSAIDs are insufficient.',                              color:'#F2BC57' },
  { name:'Physiotherapy', body:'Recommended alongside all medication. An ongoing programme preserves spinal mobility long-term.',                                                      color:'#F2BC57' },
]

function SectionIcon({ type }: { type: string }) {
  const cls = "w-4 h-4"
  if (type === 'exercise') return (
    <svg className={cls} fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  )
  if (type === 'sleep') return (
    <svg className={cls} fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
    </svg>
  )
  if (type === 'diet') return (
    <svg className={cls} fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0022 5.5V3.935M8 3.935A2 2 0 0012 2a2 2 0 014 0 2 2 0 01-4 1.935M8 3.935A2 2 0 0012 5.87m0 0A2 2 0 0016 3.935"/>
    </svg>
  )
  return (
    <svg className={cls} fill="none" stroke="#A6215F" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  )
}

export default function LivingWithAS() {
  usePageMeta(
    'Living with Ankylosing Spondylitis | AS Aware',
    'Practical guidance on managing Ankylosing Spondylitis day to day, including exercise, posture, diet, mental health and medical treatment options.'
  )
  return (
    <div className="bg-white">

      <div className="relative overflow-hidden" style={{ background:'linear-gradient(135deg,#092126 0%,#A6215F 40%,#F24B4B 70%,#F2BC57 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
          <p className="text-white text-xs uppercase tracking-widest font-semibold mb-3">Lifestyle &amp; Management</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-2xl">Living with AS</h1>
          <p className="text-white mt-3 text-sm leading-relaxed">
            No cure yet, but the right combination of medication, physio and daily habits can make a significant difference.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {sections.map(({ id, icon, title, intro, items, bg, border, accent }) => (
            <div key={title} id={id} className="rounded-2xl overflow-hidden border shadow-sm" style={{ background:bg, borderColor:border }}>
              <div className="h-1" style={{ background:accent }}/>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background:'rgba(166,33,95,0.1)', border:'1px solid rgba(166,33,95,0.2)' }}>
                    <SectionIcon type={icon}/>
                  </div>
                  <h2 className="text-lg font-black" style={{ color:'#092126' }}>{title}</h2>
                </div>
                <p className="text-xs italic mb-5 text-slate-400">{intro}</p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:accent }}/>
                      <span className="text-sm leading-relaxed text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div id="treatment" className="rounded-2xl p-8 md:p-10" style={{ background:'linear-gradient(135deg,#092126,#A6215F)' }}>
          <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color:'#F2BC57' }}>Medical Treatment</p>
          <h2 className="text-2xl font-black text-white mb-8">Working with your rheumatologist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatments.map(({ name, body, color }) => (
              <div key={name} className="rounded-xl p-5" style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)' }}>
                <h3 className="font-black mb-2" style={{ color }}>{name}</h3>
                <p className="text-sm leading-relaxed text-white/60">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-8 pt-6 text-white/40" style={{ borderTop:'1px solid rgba(255,255,255,0.08)' }}>
            Always work with your rheumatologist to determine the most appropriate treatment for your individual needs.
          </p>
        </div>
      </div>
    </div>
  )
}
