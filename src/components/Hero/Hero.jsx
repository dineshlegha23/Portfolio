import React from "react";
import Typewriter from "typewriter-effect";
import resume from "../../assets/Resume.pdf";
import hero from "../../assets/hero.png";
import style from "./style.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = ({ darkTheme }) => {
  const handleClick = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView();
  };
  return (
    <div className="container">
      <div className={`${style.hero} ${darkTheme && `${style.darkTheme}`}`}>
        <div className={style.image}>
          <img src={hero} alt="profile pic" />
        </div>
        <div className={style.intro}>
          <p>Hello, I'm</p>
          <h1>Dinesh Legha</h1>

          <Typewriter
            className={style.typewriter}
            options={{
              strings: ["Frontend Developer", "React Developer"],
              autoStart: true,
              loop: true,
              deleteSpeed: 5,
            }}
          />

          <div className={style.buttons}>
            <a
              href={resume}
              download="Resume Dinesh"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className={style.downloadCVBtn}>
                Download CV
              </button>
            </a>
            <button
              type="button"
              className={style.contactBtn}
              onClick={handleClick}
            >
              Contact Info
            </button>
          </div>
          <div className={style.socialLinks}>
            <FaGithub
              className={style.github}
              onClick={() =>
                (window.location.href = "https://www.github.com/dineshlegha23")
              }
            />
            <FaLinkedin
              className={style.linkedIn}
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/dinesh-legha-0a14461a1")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
