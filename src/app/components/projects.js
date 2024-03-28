/* eslint-disable no-unused-vars */

import figma from "../assets/svgs/figma.svg";
import html from "../assets/svgs/html.svg";
import css from "../assets/svgs/css.svg";
import js from "../assets/svgs/javascript.svg";
import react from "../assets/svgs/react.svg";
import next from "../assets/svgs/next.svg";
import ps from "../assets/svgs/photoshop.svg";
import tailwind from "../assets/svgs/tailwind.svg";
import mailgun from "../assets/svgs/mailgun.svg";
import sass from "../assets/svgs/sass.svg";
import node from "../assets/svgs/nodejs.svg";
import postgre from "../assets/svgs/postgresql.svg";
import mongo from "../assets/svgs/mongodb.svg";
import python from "../assets/svgs/python.svg";
import git from "../assets/svgs/git.svg";
import seo from "../assets/svgs/seo.svg";
import cms from "../assets/svgs/wordpress.svg";
import github from "../assets/svgs/github.svg";
import mui from "../assets/svgs/mui.svg";

import imgproject1 from "../assets/projet1.webp";
import imgproject2 from "../assets/projet2.webp";
import imgproject3 from "../assets/projet3.webp";

export const projects = [
  {
    name: "MCRaylet",
    desc: "Site web pour ma Freelance. Fabriqué en 2022 avec un CMS et des fonctionnalités intégrées. Le design a été créé à l'aide de Figma pour les mockups et Photoshop et Illustrator pour la réalisation.",
    desc2:
      "SEO et référencement naturel avec un score de 98/100 dépassant les personnes implantées depuis des années sur le mot clé informatique en l'espace de quatre mois.",
    desc3:
      "Conceptualisé et réalisé en deux semaines en partant avec aucune connaissance des CMS avec un apprentissage en ligne en autodidacte.",
    languages: [figma, ps, cms, seo],
    image: [imgproject1],
    linkgit: "https://github.com/rayletmaxime",
    linklive: "https://www.mcraylet.com/",
  },
  {
    name: "Marie Ness",
    desc: "Portfolio d'un proche pour sa musique et ses compositions avec un lecteur de musique intégré, une section réseaux sociaux et plateformes de streaming ainsi qu'une newsletter fonctionnelle.",
    desc2:
      "Le design et les mock-ups ont été réalisés sur Figma et la suite Adobe Illustrator et Photoshop. Ainsi que Headless et Material UI pour les icones.",
    desc3:
      "Portfolio d'une musicienne démontrant ses actualités, sa musique et ses propres compositions. Construit avec React et Tailwind CSS hébergé pour le moment sur Vercel.",
    languages: [react, tailwind, js, mui],
    image: [imgproject2],
    linkgit: "https://github.com/rayletmaxime/marie-ness",
    linklive: "https://marie-ness.vercel.app/",
  },
  {
    name: "Portfolio",
    desc: "Portfolio personnel développé avec Next.js et Tailwind CSS hébergé sur Vercel. J'ai fait l'utilisation de plusieurs librairies externes pour gérer les animations ainsi que le côté graphique.",
    desc2:
      "Cette page web décrit mes compétences techniques et personnelles sur le plan de la programmation et du design. Il y a aussi une brève introduction sur qui je suis et comment je suis arrivé ici !",
    desc3:
      "Il inclut la présentation de mes meilleurs projets actuels et est mis à jour le plus souvent possible dès que je me lance dans une nouvelle aventure.",
    languages: [next, tailwind, react, mailgun],
    image: [imgproject3],
    linkgit: "https://github.com/rayletmaxime/mcrportfolio",
    linklive: "https://mcrportfolio.vercel.app/",
  },
];
