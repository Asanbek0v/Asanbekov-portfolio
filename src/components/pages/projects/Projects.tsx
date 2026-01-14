"use client";

import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import "./Projects.scss";

import Tmdb from "@/assets/tmdb.png";
import Watch from "@/assets/watch.png";
import Strong from "@/assets/strongPass.png";
import Domik from "@/assets/domik.png";

interface Project {
  img: StaticImageData;
  title: string;
  description: string;
  tools: string[];
  vercel: string;
  github?: string;
}

const Projects: FC = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const projects: Project[] = [
    {
      img: Tmdb,
      title: "TMDB Cinema",
      description:
        "Веб-приложение для поиска и просмотра информации о фильмах с использованием The Movie Database API. Реализован поиск, фильтрация, детальная информация о фильмах и актёрах.",
      tools: ["React", "TypeScript", "TMDB API", "SCSS"],
      vercel: "https://tmdb-yvfr.vercel.app/",
      github: "https://github.com/Asanbek0v/tmdb",
    },
    {
      img: Watch,
      title: "Apple Watch Landing",
      description:
        "Современный лендинг Apple Watch с анимациями и интерактивными элементами. Полностью адаптивный дизайн с плавными переходами и эффектами.",
      tools: ["React", "SCSS", "Animations", "Responsive"],
      vercel: "https://apple-watch-delta.vercel.app/",
      github: "https://github.com/Asanbek0v/appleWatch",
    },
    {
      img: Strong,
      title: "Strong Password Generator",
      description:
        "Генератор надёжных паролей с настраиваемыми параметрами: длина, символы, цифры, специальные знаки. Проверка силы пароля и копирование в буфер обмена.",
      tools: ["React", "TypeScript", "JavaScript", "CSS"],
      vercel: "https://strong-pass-jade.vercel.app/",
      github: "https://github.com/Asanbek0v/StrongPass",
    },
    {
      img: Domik,
      title: "Domik Tut",
      description:
        "Платформа для поиска и аренды недвижимости. Реализованы фильтры, карта объектов, детальные карточки недвижимости и форма обратной связи.",
      tools: ["React", "Next.js", "API", "Tailwind CSS"],
      vercel: "https://domiktut-seven.vercel.app/",
      github: "https://github.com/Asanbek0v/domik",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="projects">
          <div className="projects__header">
            <h1 className="projects__title">3. Мои проекты</h1>
          </div>

          <div className="projects__grid">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                className="project-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-card__image-wrapper">
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="project-card__image"
                    width={400}
                    height={250}
                  />
                  <div className="project-card__overlay">
                    <button
                      onClick={() => openLink(project.vercel)}
                      className="project-card__button project-card__button--demo"
                      aria-label={`Открыть демо ${project.title}`}
                    >
                      Демо
                    </button>
                    {project.github && (
                      <button
                        onClick={() => openLink(project.github!)}
                        className="project-card__button project-card__button--github"
                        aria-label={`Открыть GitHub ${project.title}`}
                      >
                        GitHub
                      </button>
                    )}
                  </div>
                </div>

                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>
                  <div className="project-card__tools">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="project-card__tool">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
