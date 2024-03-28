"use client";

import { useState, useEffect } from "react";

import Navbar from "./components//Navbar";
import Hero from "./components//Hero";
import About from "./components//About";
import Experience from "./components//Experience";
import Skill from "./components//Skill";
import Project from "./components//Project";
import Footer from "./components//Footer";
import Contact from "./components//Contact";

export default function Home() {
  const [theme, setTheme] = useState(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    localStorage.setItem("theme", preferredTheme);
    return preferredTheme;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () =>
      setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
