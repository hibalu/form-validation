import React, { useState } from 'react'
import './form.css'

const Form = () => {
  const [values, setValues] = useState({ username: '', email: '', phone: '', gender: '', password: '', confirmPassword: '' })
  const [touched, setTouched] = useState({ username: false, email: false, phone: false, gender: false, password: false, confirmPassword: false })
  const [submitted, setSubmitted] = useState(false)

  const validate = (vals: { username: string; email: string; phone: string; gender: string; password: string; confirmPassword: string }) => {
    const errors: { [key: string]: string } = {}
    if (!vals.username.trim()) errors.username = 'Username is required'
    if (!vals.email.trim()) errors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) errors.email = 'Email is invalid'
    if (!vals.phone.trim()) errors.phone = 'Phone is required'
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(vals.phone)) errors.phone = 'Phone number is invalid'
    if (!vals.gender) errors.gender = 'Please select a gender'
    if (!vals.password) errors.password = 'Password is required'
    else if (vals.password.length < 6) errors.password = 'Password must be at least 6 characters'
    if (!vals.confirmPassword) errors.confirmPassword = 'Please confirm your password'
    else if (vals.password !== vals.confirmPassword) errors.confirmPassword = 'Passwords do not match'
    return errors
  }

  const errors = validate(values)
  const isFormValid = Object.keys(errors).length === 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setValues(prev => ({ ...prev, [id]: value }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id } = e.target
    setTouched(prev => ({ ...prev, [id]: true }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ username: true, email: true, phone: true, gender: true, password: true, confirmPassword: true })
    setSubmitted(true)
    const errs = validate(values)
    if (Object.keys(errs).length === 0) {
      // success action
      alert('Registration successful!')
      setValues({ username: '', email: '', phone: '', gender: '', password: '', confirmPassword: '' })
      setTouched({ username: false, email: false, phone: false, gender: false, password: false, confirmPassword: false })
      setSubmitted(false)
    }
  }

  return (
    <div className="container w-50 mt-5">
        
      <form className="form" noValidate onSubmit={handleSubmit}>
       
        <div className="form-control d-flex flex-column gap-3 p-4 border border-2 rounded">
             <h2>Registration Form</h2>
          <div className="input-group equal-row">
            <div className="float-group w-100">
              <input
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder=" "
                className={`form-control rounded ${values.username ? 'has-value' : ''} ${touched.username && errors.username ? 'is-invalid' : touched.username && !errors.username ? 'is-valid' : ''}`}
                aria-describedby="usernameHelp"
              />
              <label htmlFor="username" className="float-label">Username</label>
              { (touched.username || submitted) && errors.username && <div className="invalid-feedback d-block">{errors.username}</div> }
            </div>
          </div>

          <div className="input-group equal-row">
            <div className="float-group w-100">
              <input
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder=" "
                className={`form-control rounded ${values.email ? 'has-value' : ''} ${touched.email && errors.email ? 'is-invalid' : touched.email && !errors.email ? 'is-valid' : ''}`}
                aria-describedby="emailHelp"
              />
              <label htmlFor="email" className="float-label">Email</label>
              { (touched.email || submitted) && errors.email && <div className="invalid-feedback d-block">{errors.email}</div> }
            </div>
          </div>

          <div className="input-group equal-row">
            <div className="float-group w-100">
              <input
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
                placeholder=" "
                className={`form-control rounded ${values.phone ? 'has-value' : ''} ${touched.phone && errors.phone ? 'is-invalid' : touched.phone && !errors.phone ? 'is-valid' : ''}`}
                aria-describedby="phoneHelp"
              />
              <label htmlFor="phone" className="float-label">Phone</label>
              { (touched.phone || submitted) && errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div> }
            </div>
          </div>

          <div className="input-group equal-row">
            <div className="float-group w-100">
              <select
                id="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-select rounded ${values.gender ? 'has-value' : ''} ${touched.gender && errors.gender ? 'is-invalid' : touched.gender && !errors.gender ? 'is-valid' : ''}`}
                aria-describedby="genderHelp"
              >
                <option value="" disabled hidden></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender" className="float-label">Gender</label>
              { (touched.gender || submitted) && errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div> }
            </div>
          </div>

          <div className="input-group equal-row">
            <div className="float-group w-100">
              <input
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder=" "
                className={`form-control rounded ${values.password ? 'has-value' : ''} ${touched.password && errors.password ? 'is-invalid' : touched.password && !errors.password ? 'is-valid' : ''}`}
                aria-describedby="passwordHelp"
              />
              <label htmlFor="password" className="float-label">Password</label>
              { (touched.password || submitted) && errors.password && <div className="invalid-feedback d-block">{errors.password}</div> }
            </div>
          </div>

          <div className="input-group equal-row">
            <div className="float-group w-100">
              <input
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder=" "
                className={`form-control rounded ${values.confirmPassword ? 'has-value' : ''} ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : touched.confirmPassword && !errors.confirmPassword ? 'is-valid' : ''}`}
                aria-describedby="confirmPasswordHelp"
              />
              <label htmlFor="confirmPassword" className="float-label">Confirm Password</label>
              { (touched.confirmPassword || submitted) && errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div> }
            </div>
          </div>

          <button type="submit" className={`btn btn-primary mt-3 ${!isFormValid ? 'disabled' : ''}`} disabled={!isFormValid} aria-disabled={!isFormValid}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Form