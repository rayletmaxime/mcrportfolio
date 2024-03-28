"use client";

import { useState } from "react";

import Navbar from "./components//Navbar";
import Hero from "./components//Hero";
import About from "./components//About";
import Experience from "./components//Experience";
import Skill from "./components//Skill";
import Project from "./components//Project";
import Footer from "./components//Footer";
import Contact from "./components//Contact";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useState("dark");

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
