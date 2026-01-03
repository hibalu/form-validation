import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Form from './form'
import LogIn from './LogIn'
import Home from './Home'
import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [view, setView] = useState('login')

  return (

    <div className="container-fluid w-100">
      <Navbar onLogout={() => setView('login')} />
      <div style={{ height: 70 }} />
      <div className={`card mx-auto my-5 shadow ${view === 'home' ? 'w-100 border-0 bg-transparent' : ''}`} style={view === 'home' ? { maxWidth: 'none' } : { maxWidth: 900 }}>
        <div className="card-body">
          {view === 'login' && <LogIn onSwitch={(v) => setView(v)} />}
          {view === 'signup' && <Form onSwitch={(v) => setView(v)} />}
          {view === 'home' && <Home onLogout={() => setView('login')} />}
        </div>
      </div>

    </div>

  )
}

export default App
