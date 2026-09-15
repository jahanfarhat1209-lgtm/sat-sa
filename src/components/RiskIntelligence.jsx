import { TrendingUp } from 'lucide-react'

function RiskIntelligence() {
  const riskDist = [
    { label: 'Critical', value: 4, color: 'var(--red)' },
    { label: 'High', value: 12, color: 'var(--orange)' },
    { label: 'Medium', value: 18, color: '#ffd166' },
    { label: 'Low', value: 9, color: 'var(--green)' },
  ]
  const trendBars = [30, 45, 38, 55, 48, 65]
  const remediation = 72
  const compliance = 86

  return (
    <section className="section" id="intelligence">
      <div className="container">
        <div className="section-header reveal" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-end', gap: 12 }}>
          <div>
            <p className="eyebrow">Supervisory Risk Intelligence</p>
            <h2>Turn SOC data into actionable findings.</h2>
          </div>
          <button className="link-btn">Explore Dashboards →</button>
        </div>

        <div className="intel-grid reveal">
          <div className="glass-card intel-card">
            <h4>Supervisory Coverage</h4>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--green)' }}>+12%</div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>vs last assessment cycle</p>
          </div>

          <div className="glass-card intel-card">
            <h4>Risk Distribution</h4>
            <div className="legend">
              {riskDist.map((r) => (
                <div className="legend-row" key={r.label}>
                  <span className="dot" style={{ background: r.color }} />
                  {r.label} — {r.value}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card intel-card">
            <h4>Control Compliance</h4>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{compliance}%</div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Controls compliant</p>
          </div>

          <div className="glass-card intel-card">
            <h4>Finding Trends</h4>
            <svg width="100%" height="50" viewBox="0 0 180 50" preserveAspectRatio="none">
              <polyline
                points={trendBars.map((v, i) => `${(i / (trendBars.length - 1)) * 180},${50 - v * 0.6}`).join(' ')}
                fill="none"
                stroke="var(--cyan)"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="glass-card intel-card">
            <h4>Remediation Performance</h4>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 40 }}>
              {[40, 55, 35, 70, 60, 72].map((h, i) => (
                <div key={i} style={{ width: 10, height: `${h}%`, background: 'var(--blue)', borderRadius: 3 }} />
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 8 }}>
              <TrendingUp size={12} style={{ verticalAlign: 'middle' }} /> {remediation}% on track
            </p>
          </div>

          <div className="glass-card intel-card">
            <h4>Systemic Risk Map</h4>
            <svg width="100%" height="60" viewBox="0 0 200 60">
              <rect width="200" height="60" fill="none" />
              {[[20, 20], [60, 35], [100, 15], [140, 40], [170, 25]].map((p, i) => (
                <circle key={i} cx={p[0]} cy={p[1]} r={i === 1 || i === 3 ? 5 : 3} fill={i === 1 || i === 3 ? 'var(--red)' : 'var(--cyan)'} opacity="0.85" />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RiskIntelligence