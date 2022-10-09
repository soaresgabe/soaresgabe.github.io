import React from "react";
import Avatar from "./Avatar";
import NavBar from "../nav/NavBar";
import HeaderSocials from "../socials/HeaderSocials";
import './header.css'

function Header() {
  return <header className="top-container">

    <div className="head" id="#">
      <h1 className="msg">Hello, I'm</h1>
      <h1 className="name">Gabe Soares</h1>
      <h1 className="title">Fullstack Developer</h1>
    </div>

    <Avatar />
    <NavBar />
    <HeaderSocials />

  </header>;
}

export default Header;