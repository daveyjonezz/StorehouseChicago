import React from "react";
import "./style.css";

const Nav = () => {
    return (
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="/"><span><img width="65" height="100%" alt="Nav Bar Logo" src="/images/TheStoreHouse_Branding/Logomark/PNG/NavBarLogo.png" /></span><span id="titleStore">The Storehouse</span>  | <span id="titleCity">CHICAGO</span></a>

                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse stroke w-100 order-2" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/stories">Stories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/donate">Donate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/merch">Merch</a>
                            </li>
                          
                            <li className="nav-item">
                                <a className="nav-link" href="usercart"><i className="fas fa-shopping-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Nav;
