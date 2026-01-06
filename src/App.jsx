import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Form from './form'
import LogIn from './LogIn'
import Home from './Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AuthLayout({ children }) {
  return (
    <>
      <div style={{ height: 70 }} />
      <div className="card mx-auto my-5 shadow" style={{ maxWidth: 900 }}>
        <div className="card-body">
          {children}
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="container-fluid w-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AuthLayout><LogIn /></AuthLayout>} />
          <Route path="/login" element={<AuthLayout><LogIn /></AuthLayout>} />
          <Route path="/signup" element={<AuthLayout><Form /></AuthLayout>} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<AuthLayout><LogIn /></AuthLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
