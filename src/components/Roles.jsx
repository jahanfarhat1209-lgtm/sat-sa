import { Landmark, Shield, FileCheck, Wrench, Users } from 'lucide-react'

function Roles() {
  const roles = [
    { icon: <Landmark size={20} />, title: 'Supervisory Authority', desc: 'Oversee entities and identify systemic risks' },
    { icon: <Shield size={20} />, title: 'NCIIPC Examiner', desc: 'Review alert and case samples for findings' },
    { icon: <FileCheck size={20} />, title: 'Assessor', desc: 'Conduct assessments and validate evidence' },
    { icon: <Wrench size={20} />, title: 'CSE / SOC Lead', desc: 'Track and remediate identified gaps' },
    { icon: <Users size={20} />, title: 'Management', desc: 'View executive-level supervisory findings' },
  ]

  return (
    <section className="section" id="roles">
      <div className="container">
        <div className="roles-head reveal">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <p className="eyebrow">One Platform. Different Supervisory Perspectives.</p>
            <h2>Role-based access for every stakeholder.</h2>
          </div>
          <button className="link-btn">View All Roles →</button>
        </div>

        <div className="roles-grid reveal" style={{ marginTop: 48 }}>
          {roles.map((role) => (
            <div className="glass-card role-card" key={role.title}>
              <div className="role-icon">{role.icon}</div>
              <h4>{role.title}</h4>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roles