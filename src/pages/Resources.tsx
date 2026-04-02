import { usePageMeta } from '../hooks/usePageMeta'
import { HoverLink } from '../components/HoverButton'

const organisations = [
  { name:'National Axial Spondyloarthritis Society (NASS)', country:'UK',  description:'The leading UK charity for axial SpA and AS. Patient resources, helplines, and advocacy.',        url:'https://nass.co.uk',                accent:'#A6215F', bg:'rgba(166,33,95,0.06)',  border:'rgba(166,33,95,0.2)' },
  { name:'Spondylitis Association of America (SAA)',         country:'USA', description:'Information, support groups, and research updates for people with AS in the US.',                  url:'https://spondylitis.org',           accent:'#A6215F', bg:'rgba(166,33,95,0.06)',  border:'rgba(166,33,95,0.2)' },
  { name:'Arthritis UK',                                     country:'UK',  description:'UK charity with comprehensive AS information, a helpline, and community support.',                 url:'https://www.arthritis-uk.org',      accent:'#A6215F', bg:'rgba(166,33,95,0.06)',  border:'rgba(166,33,95,0.2)' },
  { name:'Arthritis Australia',                              country:'AUS', description:'Resources and support for Australians living with all forms of arthritis including AS.',           url:'https://arthritisaustralia.com.au', accent:'#A6215F', bg:'rgba(166,33,95,0.06)',  border:'rgba(166,33,95,0.2)' },
]

const clinicalLinks = [
  { label:'NICE Guidelines on Spondyloarthritis (UK)',                    url:'https://www.nice.org.uk/guidance/ng65' },
  { label:'ASAS: Assessment of SpondyloArthritis International Society', url:'https://www.asas-group.org' },
  { label:'Arthritis UK: AS information',                                url:'https://www.arthritis-uk.org/search?query=ankylosing+spondylitis' },
  { label:'ASDAS disease activity scoring tool (ASAS)',                   url:'https://www.asas-group.org/education/asas-app/' },
  { label:'Ankylosing Spondylitis: Wikipedia',                           url:'https://en.wikipedia.org/wiki/Ankylosing_spondylitis' },
]

export default function Resources() {
  usePageMeta(
    'Resources | AS Aware',
    'Trusted organisations, charities and clinical references for people living with Ankylosing Spondylitis, including NASS, Arthritis UK and the SAA.'
  )
  return (
    <div className="bg-white">

      <div className="relative overflow-hidden" style={{ background:'linear-gradient(135deg,#092126 0%,#A6215F 40%,#F24B4B 70%,#F2BC57 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
          <p className="text-white text-xs uppercase tracking-widest font-semibold mb-3">Support &amp; Information</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-2xl">Resources</h1>
          <p className="text-white mt-3 max-w-xl text-sm leading-relaxed">
            Trusted organisations and clinical references to help you navigate life with AS.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black" style={{ color:'#092126' }}>Organisations &amp; Charities</h2>
            <div className="flex-1 h-px bg-slate-200"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {organisations.map(({ name,country,description,url,accent,bg,border }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden hover:-translate-y-0.5 transition-all block border shadow-sm"
                style={{ background:bg, borderColor:border }}>
                <div className="h-1" style={{ background:accent }}/>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-black text-sm leading-snug pr-4" style={{ color:'#092126' }}>{name}</h3>
                    <span className="flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full font-bold bg-white text-slate-500 border border-slate-200">{country}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4 text-slate-500">{description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color:accent }}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    {url.replace('https://','')}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black" style={{ color:'#092126' }}>Clinical &amp; Research</h2>
            <div className="flex-1 h-px bg-slate-200"/>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            {clinicalLinks.map(({ label,url },i) => (
              <HoverLink key={label} href={url} target="_blank" rel="noopener noreferrer"
                bg="transparent" hoverBg="rgba(166,33,95,0.04)"
                className="flex items-center justify-between px-6 py-4 transition-colors group"
                style={{ borderTop: i > 0 ? '1px solid #F1F5F9' : 'none' }}>
                <span className="text-sm text-slate-600">{label}</span>
                <svg className="w-4 h-4 flex-shrink-0 ml-4 text-slate-300 group-hover:text-slate-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </HoverLink>
            ))}
          </div>
        </section>

        <div className="rounded-2xl px-6 py-5 text-sm leading-relaxed bg-slate-50 border border-slate-200 text-slate-500">
          <strong className="text-slate-700">Medical Disclaimer:</strong> All resources are for informational purposes only.
          This site does not endorse any organisation, treatment, or medical advice. Always consult a qualified healthcare professional.
        </div>

      </div>
    </div>
  )
}
