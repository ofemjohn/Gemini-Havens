import { Phone } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/gemini-havens-logo.jpg'
import { navigation } from '../data/siteContent.js'
import ClosingCta from './ClosingCta.jsx'

function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <NavLink className="brandmark" to="/" aria-label="Gemini Havens home">
          <img src={logo} alt="Gemini Havens logo" />
          <div>
            <span>Gemini Havens</span>
            <strong>Sober Living</strong>
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

        <a className="call-chip" href="tel:4046927070">
          <Phone size={16} />
          <span>404 692 7070</span>
        </a>
      </header>

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
