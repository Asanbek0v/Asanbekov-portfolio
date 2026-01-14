import { FC } from "react";
import "./Skills.scss";
import htmllogo from "@/assets/html.png";
import csslogo from "@/assets/css.png";
import javallogo from "@/assets/javascript.png";
import reactlogo from "@/assets/react.png";
import reduxlogo from "@/assets/redux.png";
import typelogo from "@/assets/Typescript.png";
import nextlogo from "@/assets/nextjs.png";
import gitlogo from "@/assets/git.png";
import githublogo from "@/assets/GitHub.png";
import vitelogo from "@/assets/Vitejs-logo.svg.png";
import sasslogo from "@/assets/sass-logo.png";
import rtkQuary from "@/assets/Rtk quary.png";
import nodejs from "@/assets/nodejs.webp";
import prisma from "@/assets/prisma.png";
import Express from "@/assets/Express.png";
import Tailwind from "@/assets/tailwind.webp";
import reactQuary from "@/assets/React Query.png";
import Image from "next/image";
const Skills: FC = () => {
  const skills = [
    { name: "HTML", img: htmllogo },
    { name: "CSS", img: csslogo },
    { name: "JavaScript", img: javallogo },
    { name: "React", img: reactlogo },
    { name: "Redux", img: reduxlogo },
    { name: "TypeScript", img: typelogo },
    { name: "Next.js", img: nextlogo },
    { name: "Vite", img: vitelogo },
    { name: "Sass", img: sasslogo },
    { name: "Tailwind CSS", img: Tailwind },
    { name: "Git", img: gitlogo },
    { name: "GitHub", img: githublogo },
    { name: "Node js", img: nodejs },
    { name: "Prisma", img: prisma },
    { name: "RTK QUARY", img: rtkQuary },
    { name: "React QUARY", img: reactQuary },
    { name: "Express", img: Express },
  ];
  return (
    <section id="skills">
      <div className="container">
        <div className="skills">
          <h1 className="skills__title">2. Навыки</h1>
          <div className="skills__grid">
            {skills.map((item, index) => (
              <div className="skills__card" key={index}>
                <Image src={item.img} alt={item.name} width={60} height={60} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
