import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
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
        "service_ycz3ujb",
        "template_wgx6uq4",
        form.current,
        "3psXGRcvDdBWY1muI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div>
          {/* darkMode */}
          <span
            className="awesome"
            style={{
              color: darkMode ? "white" : "orange",
              display: "flex",
              justifyContent: "right",
              marginLeft: "8rem",
              zIndex: "10",
            }}
          >
            İletişim
          </span>

          {/* <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div> */}
        </div>
      </div>
      {/* right side form */}
      <div
        className="c-right"
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
