import linkedin from "../assets/svgs/linkedin.svg";
import github from "../assets/svgs/github.svg";
import mcr from "../assets/max.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="colorhero">
      <div className="hero">
        <div className="hero-left">
          <h2>
            <span>👋</span> Développeur React Front-End
          </h2>
          <p>
            Bonjour, je suis Maxime Raylet. Développeur Front-End React UX/UI
            vivant en 📍 France.
          </p>
          <div className="hero-left-icons">
            <a href="https://www.linkedin.com/in/mcraylet/" target="_blank">
              <Image
                src={linkedin}
                alt="Logo LinkedIn"
                width={40}
                height={40}
              />
            </a>
            <a href="https://github.com/rayletmaxime" target="_blank">
              <Image src={github} alt="Logo GitHub" width={40} height={40} />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <Image
            src={mcr}
            alt="Photo de Maxime Raylet"
            width={400}
            height={400}
          />
          <div className="hero-right-btn">
            <button>
              <a href="/cv.pdf" download>
                <p>CV</p>
              </a>
            </button>
            <button>
              <a href="#contact">
                <p>Contact</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
