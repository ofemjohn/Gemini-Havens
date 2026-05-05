import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/gemini-havens-logo.jpg'
import { navigation } from '../data/siteContent.js'
import ClosingCta from './ClosingCta.jsx'

function SiteLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="topbar">
        <NavLink className="brandmark" to="/" aria-label="Gemini Havens home">
          <img src={logo} alt="Gemini Havens logo" />
          <div className="brand-text-container">
            <strong className="brand-title">Gemini Havens</strong>
            <span className="brand-tagline">A fresh start. A stronger you. A better tomorrow.</span>
          </div>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active-link' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="call-chip" href="tel:4046927070">
            <Phone size={16} />
            <span className="call-chip-text">404 692 7070</span>
          </a>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} color="var(--navy-900)" /> : <Menu size={26} color="var(--navy-900)" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-nav-content">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active-link mobile-link' : 'mobile-link')}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main>
        <Outlet />
        <ClosingCta />
      </main>

      <footer className="site-footer">
        <div>
          <p>Gemini Havens Sober Living</p>
          <span>A fresh start. A stronger you. A better tomorrow.</span>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </footer>
    </div>
  )
}

export default SiteLayout
