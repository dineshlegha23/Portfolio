import React from "react";
import comfySloth from "../../assets/comfy-sloth.png";
import movix from "../../assets/movix.png";
import postal from "../../assets/postal.png";
import style from "./style.module.css";

const Projects = () => {
  return (
    <div className="container">
      <div className={style.projects} id="Projects">
        <p>Browse my</p>
        <span>Projects</span>
        <div className={style.projectCards}>
          <div className={style.projectCard}>
            <div className={style.projectImage}>
              <img src={comfySloth} alt="comfy sloth project" />
            </div>
            <span>Comfy Sloth Store</span>
            <p>
              This is a shopping website named Comfy Sloth. You can find a
              variety of products here. You can also filter the products based
              on their color, price range, shipping fee, company. Multiple
              filters can be used.
            </p>
            <div className={style.projectTechStack}>
              <p>
                Tech Used : <span>React, Styled Components, Auth0</span>
              </p>
            </div>
            <div className={style.buttons}>
              <button
                type="button"
                className={style.projectBtn}
                onClick={() =>
                  (window.location.href =
                    "https://www.github.com/dineshlegha23/Comfy-Sloth")
                }
              >
                Github
              </button>
              <button
                type="button"
                className={style.projectBtn}
                onClick={() =>
                  (window.location.href =
                    "https://comfy-sloth-website.netlify.app/")
                }
              >
                Live Demo
              </button>
            </div>
          </div>

          <div className={style.projectCard}>
            <div className={style.projectImage}>
              <img src={movix} alt="comfy sloth project" />
            </div>
            <span>Movix</span>
            <p>
              Everyone watch movies. But deciding which movie or web series to
              watch is a pain. This website helps you in searching movies or web
              series based on their cast, directors, genre, released date.
            </p>
            <div className={style.projectTechStack}>
              <p>
                Tech Used : <span>React, SASS</span>
              </p>
            </div>
            <div className={style.buttons}>
              <button
                type="button"
                className={style.projectBtn}
                onClick={() =>
                  (window.location.href =
                    "https://github.com/dineshlegha23/Movix")
                }
              >
                Github
              </button>
              <button
                type="button"
                className={style.projectBtn}
                onClick={() =>
                  (window.location.href = "https://movix-website.netlify.app/")
                }
              >
                Live Demo
              </button>
            </div>
          </div>

          <div className={style.projectCard}>
            <div className={style.projectImage}>
              <img src={postal} alt="comfy sloth project" />
            </div>
            <span>Postal Information Finder</span>
            <p>
              In this website, you can find the postal information based on the
              provided zipcode. It will show the country and cities also.
            </p>
            <div className={style.projectTechStack}>
              <p>
                Tech Used : <span>React, React-Loader</span>
              </p>
            </div>
            <div className={style.buttons}>
              <button
                type="button"
                className={style.projectBtn}
                onClick={() =>
                  (window.location.href =
                    "https://github.com/dineshlegha23/Postal-Information-Finder")
                }
              >
                Github
              </button>
              <button
                type="button"
                className={style.projectBtn}
                onClick={() =>
                  (window.location.href =
                    "https://postal-information-finder.netlify.app/")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
