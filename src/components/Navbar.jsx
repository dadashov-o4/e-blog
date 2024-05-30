import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
// named import 

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="../public/assets/images//header/logo.svg" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item mx-4">
                                <a className="nav-link active" aria-current="page" href="#"><img src="../public/assets/images/header/ukraine.svg" alt="" /></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item mx-4">
                                <Link className="nav-link active" aria-current="page" to="/whatwedo">What we do</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link active text-success" to="/career">Career</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link active fw-bold" aria-current="page" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <img className='halqa' src="/assets/images/header/balacaYashilHalqa.svg" alt="" />

                </div>
            </nav>
        </>
    )
}

export default Navbar