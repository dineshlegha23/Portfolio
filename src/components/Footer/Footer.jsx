import React from "react";
import style from "./style.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <footer>Copyright &copy; {year} Dinesh Legha. All rights reserved</footer>
    </div>
  );
};

export default Footer;
