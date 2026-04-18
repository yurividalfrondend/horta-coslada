import { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { PROJECT_CATEGORIES, PROJECTS, NEWS, COMPANY_STATS, TEAM, CAREERS, SITE } from '../data/site'

// ─── Arrow Icon ────────────────────────────────────────────────
function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── HOME ──────────────────────────────────────────────────────
const SLIDES = [
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90', label: 'Bridges & Footbridges', title: 'Engineering\nThat Endures' },
  { image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90', label: 'Civil Buildings', title: 'Structure\nMeets Vision' },
  { image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&q=90', label: 'Stadiums & Arenas', title: 'Bold\nAmbitions Built' },
]

export function Home() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const timer = useRef(null)
  const [sRef, sInView] = useInView()
  const [aRef, aInView] = useInView()
  const [nRef, nInView] = useInView()

  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])
  useEffect(() => {
    timer.current = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 6000)
    return () => clearInterval(timer.current)
  }, [])

  const slide = SLIDES[current]

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {SLIDES.map((s, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: current === i ? 1 : 0 }}>
            <img src={s.image} alt="" className="w-full h-full object-cover" style={{ transform: current === i ? 'scale(1)' : 'scale(1.05)', transition: 'transform 6s ease-out' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
          </div>
        ))}
        <div className={`relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 max-w-7xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="section-tag mb-4">{slide.label}</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none tracking-wider mb-8 whitespace-pre-line">{slide.title}</h1>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link to="/projects" className="btn-red">View Projects <Arrow /></Link>
            <Link to="/company" className="btn-outline">About Us</Link>
          </div>
          <div className="flex items-center gap-3 mt-10">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => { setCurrent(i); clearInterval(timer.current) }}
                className={`h-px transition-all duration-500 ${current === i ? 'w-12 bg-brand-red' : 'w-4 bg-white/30'}`} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden lg:flex">
          {[{n:'40+',l:'Years'},{n:'500+',l:'Projects'},{n:'25',l:'Countries'}].map(s=>(
            <div key={s.l} className="bg-brand-dark/80 backdrop-blur-sm border-l border-brand-border px-8 py-5">
              <span className="font-display text-3xl text-brand-red block">{s.n}</span>
              <span className="font-body text-xs text-brand-muted tracking-widest uppercase">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={sRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-tag block mb-3">Our Work</span>
              <h2 className={`font-heading text-5xl md:text-6xl text-white font-light leading-tight transition-all duration-700 ${sInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
                Projects that<br /><em className="text-brand-red not-italic font-normal">define skylines</em>
              </h2>
            </div>
            <Link to="/projects" className={`btn-outline self-start transition-all duration-700 delay-300 ${sInView?'opacity-100':'opacity-0'}`}>View All <Arrow /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {PROJECT_CATEGORIES.map((cat, i) => (
              <Link key={cat.id} to={cat.href} className="project-card group relative overflow-hidden block aspect-[4/3]"
                style={{ transitionDelay: `${i*100}ms` }}>
                <img src={cat.cover} alt={cat.label} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="block font-body text-xs tracking-[0.2em] uppercase text-brand-red mb-2">{cat.count} Projects</span>
                  <h3 className="font-heading text-2xl text-white font-light mb-3 group-hover:text-brand-red transition-colors duration-300">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-32 bg-brand-gray">
        <div ref={aRef} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="section-tag block mb-4">About Horta Coslada</span>
            <h2 className={`font-heading text-5xl text-white font-light leading-tight mb-8 transition-all duration-700 ${aInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
              Four decades of<br /><em className="text-brand-red not-italic">structural mastery</em>
            </h2>
            <div className="w-12 h-px bg-brand-red mb-8" />
            <p className={`font-body text-brand-muted text-sm leading-relaxed mb-8 transition-all duration-700 delay-100 ${aInView?'opacity-100':'opacity-0'}`}>
              Horta Coslada is an international structural engineering consultancy with over 40 years of experience designing and delivering complex infrastructure projects across Europe and beyond.
            </p>
            <Link to="/company" className="btn-red">Discover Our Story <Arrow /></Link>
          </div>
          <div className={`grid grid-cols-2 gap-0.5 transition-all duration-700 delay-200 ${aInView?'opacity-100 translate-x-0':'opacity-0 translate-x-10'}`}>
            {COMPANY_STATS.map(s=>(
              <div key={s.label} className="bg-brand-mid p-10 text-center">
                <span className="font-display text-5xl text-brand-red block mb-2">{s.value}</span>
                <span className="font-body text-xs text-brand-muted tracking-[0.2em] uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 bg-brand-dark">
        <div ref={nRef} className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-tag block mb-3">Latest News</span>
              <h2 className={`font-heading text-5xl text-white font-light transition-all duration-700 ${nInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
                What's happening<br /><em className="text-brand-red not-italic">at Horta Coslada</em>
              </h2>
            </div>
            <Link to="/news" className="btn-outline self-start">All News</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-0.5">
            {NEWS.map((item,i)=>(
              <div key={item.id} className={`group bg-brand-gray hover:bg-brand-mid transition-all duration-500 ${nInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`} style={{transitionDelay:`${i*100+200}ms`}}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-xs tracking-widest uppercase text-brand-red">{item.category}</span>
                    <span className="font-body text-xs text-brand-muted">{item.date}</span>
                  </div>
                  <h3 className="font-heading text-xl text-white font-light leading-snug group-hover:text-brand-red transition-colors duration-300">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden bg-brand-gray">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray via-brand-gray/80 to-brand-gray/60" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="section-tag block mb-4">Work With Us</span>
          <h2 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-8">
            LET'S BUILD<br /><span className="text-brand-red">SOMETHING</span><br />EXTRAORDINARY
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact" className="btn-red">Get In Touch <Arrow /></Link>
            <Link to="/careers" className="btn-outline">Join Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── COMPANY ───────────────────────────────────────────────────
export function Company() {
  const [ref, inView] = useInView()
  const [tRef, tInView] = useInView()

  return (
    <>
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="section-tag block mb-4">Who We Are</span>
          <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider">COMPANY</h1>
        </div>
      </section>

      <section className="py-28 bg-brand-dark">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="section-tag block mb-4">Our Mission</span>
            <h2 className={`font-heading text-5xl text-white font-light leading-tight mb-8 transition-all duration-700 ${inView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
              Engineering structures that<br /><em className="text-brand-red not-italic">stand the test of time</em>
            </h2>
            <div className="w-12 h-px bg-brand-red mb-8" />
            <div className={`space-y-5 font-body text-brand-muted text-sm leading-relaxed transition-all duration-700 delay-100 ${inView?'opacity-100':'opacity-0'}`}>
              <p>Founded in 1984 in Coslada, Madrid, Horta Coslada has grown from a local engineering office into an internationally recognised structural consultancy operating across 25 countries.</p>
              <p>We combine rigorous technical analysis with creative engineering thinking to solve the most complex structural challenges — from slender cable-stayed footbridges to long-span stadium roofs and industrial megastructures.</p>
            </div>
          </div>
          <div className={`relative h-96 transition-all duration-1000 delay-200 ${inView?'opacity-100 translate-x-0':'opacity-0 translate-x-12'}`}>
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Team" className="w-full h-full object-cover" />
            <div className="absolute -bottom-4 -left-4 bg-brand-red p-6 hidden md:block">
              <span className="font-display text-4xl text-white block">1984</span>
              <span className="font-body text-xs text-white/80 tracking-widest uppercase">Founded</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {COMPANY_STATS.map(s=>(
            <div key={s.label} className="p-12 border-r border-brand-border last:border-r-0 text-center">
              <span className="font-display text-6xl text-brand-red block mb-2">{s.value}</span>
              <span className="font-body text-xs text-brand-muted tracking-[0.2em] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-brand-gray">
        <div ref={tRef} className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-tag block mb-3">Leadership</span>
            <h2 className={`font-heading text-5xl text-white font-light transition-all duration-700 ${tInView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
              The team behind<br /><em className="text-brand-red not-italic">our success</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {TEAM.map((member,i)=>(
              <div key={member.name} className={`group bg-brand-dark overflow-hidden transition-all duration-700 ${tInView?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`} style={{transitionDelay:`${i*100+200}ms`}}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white font-light">{member.name}</h3>
                  <p className="font-body text-xs text-brand-red tracking-widest uppercase mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ─── PROJECTS INDEX ────────────────────────────────────────────
export function ProjectsIndex() {
  const [ref, inView] = useInView()
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src="https://www.hortacoslada.com/archivos/proyectos_eti/1/proyectos-1-rec2.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="section-tag block mb-4">Our Portfolio</span>
          <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider">PROJECTS</h1>
        </div>
      </section>
      <section className="bg-brand-dark py-24">
        <div ref={ref} className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {PROJECT_CATEGORIES.map((cat,i)=>(
              <Link key={cat.id} to={cat.href} className={`project-card group relative overflow-hidden block aspect-[4/3] transition-all duration-700 ${inView?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`} style={{transitionDelay:`${i*100}ms`}}>
                <img src={cat.cover} alt={cat.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
                <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="font-body text-xs tracking-widest uppercase text-brand-red mb-2">{cat.count} Projects</span>
                  <h2 className="font-heading text-3xl text-white font-light group-hover:text-brand-red transition-colors duration-300 mb-3">{cat.label}</h2>
                  <p className="font-body text-sm text-white/60 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-400">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ─── PROJECT CATEGORY ──────────────────────────────────────────
export function ProjectCategory() {
  const { category: slug } = useParams()
  const [ref, inView] = useInView()
  const category = PROJECT_CATEGORIES.find(c => c.id === slug)
  const projects = PROJECTS[slug] || []

  if (!category) return <NotFound />

  return (
    <>
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={category.cover} alt={category.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link to="/projects" className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-brand-muted hover:text-white transition-colors mb-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All Projects
          </Link>
          <span className="section-tag block mb-3">{category.count} Projects</span>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider">{category.label.toUpperCase()}</h1>
        </div>
      </section>
      <section className="py-6 bg-brand-gray border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-brand-muted text-sm leading-relaxed max-w-3xl">{category.description}</p>
        </div>
      </section>
      <section className="py-20 bg-brand-dark">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 gap-0.5">
          {projects.map((project,i)=>(
            <div key={project.id} className={`project-card group relative overflow-hidden aspect-[16/10] transition-all duration-700 ${inView?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`} style={{transitionDelay:`${i*100}ms`}}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-xs tracking-widest uppercase text-brand-red">{project.location}</span>
                  <span className="font-body text-xs text-brand-muted">{project.year}</span>
                </div>
                <h3 className="font-heading text-2xl text-white font-light group-hover:text-brand-red transition-colors duration-300">{project.title}</h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand-muted mb-8">Explore Other Categories</p>
          <div className="flex flex-wrap gap-3">
            {PROJECT_CATEGORIES.filter(c=>c.id!==slug).map(cat=>(
              <Link key={cat.id} to={cat.href} className="font-body text-xs tracking-widest uppercase border border-brand-border text-brand-muted px-5 py-3 hover:border-brand-red hover:text-brand-red transition-all duration-300">{cat.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ─── NEWS ──────────────────────────────────────────────────────
export function NewsPage() {
  const [ref, inView] = useInView()
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="section-tag block mb-4">Latest Updates</span>
          <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider">NEWS</h1>
        </div>
      </section>
      <section className="py-24 bg-brand-dark">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-0.5">
          {NEWS.map((item,i)=>(
            <div key={item.id} className={`group bg-brand-gray hover:bg-brand-mid transition-all duration-500 ${inView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`} style={{transitionDelay:`${i*100+200}ms`}}>
              <div className="aspect-[16/9] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-widest uppercase text-brand-red">{item.category}</span>
                  <span className="font-body text-xs text-brand-muted">{item.date}</span>
                </div>
                <h3 className="font-heading text-xl text-white font-light leading-snug group-hover:text-brand-red transition-colors duration-300 mb-3">{item.title}</h3>
                <p className="font-body text-xs text-brand-muted leading-relaxed">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

// ─── CONTACT ───────────────────────────────────────────────────
export function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name:'', email:'', company:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required.'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Please write a message.'
    return e
  }

  function handleChange(e) {
    const {name,value} = e.target
    setForm(p=>({...p,[name]:value}))
    if (errors[name]) setErrors(p=>({...p,[name]:''}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) return setErrors(errs)
    setStatus('success')
  }

  const inp = (err) => `w-full bg-brand-gray border ${err?'border-red-500':'border-brand-border'} text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-brand-red transition-colors duration-200 placeholder:text-brand-muted/40 resize-none`

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="section-tag block mb-4">Let's Talk</span>
          <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider">CONTACT</h1>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <span className="section-tag block mb-4">Get In Touch</span>
            <h2 className={`font-heading text-5xl text-white font-light leading-tight mb-8 transition-all duration-700 ${inView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
              Have a project<br /><em className="text-brand-red not-italic">in mind?</em>
            </h2>
            <div className="w-12 h-px bg-brand-red mb-8" />
            <div className="space-y-8">
              {[{label:'Address',value:SITE.address,icon:'📍'},{label:'Email',value:SITE.email,icon:'✉'},{label:'Phone',value:SITE.phone,icon:'📞'}].map(item=>(
                <div key={item.label} className="flex items-start gap-5 border-b border-brand-border pb-8">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="font-body text-xs tracking-widest uppercase text-brand-red block mb-1">{item.label}</span>
                    <span className="font-body text-sm text-white">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${inView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            {status==='success' ? (
              <div className="bg-brand-gray p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-brand-red flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-heading text-3xl text-white font-light mb-3">Message Sent!</h3>
                <p className="font-body text-brand-muted text-sm">Thank you. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block font-body text-xs tracking-widest uppercase text-brand-muted mb-2">Full Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className={inp(errors.name)} />{errors.name&&<p className="mt-1 font-body text-xs text-red-400">{errors.name}</p>}</div>
                  <div><label className="block font-body text-xs tracking-widest uppercase text-brand-muted mb-2">Email *</label><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={inp(errors.email)} />{errors.email&&<p className="mt-1 font-body text-xs text-red-400">{errors.email}</p>}</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block font-body text-xs tracking-widest uppercase text-brand-muted mb-2">Company</label><input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company" className={inp()} /></div>
                  <div><label className="block font-body text-xs tracking-widest uppercase text-brand-muted mb-2">Subject</label><input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project enquiry" className={inp()} /></div>
                </div>
                <div><label className="block font-body text-xs tracking-widest uppercase text-brand-muted mb-2">Message *</label><textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell us about your project..." className={inp(errors.message)} />{errors.message&&<p className="mt-1 font-body text-xs text-red-400">{errors.message}</p>}</div>
                <button type="submit" className="btn-red w-full justify-center">Send Message <Arrow /></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

// ─── CAREERS ───────────────────────────────────────────────────
export function CareersPage() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(null)

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="section-tag block mb-4">Join the Team</span>
          <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider">CAREERS</h1>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div ref={ref} className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="section-tag block mb-3">Open Positions</span>
            <h2 className={`font-heading text-5xl text-white font-light transition-all duration-700 ${inView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>Current vacancies</h2>
          </div>
          <div className="space-y-0.5">
            {CAREERS.map((job,i)=>(
              <div key={job.id} className={`border border-brand-border hover:border-brand-red bg-brand-gray transition-all duration-500 ${inView?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`} style={{transitionDelay:`${i*80+200}ms`}}>
                <button className="w-full flex items-center justify-between p-8 text-left" onClick={()=>setActive(active===job.id?null:job.id)}>
                  <div>
                    <h3 className="font-heading text-2xl text-white font-light">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="font-body text-xs text-brand-red tracking-widest uppercase">{job.department}</span>
                      <span className="font-body text-xs text-brand-muted">{job.location}</span>
                      <span className="font-body text-xs text-brand-muted">{job.type}</span>
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`text-brand-muted transition-transform duration-300 flex-shrink-0 ${active===job.id?'rotate-45':''}`}>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {active===job.id&&(
                  <div className="px-8 pb-8 border-t border-brand-border pt-6">
                    <p className="font-body text-sm text-brand-muted leading-relaxed mb-6">We are looking for an experienced {job.title} to join our {job.department} team in {job.location}. You will work on high-profile structural projects across Europe, collaborating with a multidisciplinary team of engineers and architects.</p>
                    <a href={`mailto:careers@hortacoslada.com?subject=Application: ${job.title}`} className="btn-red inline-flex">Apply Now <Arrow /></a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ─── 404 ───────────────────────────────────────────────────────
export function NotFound() {
  return (
    <section className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-6">
      <span className="font-display text-[12rem] text-brand-red/10 leading-none select-none block">404</span>
      <h1 className="font-heading text-5xl text-white font-light -mt-12 mb-4">Page Not Found</h1>
      <div className="w-12 h-px bg-brand-red mx-auto my-6" />
      <p className="font-body text-brand-muted text-sm max-w-md mb-10 leading-relaxed">The page you are looking for doesn't exist or has been moved.</p>
      <div className="flex items-center gap-4">
        <Link to="/" className="btn-red">Back to Home</Link>
        <Link to="/projects" className="btn-outline">View Projects</Link>
      </div>
    </section>
  )
}
