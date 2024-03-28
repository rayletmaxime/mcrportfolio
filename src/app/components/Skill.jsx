/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import html from "../assets/svgs/html.svg";
import css from "../assets/svgs/css.svg";
import js from "../assets/svgs/javascript.svg";
import ts from "../assets/svgs/typescript.svg";
import react from "../assets/svgs/react.svg";
import ps from "../assets/svgs/photoshop.svg";
import ai from "../assets/svgs/illustrator.svg";
import figma from "../assets/svgs/figma.svg";
import tailwind from "../assets/svgs/tailwind.svg";
import mui from "../assets/svgs/mui.svg";
import next from "../assets/svgs/next.svg";
import mongo from "../assets/svgs/mongodb.svg";
import git from "../assets/svgs/git.svg";
import seo from "../assets/svgs/seo.svg";
import cms from "../assets/svgs/wordpress.svg";
import github from "../assets/svgs/github.svg";

export default function Skill() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="colorskill">
      <div className="skill" id="skill">
        <div className="skill-title">
          <h1>Compétences</h1>
          <p>
            Voici les compétences que j'ai acquises et celles sur lesquelles je
            travaille
          </p>
        </div>
        <div className="skill-list">
          <div className="skill-left">
            <div
              className="front-end"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Front-End</h2>
              <div className="skill-icons">
                <img src={html.src} alt="Logo HTML" width={40} height={40} />
                <img src={css.src} alt="Logo HTML" width={40} height={40} />
                <img src={js.src} alt="Logo HTML" width={40} height={40} />
                <img src={ts.src} alt="Logo HTML" width={40} height={40} />
              </div>
            </div>
            <div
              className="uxui"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>UX/UI Design</h2>
              <div className="skill-icons">
                <img src={ps.src} alt="" width={42} height={42} />
                <img src={ai.src} alt="" width={42} height={42} />
                <img src={figma.src} alt="" width={36} height={36} />
                <img src={mui.src} alt="" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="skill-right">
            <div
              className="back-end"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Frameworks & DB</h2>
              <div className="skill-icons">
                <img src={react.src} alt="" width={40} height={40} />
                <img src={tailwind.src} alt="" width={40} height={40} />
                <img src={next.src} alt="" width={40} height={40} />
                <img src={mongo.src} alt="" width={40} height={50} />
              </div>
            </div>
            <div
              className="tools"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Outils</h2>
              <div className="skill-icons">
                <img src={git.src} alt="" width={40} height={40} />
                <img src={seo.src} alt="" width={40} height={40} />
                <img src={cms.src} alt="" width={40} height={40} />
                <img src={github.src} alt="" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
