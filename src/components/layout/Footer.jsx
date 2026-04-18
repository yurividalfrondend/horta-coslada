import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-gray border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-brand-border">
          <div className="md:col-span-2">
            <img src="https://www.hortacoslada.com/assets/imagenes/logo-4.png" alt="Horta Coslada" className="h-8 mb-6 object-contain" onError={e=>e.target.style.display='none'} />
            <p className="font-body text-sm text-brand-muted leading-relaxed max-w-sm">International structural engineering consultancy delivering excellence in bridges, buildings, stadiums and special infrastructure since 1984.</p>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-brand-muted hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="font-body text-xs">LinkedIn</span>
            </a>
          </div>
          <div>
            <h4 className="section-tag mb-5">Company</h4>
            <ul className="space-y-3">
              {[{l:'About Us',h:'/company'},{l:'Projects',h:'/projects'},{l:'News',h:'/news'},{l:'Careers',h:'/careers'},{l:'Contact',h:'/contact'}].map(link=>(
                <li key={link.h}><Link to={link.h} className="font-body text-sm text-brand-muted hover:text-white transition-colors duration-200">{link.l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="section-tag mb-5">Contact</h4>
            <div className="space-y-3">
              <p className="font-body text-sm text-brand-muted">{SITE.address}</p>
              <a href={`mailto:${SITE.email}`} className="block font-body text-sm text-brand-muted hover:text-white transition-colors duration-200">{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="block font-body text-sm text-brand-muted hover:text-white transition-colors duration-200">{SITE.phone}</a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-brand-muted">© {year} {SITE.name} — All rights reserved</p>
          <div className="flex items-center gap-6">
            {[{l:'Legal Notice & Privacy',h:'/legal'},{l:'Cookie Policy',h:'/cookies'}].map(link=>(
              <Link key={link.h} to={link.h} className="font-body text-xs text-brand-muted hover:text-white transition-colors duration-200">{link.l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
