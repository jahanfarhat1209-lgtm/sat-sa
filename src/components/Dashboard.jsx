import { useEffect, useState } from 'react'
import { AlertTriangle, FileText, ShieldCheck, TrendingDown } from 'lucide-react'

// Small helper: animates a number counting up from 0 to `end`
function useCountUp(end, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration])
  return value
}

function Dashboard() {
  const posture = useCountUp(82)
  const compliance = useCountUp(86)

  // Donut chart math: circumference of a circle with r=52
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (posture / 100) * circumference

  const linePoints = [10, 22, 18, 30, 26, 38, 34]
  const maxLine = Math.max(...linePoints)
  const lineCoords = linePoints
    .map((v, i) => `${(i / (linePoints.length - 1)) * 220},${50 - (v / maxLine) * 45}`)
    .join(' ')

  const severity = [
    { label: 'Critical', value: 4, color: 'var(--red)' },
    { label: 'High', value: 12, color: 'var(--orange)' },
    { label: 'Medium', value: 18, color: '#ffd166' },
    { label: 'Low', value: 9, color: 'var(--green)' },
  ]

  return (
    <div className="glass-card dashboard-card reveal">
      <p className="dashboard-title">Overall Security Posture</p>

      <div className="dashboard-top">
        <div className="donut-wrap">
          <svg width="130" height="130">
            <circle cx="65" cy="65" r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" />
            <circle
              cx="65"
              cy="65"
              r={radius}
              stroke="url(#postureGradient)"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
            <defs>
              <linearGradient id="postureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d97e" />
                <stop offset="100%" stopColor="#00d9ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="donut-center">
            <div className="big">{posture}%</div>
            <div className="small">Good</div>
          </div>
        </div>

        <div className="stat-list">
          <div className="stat-row">
            <AlertTriangle size={16} color="var(--red)" />
            <span className="num">4</span>
            <span className="label">Critical Risks</span>
          </div>
          <div className="stat-row">
            <FileText size={16} color="var(--cyan)" />
            <span className="num">27</span>
            <span className="label">Open Findings</span>
          </div>
          <div className="stat-row">
            <ShieldCheck size={16} color="var(--green)" />
            <span className="num">{compliance}%</span>
            <span className="label">Controls Compliant</span>
          </div>
          <div className="stat-row">
            <TrendingDown size={16} color="var(--green)" />
            <span className="num">12%</span>
            <span className="label">Risk Trend (6mo)</span>
          </div>
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="mini-card">
          <h4>Security Posture Trend</h4>
          <svg width="100%" height="50" viewBox="0 0 220 50" preserveAspectRatio="none">
            <polyline points={lineCoords} fill="none" stroke="var(--cyan)" strokeWidth="2" />
          </svg>
        </div>

        <div className="mini-card">
          <h4>Findings by Severity</h4>
          <div className="legend">
            {severity.map((s) => (
              <div className="legend-row" key={s.label}>
                <span className="dot" style={{ background: s.color }} />
                {s.label} — {s.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard