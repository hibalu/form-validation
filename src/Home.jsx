import React from "react";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = ({ onLogout }) => {
    return (
        <>
        <div className="container-fluid w-100 ">
            {/* Navbar */}
          

            {/* Hero */}
            <header id="hero" className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bold">
                                Beautiful forms, effortless validation
                            </h1>
                            <p className="lead mt-3">
                                A small demo app showing a clean login and signup experience
                                with validation and a simple landing UI.
                            </p>
                            <div className="mt-4">
                                <button
                                    className="btn btn-light btn-lg me-2"
                                    onClick={() =>
                                        document
                                            .getElementById("features")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    Learn More
                                </button>
                                <button
                                    className="btn btn-outline-light btn-lg"
                                    onClick={() => alert("Profile coming soon")}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6 text-center mt-4 mt-md-0">
                            <div
                                className="bg-white rounded shadow p-4"
                                style={{ display: "inline-block" }}
                            >
                                <h5 className="mb-3">Your secure forms</h5>
                                <p className="mb-0 text-muted">
                                    Fast, accessible and validated inputs ready for production.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features */}
            <section id="features" className="py-5">
                <div className="container">
                    <h3 className="mb-4 text-center">Features</h3>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Client-side validation</h5>
                                    <p className="card-text text-muted">
                                        Live validation with helpful messages and accessible markup.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Responsive layout</h5>
                                    <p className="card-text text-muted">
                                        Mobile-first components that look great on any device.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Easy to extend</h5>
                                    <p className="card-text text-muted">
                                        Add backend integration or authentication providers quickly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h4 className="mb-3">Ready to try it out?</h4>
                    <p className="text-muted mb-4">
                        Create an account or log in to explore more features.
                    </p>
                    <div>
                        <button
                            className="btn btn-primary btn-lg me-2"
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        >
                            Back to top
                        </button>
                        <button
                            className="btn btn-outline-primary btn-lg"
                            onClick={() => alert("Sign up flow")}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
            </div>
        </>
    );
};

export default Home;
