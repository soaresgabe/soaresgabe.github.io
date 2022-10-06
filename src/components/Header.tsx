import React from "react";
import Avatar from "./Avatar";
import HeaderSocials from "./HeaderSocials";
import './header.css'

function Header({}) {
  return <header className="top-container">

    <div className="head">
      <h1 className="msg">Hello, I'm</h1>
      <h1 className="name">Gabe Soares</h1>
      <h1 className="title">Fullstack Developer</h1>
    </div>

    <Avatar />

    <HeaderSocials />

  </header>;
}

export default Header;