import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import style from "./style.module.css";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = (e) => {
    const element = document.getElementById(e.target.innerText);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container">
      <nav
        className={
          darkTheme ? `${style.navbar} ${style.darkTheme}` : `${style.navbar}`
        }
      >
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
        <i onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? <FiSun /> : <IoMoon />}
        </i>
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
