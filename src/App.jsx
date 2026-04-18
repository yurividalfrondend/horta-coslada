import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { Home, Company, ProjectsIndex, ProjectCategory, NewsPage, Contact, CareersPage, NotFound } from './pages/Pages'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route path="/projects/:category" element={<ProjectCategory />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
