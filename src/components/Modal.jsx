import { X } from 'lucide-react'

function Modal({ type, onClose }) {
  const isLogin = type === 'login'

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(isLogin ? 'Login submitted (demo only).' : 'Access request submitted (demo only).')
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>{isLogin ? 'Log In' : 'Request Access'}</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>
        <p>{isLogin ? 'Sign in to your supervisory workspace.' : 'Tell us about your organization to request access.'}</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={isLogin ? 'Username' : 'Full Name'} required />
          <input type="email" placeholder="Email Address" required />
          {!isLogin && <input type="text" placeholder="Organization" required />}
          {isLogin && <input type="password" placeholder="Password" required />}

          <div className="modal-actions">
            <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              {isLogin ? 'Log In' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal