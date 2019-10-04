import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const NavBar = (props) => {
    return ( 
        <div className="navbar">
            <h1>Nate Magera</h1>
            <div className="intro">
            <p>Hello! I'm currently a Full Stack Development student at Lambda School.</p>
            <p>I can write full stack applications in JavaScript, React and NodeJS!</p>
            <p>If I'm not coding something, you'll probably find me watching a sport of some kind!</p>
            </div>
            <div className="icon-list">
                <a href="https://www.facebook.com/nmagera07" target="_blank"><FaFacebook size="25px"/></a>
                <a href="https://twitter.com/natemagera" target="_blank"><FaTwitter size="25px"/></a>
                <a href="https://github.com/nmagera07" target="_blank"><FaGithub size="25px"/></a>
                <a href="https://www.facebook.com/nmagera07" target="_blank"><MdEmail size="25px"/></a>
            </div>
            <hr></hr>
        </div>
     );
}
 
export default NavBar;