import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./style.module.css";
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [enteredDataError, setEnteredDataError] = useState();
  const [isMailSent, setIsMailSent] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(name.length, email.length, message);
    if (!name && !email && !message) {
      setIsMailSent(false);
      setEnteredDataError(true);
      return;
    }
    if (name?.length < 3 || email?.length < 6 || message?.length < 6) {
      setIsMailSent(false);
      setEnteredDataError(true);
      return;
    }

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
          setEnteredDataError(false);
          setError(false);
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
          <input
            type="text"
            name="to_name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" value="Send" className={style.sendBtn}>
            Send
          </button>
        </form>
        {isMailSent && (
          <p style={{ color: "green", margin: "10px 0" }}>Sent Successfully</p>
        )}
        {error && (
          <p style={{ color: "red", margin: "10px 0" }}>Something went wrong</p>
        )}
        {enteredDataError && (
          <p style={{ color: "red", margin: "10px 0" }}>
            Kindly enter the details properly
          </p>
        )}
      </section>
    </div>
  );
};

export default Contact;
