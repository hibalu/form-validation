import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm" style={{ zIndex: 1030 }}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">MyApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home#hero">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home#features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home#contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-secondary me-2" onClick={() => navigate('/login')}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
