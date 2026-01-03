import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="py-4 bg-white border-top">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <strong>MyApp</strong>
                    <div className="text-muted">© {new Date().getFullYear()} MyApp. All rights reserved.</div>
                </div>
                <div>
                    <a href="#" className="text-muted me-3">Privacy</a>
                    <a href="#" className="text-muted">Terms</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
