import { FileText, Folder, AlertTriangle, BarChart3, Link2 } from 'lucide-react'

function Challenge() {
  const items = [
    { icon: <FileText size={20} />, label: 'Alerts' },
    { icon: <Folder size={20} />, label: 'Cases' },
    { icon: <AlertTriangle size={20} />, label: 'Findings' },
    { icon: <BarChart3 size={20} />, label: 'Risk' },
  ]

  return (
    <section className="section" id="challenge">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">The Challenge</p>
          <h2>SOC data is scattered.<br />Supervisory judgement shouldn't be.</h2>
          <p>
            Alert metadata, case records, escalation logs and closure data often
            live in disconnected systems — making it slow and inconsistent to
            manually review evidence at scale across a growing number of entities.
          </p>
        </div>

        <div className="challenge-flow reveal">
          {items.map((item, i) => (
            <div className="flow-item-group" key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="glass-card flow-card">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {i < items.length - 1 && <span className="flow-arrow">→</span>}
            </div>
          ))}
        </div>

        <div className="glass-card challenge-summary reveal">
          <Link2 size={18} color="var(--cyan)" />
          SAT/SA connects alert and case data into one structured supervisory analytics lifecycle.
        </div>
      </div>
    </section>
  )
}

export default Challenge