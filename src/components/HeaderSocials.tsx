import React from "react";
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function HeaderSocials() {
    return (
        <div className="header-socials">
            <a href="https://github.com/soaresgabe" target="_blank"><FaGithub className="icon"/></a>
            <a href="https://www.linkedin.com/in/gabriel-soares-a27998101/" target="_blank"><BsLinkedin className="icon"/></a>
            <a href="https://www.instagram.com/soaresgabe/" target="_blank"><BsInstagram className="icon"/></a>
        </div>
    )
}

export default HeaderSocials;