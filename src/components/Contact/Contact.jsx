import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./style.module.css";
const Contact = () => {
  const [isMailSent, setIsMailSent] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iedtqrm",
        "template_7gvx6np",
        form.current,
        "tuzOOhL7gnN7enAJj"
      )
      .then(
        (result) => {
          setIsMailSent(true);
        },
        (error) => {
          setError(true);
          setIsMailSent(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <section className={style.contact} id="Contact">
        <div className={style.upper}>
          <p>Get in touch</p>
          <span>Contact Me</span>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="to_name" placeholder="Enter your name" />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />
          <textarea name="message" placeholder="Enter your message" />
          <button type="submit" value="Send" className={style.sendBtn}>
            Send
          </button>
          {isMailSent && <p style={{ color: "green" }}>Sent Successfully</p>}
          {error && <p style={{ color: "red" }}>Something went wrong</p>}
        </form>
      </section>
    </div>
  );
};

export default Contact;
