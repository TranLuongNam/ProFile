import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const Banner = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header-content">
                            <div className="header-section">
                                <ul className="header-ul">
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaGithub /></li>
                                </ul>
                                <h1>I am <b>LuongNamTran</b></h1>
                                <p>I'm <b>LuongNamTran</b> ,Professional web developer with long time experience in this field !</p>
                                <div className="header-button">
                                    <a href="/" className="btn btn-outline">My PortFilio</a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="/" className="btn-smart">
                                        <FaPlay className="play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-image">
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner;
