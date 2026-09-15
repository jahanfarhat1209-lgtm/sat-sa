import {
  FileSearch, FolderOpen, AlertOctagon, LineChart,
  UserCheck, CheckCircle2, FileBarChart, Eye,
} from 'lucide-react'

function Lifecycle() {
  const stages = [
    { icon: <FileSearch size={22} />, title: 'Assess', desc: 'Evaluate security controls' },
    { icon: <FolderOpen size={22} />, title: 'Collect Evidence', desc: 'Gather and validate evidence' },
    { icon: <AlertOctagon size={22} />, title: 'Identify Findings', desc: 'Detect control weaknesses' },
    { icon: <LineChart size={22} />, title: 'Analyze Risk', desc: 'Prioritize organizational risk' },
    { icon: <UserCheck size={22} />, title: 'Assign Remediation', desc: 'Assign to owners and track progress' },
    { icon: <CheckCircle2 size={22} />, title: 'Verify', desc: 'Validate fixes' },
    { icon: <FileBarChart size={22} />, title: 'Report', desc: 'Generate insights and reports' },
    { icon: <Eye size={22} />, title: 'Supervise', desc: 'Compare posture and identify systemic risks' },
  ]

  return (
    <section className="section" id="lifecycle">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">One Continuous Security Lifecycle</p>
          <h2>From Assessment to Impact</h2>
        </div>

        <div className="lifecycle-row reveal">
          {stages.map((stage, i) => (
            <div style={{ display: 'flex', alignItems: 'flex-start' }} key={stage.title}>
              <div className="lifecycle-step">
                <div className="lifecycle-icon">{stage.icon}</div>
                <h4>{stage.title}</h4>
                <p>{stage.desc}</p>
              </div>
              {i < stages.length - 1 && <div className="lifecycle-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Lifecycle