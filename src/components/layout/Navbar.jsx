import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/company' },
  {
    label: 'Projects', href: '/projects',
    children: [
      { label: 'Bridges & Footbridges', href: '/projects/bridges-and-footbridges' },
      { label: 'Buildings', href: '/projects/buildings' },
      { label: 'Stadiums & Arenas', href: '/projects/stadiums-and-arenas' },
      { label: 'Industrial Facilities', href: '/projects/industrial-facilities' },
      { label: 'Special Projects', href: '/projects/special-projects' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Careers', href: '/careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="https://www.hortacoslada.com/assets/imagenes/logo-4.png" alt="Horta Coslada" className={`transition-all duration-500 object-contain ${scrolled ? 'h-8' : 'h-10'}`}
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }}
            />
            <span className="hidden font-display text-2xl tracking-widest text-white">HORTA<span className="text-brand-red">.</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <div key={link.href} className="relative"
                onMouseEnter={() => link.children && setDropdown(link.href)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link to={link.href} className="nav-link">{link.label}</Link>
                {link.children && dropdown === link.href && (
                  <div className="absolute top-full left-0 mt-4 min-w-[220px] bg-brand-dark border border-brand-border py-2 shadow-2xl z-50">
                    {link.children.map(child => (
                      <Link key={child.href} to={child.href}
                        className="block px-5 py-3 font-body text-xs tracking-[0.1em] uppercase text-brand-muted hover:text-white hover:bg-brand-gray transition-all duration-200">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* LinkedIn */}
          <div className="hidden lg:flex items-center">
            <a href="https://www.linkedin.com/company/horta-coslada" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-brand-dark lg:hidden flex flex-col justify-center px-10 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map(link => (
            <Link key={link.href} to={link.href} className="font-heading text-3xl text-white/70 hover:text-white transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
