import { useState, useEffect } from "react";

import linkedin from "../assets/svgs/linkedin.svg";
import github from "../assets/svgs/github.svg";

const year = new Date().getFullYear();

export default function Footer() {
  const [middleText, setMiddleText] = useState("Tous droits réservés ©");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setMiddleText(""); //
      } else {
        setMiddleText("by Maxime (mcr) Raylet");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="colorfooter">
      <div className="footer" id="footer">
        <div className="footer-left">
          <a href="">
            <img src="../favicon.ico" alt="Logo mcr" height={45} width={45} />
          </a>
        </div>
        <div className="footer-middle">
          <p>
            Droits réservés © {year} {middleText}
          </p>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/mcraylet/" target="_blank">
            <img src={linkedin.src} alt="Logo LinkedIn" width={35} />
          </a>
          <a href="https://github.com/gitmcr" target="_blank">
            <img src={github.src} alt="Logo GitHub" width={35} />
          </a>
        </div>
      </div>
    </div>
  );
}
