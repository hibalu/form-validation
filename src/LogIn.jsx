import React, { useState } from 'react'
import './form.css'
const LogIn = ({ onSwitch }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const validateEmail = (em) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email')
            return
        }
        setError('')

        onSwitch && onSwitch('home')
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-6 col-lg-5 mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group float-group">
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className={"form-control" + (email ? ' has-value' : '')} id="email" aria-describedby="emailHelp" placeholder=" " />
                            <label className="float-label" htmlFor="email">Email address</label>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group float-group">
                            <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className={"form-control" + (password ? ' has-value' : '')} id="password" placeholder=" " />
                            <label className="float-label" htmlFor="password">Password</label>
                        </div>
                        {error && <div className="text-danger mb-2">{error}</div>}
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="showPassword" checked={showPassword} onChange={e => setShowPassword(e.target.checked)} />
                            <label className="form-check-label" htmlFor="showPassword">Show password</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <div className="mt-3"><small>Don't have an account? <button type="button" className="btn btn-link p-0" onClick={() => onSwitch && onSwitch('signup')}>Sign up</button></small></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn