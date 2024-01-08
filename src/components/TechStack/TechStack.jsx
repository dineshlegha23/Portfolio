import React from "react";
import style from "./style.module.css";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const TechStack = ({ darkTheme }) => {
  return (
    <div className={`container ${darkTheme && style.darkTheme}`}>
      <section className={style.techStack} id="Skills">
        <p>Explore my</p>
        <span>Skills</span>
        <div className={style.techCards}>
          <div className={style.techCard}>
            <FaHtml5 />
            <span>HTML</span>
          </div>
          <div className={style.techCard}>
            <FaCss3Alt />
            <span>CSS</span>
          </div>
          <div className={style.techCard}>
            <IoLogoJavascript />
            <span>JS</span>
          </div>
          <div className={style.techCard}>
            <FaGitAlt />
            <span>Git</span>
          </div>
          <div className={style.techCard}>
            <SiTailwindcss />
            <span>Tailwind</span>
          </div>
          <div className={style.techCard}>
            <FaReact />
            <span>React</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
