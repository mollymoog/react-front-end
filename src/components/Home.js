import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../codepix.png';

const Home = () => {

    return (
        <div>
            <div className="row section">
                <div className="center-align">
                <img src={logo} alt="logo"/>
                </div>
            </div>
        <div className="row section">
            <div className="center-align">
            <a className="teal accent btn-large">
                <Link to="/game" className="white-text">Play Now</Link>
            </a>
            </div>
        </div>
        </div>
    )
}

export default Home