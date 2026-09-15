import { ArrowRight } from 'lucide-react'

function CTA({ onNavigate }) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>BUILD A CLEARER PICTURE OF SUPERVISORY SECURITY</h2>
        <p>Join SAT/SA and turn manual SOC review into measurable supervisory impact.</p>
        <button className="btn btn-primary" onClick={() => onNavigate('hero')}>
          Explore SAT/SA <ArrowRight size={16} />
        </button>
      </div>
    </section>
  )
}

export default CTA