import { Lock, ShieldCheck, FileText, Database, CheckCircle, Users } from 'lucide-react'

function SecurityFoundation() {
  const items = [
    { icon: <Lock size={20} />, label: 'Authentication & RBAC' },
    { icon: <ShieldCheck size={20} />, label: 'Secure APIs' },
    { icon: <FileText size={20} />, label: 'Audit Logging' },
    { icon: <Database size={20} />, label: 'Data Protection' },
    { icon: <CheckCircle size={20} />, label: 'Input Validation' },
    { icon: <Users size={20} />, label: 'Least Privilege' },
  ]

  return (
    <section className="section" id="foundation">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Built With Security at the Foundation</p>
          <h2>Designed for trust. Built for an air-gapped deployment.</h2>
        </div>

        <div className="foundation-grid reveal">
          {items.map((item) => (
            <div className="glass-card foundation-item" key={item.label}>
              <div className="role-icon">{item.icon}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecurityFoundation