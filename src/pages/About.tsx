import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { HoverButton, HoverLink } from '../components/HoverButton'

const checkerQuestions = [
  { q:'Did your back pain begin before the age of 40?' },
  { q:'Did your back pain begin gradually and without a clear triggering injury or event?' },
  { q:'Has your back pain been present for three months or more?' },
  { q:'Do you experience spinal stiffness in the morning that takes 30 minutes or longer to resolve?' },
  { q:'Does physical activity or exercise reduce your back pain?' },
  { q:'Does your back pain persist or worsen during periods of rest or inactivity?' },
  { q:'Do you experience pain in the buttock region, alternating between sides?' },
  { q:'Does back pain wake you during the second half of the night?' },
]

function SymptomsChecker() {
  const [step, setStep] = useState<'intro'|number|'result'>('intro')
  const [answers, setAnswers] = useState<boolean[]>([])
  const score = answers.filter(Boolean).length

  function answer(yes: boolean) {
    const next = [...answers, yes]
    setAnswers(next)
    const nextStep = (step as number) + 1
    if (nextStep >= checkerQuestions.length) setStep('result')
    else setStep(nextStep)
  }
  function reset() { setStep('intro'); setAnswers([]) }

  const result =
    score >= 6
      ? { label:'High likelihood',         detail:'Your answers closely match the inflammatory back pain profile associated with AS. We strongly recommend speaking with your GP and asking for a referral to a rheumatologist.', badge:'linear-gradient(135deg,#092126,#A6215F)' }
      : score >= 3
      ? { label:'Some indicators present', detail:'Several of your answers are consistent with inflammatory back pain. It is worth discussing these symptoms with your GP, particularly if they have persisted for more than three months.', badge:'linear-gradient(135deg,#A6215F,#F24B4B)' }
      : { label:'Low likelihood',          detail:'Your symptoms are less typical of AS. That said, every case is different. If you have ongoing concerns about back pain, always speak with a medical professional.', badge:'linear-gradient(135deg,#A6215F,#F28B50)' }

  const progress = typeof step === 'number' ? ((step as number)/checkerQuestions.length)*100 : step === 'result' ? 100 : 0

  return (
    <section id="symptoms-checker">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-black" style={{ color:'#092126' }}>Could it be AS?</h2>
        <div className="flex-1 h-px bg-slate-200"/>
      </div>
      <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
        <div className="h-1" style={{ background:'linear-gradient(90deg,#092126,#A6215F,#F24B4B)' }}/>
        <div className="p-8 md:p-10">

          {step === 'intro' && (
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color:'#A6215F' }}>8 questions</p>
              <h3 className="text-xl font-black mb-3 leading-tight" style={{ color:'#092126' }}>
                A quick self-assessment for inflammatory back pain
              </h3>
              <p className="text-sm leading-relaxed mb-4 text-slate-500">
                This short checker is based on the ASAS criteria for inflammatory back pain, the hallmark symptom of AS. It takes under two minutes and gives you a clear starting point for a conversation with your doctor.
              </p>
              <p className="text-xs mb-8 leading-relaxed text-slate-400">This is not a diagnostic tool. Only a rheumatologist can diagnose AS.</p>
              <HoverButton onClick={() => setStep(0)} bg="#A6215F" hoverBg="#bf2870"
                className="px-5 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-all text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24B4B]"
                style={{ boxShadow:'0 4px 20px rgba(9,33,38,0.3)' }}>
                Start the checker
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </HoverButton>
            </div>
          )}

          {typeof step === 'number' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-slate-100">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width:`${progress}%`, background:'linear-gradient(90deg,#A6215F,#F24B4B)' }}/>
                </div>
                <span className="text-xs font-bold tabular-nums flex-shrink-0 text-slate-400">{(step as number)+1} / {checkerQuestions.length}</span>
                <HoverButton onClick={reset} bg="rgba(166,33,95,0.07)" hoverBg="rgba(166,33,95,0.14)"
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold rounded-lg px-2.5 py-1 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F] ${step === 0 ? 'invisible':''}`}
                  style={{ color:'#A6215F', border:'1px solid rgba(166,33,95,0.25)' }}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  Restart
                </HoverButton>
              </div>
              <h3 className="text-lg md:text-xl font-black leading-snug mb-8" style={{ color:'#092126' }}>
                {checkerQuestions[step as number].q}
              </h3>
              <div className="flex gap-3">
                <HoverButton onClick={() => answer(true)} bg="rgba(166,33,95,0.09)" hoverBg="rgba(166,33,95,0.16)"
                  className="px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]"
                  style={{ color:'#092126', border:'1px solid rgba(166,33,95,0.3)' }}>Yes</HoverButton>
                <HoverButton onClick={() => answer(false)} bg="rgba(166,33,95,0.09)" hoverBg="rgba(166,33,95,0.16)"
                  className="px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]"
                  style={{ color:'#092126', border:'1px solid rgba(166,33,95,0.3)' }}>No</HoverButton>
              </div>
            </div>
          )}

          {step === 'result' && (
            <div>
              <div className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 mb-6 text-white" style={{ background:result.badge }}>
                <span className="text-2xl font-black">{score}<span className="text-base font-bold opacity-60">/{checkerQuestions.length}</span></span>
                <span className="text-sm font-bold">{result.label}</span>
              </div>
              <p className="text-sm leading-relaxed mb-8 text-slate-500">{result.detail}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <HoverLink href="/resources" bg="#A6215F" hoverBg="#bf2870"
                  className="px-5 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-all text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24B4B]"
                  style={{ boxShadow:'0 4px 16px rgba(166,33,95,0.35)' }}>
                  See resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                </HoverLink>
                <HoverButton onClick={reset} bg="rgba(166,33,95,0.07)" hoverBg="rgba(166,33,95,0.14)"
                  className="px-5 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]"
                  style={{ color:'#092126', border:'1px solid rgba(166,33,95,0.2)' }}>Start again</HoverButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const symptoms = [
  'Chronic lower back and hip pain',
  'Morning stiffness lasting more than 30 minutes',
  'Fatigue and reduced energy',
  'Pain that improves with movement, worsens with rest',
  'Inflammation of the eyes (uveitis)',
  'Reduced spinal flexibility over time',
  'Peripheral joint involvement (knees, shoulders, hips)',
  'Tenderness at the heels or soles of the feet (enthesitis)',
]

const causes = [
  { label:'Genetics',      body:'Around 90% of AS patients carry the HLA-B27 gene, though not everyone with the gene develops AS.',           accent:'#A6215F', bg:'rgba(166,33,95,0.06)', border:'rgba(166,33,95,0.2)' },
  { label:'Immune System', body:'An overactive immune response drives chronic inflammation at the joints and spine.',                          accent:'#A6215F', bg:'rgba(166,33,95,0.06)', border:'rgba(166,33,95,0.2)' },
  { label:'Environment',   body:'Gut bacteria, infections and other environmental factors may trigger onset in those genetically susceptible.', accent:'#A6215F', bg:'rgba(166,33,95,0.06)', border:'rgba(166,33,95,0.2)' },
]

export default function About() {
  usePageMeta(
    'About Ankylosing Spondylitis | AS Aware',
    'Learn what Ankylosing Spondylitis is, how it affects the body, common symptoms, causes and how it is diagnosed. Includes a self-assessment checker.'
  )
  return (
    <div className="bg-white">

      <div className="relative overflow-hidden" style={{ background:'linear-gradient(135deg,#092126 0%,#A6215F 40%,#F24B4B 70%,#F2BC57 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
          <p className="text-white text-xs uppercase tracking-widest font-semibold mb-3">About the condition</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">What is Ankylosing Spondylitis?</h1>
          <p className="text-white mt-3 max-w-xl text-sm leading-relaxed">
            A condition too often misunderstood and too slow to diagnose.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className="text-lg leading-relaxed font-semibold" style={{ color:'#092126' }}>
            AS is a chronic, inflammatory arthritis primarily affecting the spine and sacroiliac joints, where the spine meets the pelvis.
          </p>
          <p className="leading-relaxed text-sm text-slate-500">
            Over time, inflammation can cause vertebrae to fuse, a process called <em>ankylosis</em>. AS falls under the Spondyloarthritis (SpA) family and is systemic: it can also affect the eyes, heart, lungs and bowel.
          </p>
        </div>

        <div className="rounded-2xl p-8 md:p-10" style={{ background:'linear-gradient(135deg,#092126,#A6215F)' }}>
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color:'#F2BC57' }}>Mechanism</p>
          <h2 className="text-2xl font-black text-white mb-4">How AS affects the body</h2>
          <p className="leading-relaxed max-w-3xl text-sm text-white/60">
            AS causes inflammation at the{' '}
            <span className="font-bold" style={{ color:'#F2BC57' }}>entheses</span>
            {' '}(where tendons and ligaments attach to bone). This drives new bone formation, gradually fusing spinal joints. Early stages often show no changes on X-ray, contributing to years of diagnostic delay. MRI is the preferred tool for early detection.
          </p>
        </div>

        <section id="symptoms">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black" style={{ color:'#092126' }}>Common Symptoms</h2>
            <div className="flex-1 h-px bg-slate-200"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {symptoms.map((s, i) => (
              <div key={s} className="flex items-start gap-4 rounded-xl px-5 py-4 bg-white border border-slate-100 shadow-sm">
                <span className="text-xs font-black mt-0.5 w-5 tabular-nums flex-shrink-0" style={{ color:'#A6215F' }}>{String(i+1).padStart(2,'0')}</span>
                <span className="text-sm leading-relaxed text-slate-600">{s}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black" style={{ color:'#092126' }}>Causes &amp; Risk Factors</h2>
            <div className="flex-1 h-px bg-slate-200"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {causes.map(({ label, body, accent, bg, border }) => (
              <div key={label} className="rounded-2xl p-6 border shadow-sm" style={{ background:bg, borderColor:border }}>
                <div className="w-8 h-1.5 rounded-full mb-4" style={{ background:accent }}/>
                <h3 className="font-black mb-2" style={{ color:'#092126' }}>{label}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="diagnosis">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black" style={{ color:'#092126' }}>Diagnosis</h2>
            <div className="flex-1 h-px bg-slate-200"/>
          </div>
          <div className="rounded-2xl p-8 bg-white border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-44 flex-shrink-0">
                <div className="text-7xl font-black leading-none"
                  style={{ background:'linear-gradient(135deg,#092126,#A6215F)', WebkitBackgroundClip:'text', backgroundClip:'text', WebkitTextFillColor:'transparent', color:'transparent' }}>
                  7–10
                </div>
                <div className="text-sm mt-1 text-slate-400">years avg. to diagnosis</div>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed mb-6 text-slate-500">
                  The diagnostic delay stems from gradual symptom onset and the fact that early joint changes are invisible on X-ray. Diagnosis combines:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Clinical assessment of symptoms and family history','HLA-B27 gene test and inflammatory markers (CRP, ESR)','MRI for early detection; X-rays for later-stage changes','Physical exam of spinal flexibility and joint tenderness'].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:'#A6215F' }}/>
                      <span className="text-sm leading-relaxed text-slate-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SymptomsChecker/>

      </div>
    </div>
  )
}
