import { useEffect, useState } from 'react'
import { Shield, Menu, X } from 'lucide-react'

function Navbar({ onNavigate, onOpenModal }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add a slightly darker background once the page is scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Platform', id: 'hero' },
    { label: 'Features', id: 'intelligence' },
    { label: 'Architecture', id: 'lifecycle' },
    { label: 'About', id: 'foundation' },
  ]

  const handleNav = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="brand">
          <div className="brand-icon">
            <Shield size={20} color="#020b16" />
          </div>
          <div className="brand-text">
            <h1>SAT/SA</h1>
            <p>Supervisory Assessment &amp; Analytics</p>
          </div>
        </div>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <button onClick={() => handleNav(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn btn-outline btn-small" onClick={() => onOpenModal('login')}>
            Login
          </button>
          <button className="btn btn-primary btn-small" onClick={() => onOpenModal('request')}>
            Request Access
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <button key={link.id} onClick={() => handleNav(link.id)}>
            {link.label}
          </button>
        ))}
        <button onClick={() => { onOpenModal('login'); setMenuOpen(false) }}>Login</button>
        <button onClick={() => { onOpenModal('request'); setMenuOpen(false) }}>Request Access</button>
      </div>
    </nav>
  )
}

export default Navbar