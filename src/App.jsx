import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Challenge from './components/Challenge.jsx'
import Lifecycle from './components/Lifecycle.jsx'
import Roles from './components/Roles.jsx'
import RiskIntelligence from './components/RiskIntelligence.jsx'
import SecurityFoundation from './components/SecurityFoundation.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/Modal.jsx'

function App() {
  // Which modal is open right now: null, 'login', or 'request'
  const [activeModal, setActiveModal] = useState(null)

  // Smooth-scrolls to a section by its id, used by Navbar/Hero/CTA buttons
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // One global scroll-reveal watcher: any element with class "reveal"
  // gets class "visible" added once it enters the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar onNavigate={scrollToSection} onOpenModal={setActiveModal} />
      <Hero onNavigate={scrollToSection} />
      <Challenge />
      <Lifecycle />
      <Roles />
      <RiskIntelligence />
      <SecurityFoundation />
      <CTA onNavigate={scrollToSection} />
      <Footer onNavigate={scrollToSection} />

      {activeModal && (
        <Modal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}

export default App