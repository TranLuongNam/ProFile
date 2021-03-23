import React from 'react'

const Navs = () => {
    return (
        <nav className="navbar">
            <div className="container">
               <div className="navbar-container">
               <ul className="navbar-left">
                    <div className="navbar-left-logo">
                        <img src="./images/logo.png" alt=""/>
                    </div>
                </ul>
                <ul className="navbar-right">
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Services</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Skills</a></li>
                    <li><a href="/#">PortFilio</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contact</a></li>
                </ul>
               </div>
            </div>
        </nav>
    )
}

export default Navs;
