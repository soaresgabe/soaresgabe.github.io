import React from "react";
import Avatar from "./Avatar";
import NavBar from "../nav/NavBar";
import HeaderSocials from "../socials/HeaderSocials";
import './header.css'
import Bubbles from "../bubbles/Bubbles";

function Header() {
  return <header className="top-container">

    <Bubbles/>
    <div className="head" id="home">
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