import { Shield } from 'lucide-react'

function Footer({ onNavigate }) {
  const links = ['Platform', 'Features', 'Architecture', 'Security', 'Documentation', 'Contact']

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="brand">
            <div className="brand-icon">
              <Shield size={18} color="#020b16" />
            </div>
            <div className="brand-text">
              <h1 style={{ fontSize: 16 }}>SAT/SA</h1>
              <p>Supervisory Assessment &amp; Analytics</p>
            </div>
          </div>
          <ul className="footer-nav">
            {links.map((l) => (
              <li key={l}>
                <button onClick={() => onNavigate('hero')}>{l}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <span>Assessments · Evidence · Risk · Remediation · Analytics</span>
          <span>© 2026 SAT/SA. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer