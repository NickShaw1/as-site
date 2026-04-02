import { useState, useRef, useEffect, useId } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { HoverButton } from '../components/HoverButton'

const FORMSPREE_ID = 'mvzvqlwq'

const stats = [
  { label: 'Diagnosed',       value: 'Over 10 years ago',          accent: '#F24B4B' },
  { label: 'Based in',        value: 'United Kingdom',              accent: '#F2BC57' },
  { label: 'Treatment',       value: 'Biologics and physiotherapy', accent: '#A6215F' },
  { label: 'Built this site', value: 'To help others',              accent: '#092126' },
]

function safeId(raw: string, suffix: string) {
  return raw.replace(/:/g, '') + suffix
}

const inputBase = [
  'w-full px-4 py-3 rounded-xl text-sm outline-none resize-none',
  'bg-white border border-slate-400 text-slate-800',
  'transition-colors duration-150',
  'focus-visible:border-[#A6215F] focus-visible:ring-2 focus-visible:ring-[#A6215F]',
].join(' ')

const labelClass = 'block text-xs font-bold uppercase tracking-widest mb-1.5 text-slate-600'

export default function Contact() {
  usePageMeta(
    'Contact | AS Aware',
    'Get in touch with AS Aware. Share your story, ask a question or send feedback about Ankylosing Spondylitis.'
  )
  const [status,  setStatus]  = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [bioOpen, setBioOpen] = useState(false)

  const showSuccess = status === 'success'

  const raw = useId()
  const id  = (suffix: string) => safeId(raw, suffix)

  const successRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (showSuccess) successRef.current?.focus()
  }, [showSuccess])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <div className="bg-white">

      <section aria-label="Contact page introduction" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#092126 0%,#A6215F 40%,#F24B4B 70%,#F2BC57 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
          <p className="text-white text-xs uppercase tracking-widest font-semibold mb-3">Get in touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">Contact</h1>
          <p className="text-white mt-3 max-w-xl text-sm leading-relaxed">
            Questions, feedback or just want to share your story. I'd love to hear from you.
          </p>
        </div>
      </section>

      <main id="main-content" tabIndex={-1} className="outline-none max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">

          <section aria-labelledby="about-heading">
            <h2
              id="about-heading"
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: '#A6215F' }}
            >
              About me
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-5">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl flex-shrink-0 overflow-hidden border-2 border-slate-200 shadow-sm">
                <img src="/images/about.jpg" alt="Nick, the site owner" className="w-full h-full object-cover" width="128" height="128" loading="lazy" decoding="async" />
              </div>
              <div className="pt-1">
                <p className="text-xl font-black mb-2 leading-tight" style={{ color: '#092126' }}>
                  Living with AS for over ten years.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Hi, I'm Nick 🙂. I was diagnosed with Ankylosing Spondylitis in my early thirties. The years before
                  diagnosis were confusing and frustrating, and finding clear, honest information was harder than it
                  should have been.
                </p>
              </div>
            </div>

            <div
              id={id('bio')}
              // @ts-expect-error — inert is valid HTML but not yet in React's types
              inert={!bioOpen ? '' : undefined}
              className={`space-y-3 text-sm leading-relaxed text-slate-600 overflow-hidden transition-all duration-300
                ${bioOpen ? 'max-h-[500px]' : 'max-h-0 sm:max-h-[500px]'}`}
            >
              <p>I built this site because I wanted to create the resource I wish I had when I was first diagnosed.
                Something that doesn't talk down to you, acknowledges how hard it can be and still manages to be
                optimistic about the road ahead.</p>
              <p>AS has shaped a lot of my life but it has never defined it. I still travel, work and stay as active
                as I can. Some days are harder than others, but that's the nature of it. If this site helps even one
                person feel less alone or get to a diagnosis faster, it's worth every hour spent building it.</p>
              <p>If you have feedback, a correction or a story to share, use the form and I'll get back to you.</p>
            </div>

            <button
              type="button"
              onClick={() => setBioOpen(o => !o)}
              aria-expanded={bioOpen}
              aria-controls={id('bio')}
              aria-label={bioOpen ? 'Show less about Nick' : 'Read more about Nick'}
              className="sm:hidden mt-2 text-xs font-bold tracking-wide cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]"
              style={{ color: '#A6215F' }}
            >
              {bioOpen ? 'Show less' : 'Read more'}
            </button>

            <dl className="mt-7 pt-7 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-slate-100">
              {stats.map(({ label, value, accent }) => (
                <div key={label} className="pl-3 min-w-0" style={{ borderLeft: `3px solid ${accent}` }}>
                  <dt className="text-[11px] font-bold uppercase tracking-widest mb-1 text-slate-500">{label}</dt>
                  <dd className="text-sm font-black text-slate-800 break-words">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="form-heading">
            <h2
              id="form-heading"
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: '#A6215F' }}
            >
              Send a message
            </h2>

            <div aria-live="polite" aria-atomic="true" className="sr-only">
              {status === 'success' && 'Your message was sent successfully. Thanks for getting in touch.'}
              {status === 'error'   && 'There was a problem sending your message. Please try again.'}
            </div>

            <div
              aria-hidden={!showSuccess}
              className={`transition-opacity duration-300 ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'}`}
            >
              <div
                ref={successRef}
                tabIndex={-1}
                className="rounded-2xl p-10 flex flex-col items-center text-center bg-white border-2 border-green-500 focus:outline-none"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-green-50 border border-green-300"
                  aria-hidden="true"
                >
                  <svg className="w-7 h-7" fill="none" stroke="#16a34a" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-2">Message sent</h3>
                <p className="text-slate-600 text-sm max-w-sm">
                  Thanks for getting in touch. I'll get back to you soon.
                </p>
                <HoverButton
                  type="button"
                  onClick={() => setStatus('idle')}
                  bg="#f8fafc" hoverBg="#e2e8f0"
                  className="mt-7 px-5 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-all cursor-pointer text-slate-700 border border-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]"
                >
                  Send another message
                </HoverButton>
              </div>
            </div>

            <form
              id={id('form')}
              onSubmit={handleSubmit}
              aria-label="Contact form"
              className={`space-y-4 transition-opacity duration-300 ${showSuccess ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'}`}
            >
              <p className="text-xs text-slate-500">All fields are required.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={id('name')} className={labelClass}>Name</label>
                  <input id={id('name')} type="text" name="name" required autoComplete="name"
                    value={form.name} onChange={handleChange} placeholder="Your name" className={inputBase} />
                </div>
                <div>
                  <label htmlFor={id('email')} className={labelClass}>Email</label>
                  <input id={id('email')} type="email" name="email" required autoComplete="email"
                    value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputBase} />
                </div>
              </div>

              <div>
                <label htmlFor={id('subject')} className={labelClass}>Subject</label>
                <input id={id('subject')} type="text" name="subject" required autoComplete="off"
                  value={form.subject} onChange={handleChange} placeholder="What's this about?" className={inputBase} />
              </div>

              <div>
                <label htmlFor={id('message')} className={labelClass}>Message</label>
                <textarea id={id('message')} name="message" required rows={6}
                  value={form.message} onChange={handleChange} placeholder="Your message..." className={inputBase} />
              </div>

              <HoverButton
                type="submit"
                disabled={status === 'sending'}
                bg="#A6215F" hoverBg="#bf2870"
                className="w-full justify-center px-5 py-3 rounded-lg text-sm font-black inline-flex items-center gap-2 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6215F]"
                style={{ color: '#fff', boxShadow: '0 4px 20px rgba(39,35,64,0.3)' }}
              >
                {status === 'sending' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </HoverButton>

              {status === 'error' && (
                <div role="alert" className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-300">
                  <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v4m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                  </svg>
                  <p className="text-xs text-red-700 flex-1">Something went wrong. Please try again in a moment.</p>
                  <button type="button" onClick={() => setStatus('idle')} aria-label="Dismiss error message"
                    className="text-red-400 hover:text-red-600 transition-colors cursor-pointer flex-shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}

              <p className="text-xs text-center text-slate-500">Your message is sent directly to me. I read everything.</p>
            </form>
          </section>

        </div>
      </main>
    </div>
  )
}
