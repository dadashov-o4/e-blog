import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="../public/assets/images//header/logo.svg" alt="" /></a>
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
                                <a className="nav-link active" aria-current="page" href="#">What we do</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active text-success" href="#">Career</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Blog</a>
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