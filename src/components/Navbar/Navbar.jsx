import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import style from "./style.module.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = (e) => {
    const element = document.getElementById(e.target.innerText);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container">
      <nav className={style.navbar}>
        <div className={style.logo}>
          <p>Dinesh</p>
        </div>
        <ul
          onClick={handleClick}
          className={
            toggleMenu
              ? `${style.navLinks} ${style.mobile} ${style.active}`
              : `${style.navLinks}`
          }
        >
          <li>About</li>
          <li>Education</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className={style.hamburger}>
          <RxHamburgerMenu
            className={style.hamburgerIcon}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
