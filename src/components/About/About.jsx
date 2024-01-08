import React from "react";
import style from "./style.module.css";

const About = ({ darkTheme }) => {
  return (
    <div className={`container ${darkTheme && style.darkTheme}`}>
      <section className={style.center} id="About">
        <p>Know more</p>
        <span className={style.aboutMe}>About Me</span>
      </section>
      <div className={style.aboutDesc}>
        <div className={style.image}>
          <img
            src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1704631068~exp=1704631668~hmac=6cac47eb010c789ecaf977b72ba8ddde79bf0be6011fb3f72fd23b17071cec8c"
            alt="my image"
          />
        </div>
        <p>
          Hi, I'm Dinesh, a React developer with knowledge of building web
          applications using React and other modern technologies. I'm passionate
          about creating fast, responsive, and user-friendly websites that solve
          real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;
