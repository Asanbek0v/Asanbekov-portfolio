"use client";
import { FC, useState } from "react";
import "./Footer.scss";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Footer: FC = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const error = () => {
    toast.error("Пожалуйста, заполните все поля.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const success = () => {
    toast.success("Сообщение отправлено!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const getTelegram = () => {
    if (!email.trim() || !user.trim() || !message.trim()) {
      error();
    } else {
      const my_id = `@AsanbekokvPortfolia`;
      const token = `8569136010:AAH-2rZU7ME6GGijDvUecahv-ay52U3Vemk`;
      const api_key = `https://api.telegram.org/bot${token}/sendMessage`;
      const newUser = {
        chat_id: my_id,
        text: `Новое сообщение
        от: ${user}
        Email: ${email}
        Сообщение: ${message}`,
      };
      axios.post(api_key, newUser);
      setEmail("");
      setUser("");
      setMessage("");
      success();
    }
  };
  return (
    <section id="footer">
      <div className="container">
        <h1>4. Контакты</h1>
        <div className="footer">
          <h2>Свяжитесь с нами</h2>
          <p>
            Давайте обсуждать идеи, делиться опытом и создавать что-то крутое
            вместе! Есть вопрос или предложение? Пишите — всегда на связи!
          </p>
          <FaRegUser className="user" />
          <MdOutlineEmail className="email" />
          <RiMessage2Line className="message" />
          <input
            type="text"
            placeholder="Имя"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Сообщение"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button onClick={getTelegram}>Отправить</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
