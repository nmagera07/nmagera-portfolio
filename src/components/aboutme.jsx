import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import logo from "../components/natepic.jpeg"

const AboutMe = (props) => {
    return ( 
        <div className="aboutme">
            <div className="picture">
            <img src={logo} alt="nate-magera"></img>
            </div>
            <h1>Nate Magera</h1>
            <div className="about-text">
            <p>Hello! I'm currently a Full Stack Development student at Lambda School.</p>
            <p>I can write applications in JavaScript, React and NodeJS. Also adept in libraries such as Redux and Express.</p>
            <p>If I'm not coding something, you'll probably find me watching a sport of some kind!</p>
            <div className="icon-list">
                <a href="https://www.facebook.com/nmagera07" target="_blank" rel="noopener noreferrer"><FaFacebook size="25px"/></a>
                <a href="https://twitter.com/natemagera" target="_blank" rel="noopener noreferrer"><FaTwitter size="25px"/></a>
                <a href="https://github.com/nmagera07" target="_blank" rel="noopener noreferrer"><FaGithub size="25px"/></a>
                <a href="mailto:nmagera07@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail size="25px"/></a>
            </div>
            </div>
            <hr></hr>
        </div>
     );
}
 
export default AboutMe;