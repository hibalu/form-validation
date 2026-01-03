import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Form from './form'
import LogIn from './LogIn'
import Home from './Home'
import { useState } from 'react'

function App() {
  const [view, setView] = useState('login')

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-sm w-100" style={{ maxWidth: 900 }}>
        <div className="card-header d-flex justify-content-between align-items-center p-2">
          <div className="btn-group" role="group" aria-label="Auth toggle">
            {view !== 'home' && (
              <>
                <button type="button" className={`btn btn-link ${view === 'login' ? 'fw-bold' : ''}`} onClick={() => setView('login')}>Login</button>
                <button type="button" className={`btn btn-link ${view === 'signup' ? 'fw-bold' : ''}`} onClick={() => setView('signup')}>Sign Up</button>
              </>
            )}
          </div>
          {/* {view === 'home' && (
            <div>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setView('login')}>Logout</button>
            </div>
          )} */}
        </div>
        <div className="card-body w-100">
          {view === 'login' && <LogIn onSwitch={(v) => setView(v)} />}
          {view === 'signup' && <Form onSwitch={(v) => setView(v)} />}
          {view === 'home' && <Home onLogout={() => setView('login')} />}
        </div>
      </div>
    </div>
  )
}

export default App
