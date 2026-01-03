import React, { useState } from 'react'
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
        <div className='container w-100'>
            <form onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className="form-control" id="exampleInputPassword1" placeholder="Password" />
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
    )
}

export default LogIn