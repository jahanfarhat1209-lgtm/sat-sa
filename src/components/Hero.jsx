import { BarChart3, Shield, Users, ArrowRight } from 'lucide-react'
import Dashboard from './Dashboard.jsx'

function Hero({ onNavigate }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="reveal visible">
          <p className="eyebrow">Supervisory Cybersecurity Platform</p>
          <h1 className="hero-heading">
            From Security Assessments to <span className="accent">Actionable Risk Intelligence.</span>
          </h1>
          <p className="hero-desc">
            SAT/SA helps NCIIPC supervisors analyse SOC alert and case-management
            data at scale — surfacing execution gaps and negative space that manual
            review alone struggles to reach across every Critical Sector Entity.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => onNavigate('lifecycle')}>
              Explore Platform <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => onNavigate('intelligence')}>
              View Architecture
            </button>
          </div>

          <div className="process-row">
            <div className="process-step">
              <div className="process-icon"><BarChart3 size={18} /></div>
              <span>Assess<br />Controls</span>
            </div>
            <span className="process-arrow">→</span>
            <div className="process-step">
              <div className="process-icon"><Shield size={18} /></div>
              <span>Manage<br />Risk</span>
            </div>
            <span className="process-arrow">→</span>
            <div className="process-step">
              <div className="process-icon"><Users size={18} /></div>
              <span>Enable Better<br />Decisions</span>
            </div>
          </div>
        </div>

        <Dashboard />
      </div>
    </section>
  )
}

export default Hero