import React from "react";
import style from "./style.module.css";

const Footer = ({ darkTheme }) => {
  const year = new Date().getFullYear();
  return (
    <div className={`container ${darkTheme && style.darkTheme}`}>
      <footer>Copyright &copy; {year} Dinesh Legha. All rights reserved</footer>
    </div>
  );
};

export default Footer;
