import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Form from './form'
import LogIn from './LogIn'
import Home from './Home'
import { useState } from 'react'

function App() {
  const [view, setView] = useState('login')

  return (
    
        <div className="container-fluid w-100">
          <div className="card w-50 mx-auto my-5 shadow">
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
