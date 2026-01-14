"use client";
import { FC, useState } from "react";
import headerlogo from "@/assets/header.png";
import Image from "next/image";
import "./Header.scss";
import { Menu, X } from "lucide-react";

const Header: FC = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <section id="header">
      <div className="container">
        <div className="header">
          <Image
            src={headerlogo}
            alt="header"
            width={110}
            onClick={scrollToTop}
            className="header__logo"
          />

          <nav className={`header--nav ${open ? "active" : ""}`}>
            <a href="#aboutme" onClick={() => setOpen(false)}>
              <span>1.</span>Обо мне
            </a>
            <a href="#skills" onClick={() => setOpen(false)}>
              <span>2.</span>Навыки
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              <span>3.</span>Проекты
            </a>
            <a href="#footer" onClick={() => setOpen(false)}>
              <span>4.</span>Контакты
            </a>
          </nav>

          <div className="burger" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
