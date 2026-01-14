"use client";
import { FC } from "react";
import "./About.scss";
import { CiLinkedin } from "react-icons/ci";
import {
  FaInstagram,
  FaSquareGithub,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const About: FC = () => {
  function Resume() {
    window.open("/Asanbekov Dastan Full-stack developer -4.pdf", "_blank");
  }
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div className="about--block">
            <h1>
              Dastan Asanbekov <br />
              I&apos;m a Full-stack Developer
            </h1>
            <p>
              <span>Я Front-End разработчик</span>, специализирующийся на
              создании веб-сайтов. <br /> В настоящее время я обучаюсь в
              IT-академии
              <span> Motion Web</span>. Мне 20 лет, <br /> я живу в
              <span>Кыргызстане</span>, и передо мной стоят большие цели,
              которых я <br />
              планирую достичь!
            </p>
          </div>
          <div className="about--card">
            <div className="about--card__title" onClick={() => Resume()}>
              <h1>Resume</h1>
            </div>
            <div className="about--card__icon">
              <a
                href="https://www.linkedin.com/in/%D0%B4%D0%B0%D1%81%D1%82%D0%B0%D0%BD-%D0%B0%D1%81%D0%B0%D0%BD%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-451857399/"
                target="_blank"
              >
                <button className="Linkedin">
                  <CiLinkedin />
                  Linkedin
                </button>
              </a>
              <a href="https://github.com/Asanbek0v" target="_blank">
                <button>
                  <FaSquareGithub />
                  Github
                </button>
              </a>
              <a href="https://@asanbek0v15" target="_blank">
                <button className="Telegram">
                  <FaTelegram />
                  Telegram
                </button>
              </a>
              <a href="https://www.instagram.com/asanbek0v15/" target="_blank">
                <button className="Instagram">
                  <FaInstagram />
                  Instagram
                </button>
              </a>
              <a href="https://+996704210706" target="_blank">
                <button className="Whatsapp">
                  <FaWhatsapp />
                  Whatsapp
                </button>
              </a>
              <button>
                <MdOutlineMailOutline />
                Email...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
