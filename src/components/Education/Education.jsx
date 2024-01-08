import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import style from "./style.module.css";

const Education = ({ darkTheme }) => {
  return (
    <div className={`container ${darkTheme && style.darkTheme}`}>
      <div className={style.education} id="Education">
        <p>See my</p>
        <span>Education</span>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.icon}>
            <FaUserGraduate />
          </div>
          <span>Post Graduate</span>
          <p>M C A</p>
        </div>
        <div className={style.card}>
          <div className={style.icon}>
            <GiGraduateCap />
          </div>
          <span>Graduate</span>
          <p>B C A</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
