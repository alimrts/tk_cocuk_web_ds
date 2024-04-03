import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

import tkc_iletisim_left from "../../img/tkc_iletisim_left.png";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      userName.trim() === "" ||
      !isEmailValid(userEmail.trim()) ||
      message.trim() === ""
    ) {
      alert("Lütfen Gerekli Alanları Doldurunuz.");
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_los6pu7",
        "template_64au44w",
        form.current,
        "RWH1a8gTZ08e_3r0o"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="left-column-contact">
        <img src={tkc_iletisim_left} alt="" />
      </div>
      <div
        className="right-column-contact"
        style={{
          zIndex: "10",
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Ad Soyad"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="E-posta"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Mesaj"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <div>
            <input
              type="submit"
              value="Gönder"
              className={`button ${done ? "button-disabled" : ""}`}
              disabled={done}
            />
            {isLoading && <div>Mesajınız Gönderiliyor...</div>}
            {done && "Mesajınız İçin Teşekkür Ederiz"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
