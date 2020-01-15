import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = (props) => {
    return ( 
        <div className="footer">
            <div className="icon-list">
                <a href="https://www.facebook.com/nmagera07" target="_blank" rel="noopener noreferrer"><FaFacebook size="25px"/></a>
                <a href="https://twitter.com/natemagera" target="_blank" rel="noopener noreferrer"><FaTwitter size="25px"/></a>
                <a href="https://github.com/nmagera07" target="_blank" rel="noopener noreferrer"><FaGithub size="25px"/></a>
                <a href="https://www.facebook.com/nmagera07" target="_blank" rel="noopener noreferrer"><MdEmail size="25px"/></a>
            </div>
        </div>

     );
}
 
export default Footer;