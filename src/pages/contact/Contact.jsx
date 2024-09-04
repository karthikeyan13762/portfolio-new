// --------------------------------

import React, { useRef, useState } from "react";
import { FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import emailjs from "@emailjs/browser";
import parse from "html-react-parser";

const Contact = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  let service = import.meta.env.VITE_SERVICE;
  let template = import.meta.env.VITE_TEMPLATE;
  let key = import.meta.env.VITE_PUBLIC_KEY;

  const validateForm = () => {
    const errors = {};
    const formData = new FormData(formRef.current);

    if (!formData.get("from_name")) {
      errors.from_name = parse(
        '<span className="require">Name is required</span>'
      );
    }

    if (!formData.get("from_email")) {
      errors.from_email = parse(
        '<span className="require">Email is required</span>'
      );
    } else if (!isValidEmail(formData.get("from_email"))) {
      errors.from_email = parse(
        '<span className="require">Invalid Email Format</span>'
      );
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm(service, template, formRef.current, key)
      .then(() => {
        formRef.current.reset();
        toast.success("Message sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message");
      });
  };

  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Don't be Shy</h3>
          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className="info_icon" />
              <div>
                <span className="info_title">Mail me</span>
                <h4 className="info_desc">karthikeya3762@gmail.com</h4>
              </div>
            </div>
            <div className="info_item">
              <FaPhoneSquareAlt className="info_icon" />
              <div>
                <span className="info_title">Call me</span>
                <h4 className="info_desc">9345064663</h4>
              </div>
            </div>
          </div>
        </div>
        <form className="contact_form" ref={formRef} onSubmit={sendEmail}>
          <div className="form_input-group">
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="form_control"
                maxLength={20}
              />
              {errors.from_name && (
                <span className="error">{errors.from_name}</span>
              )}
            </div>
            <div className="form_input-div">
              <input
                type="email"
                placeholder="Your Email"
                name="from_email"
                className="form_control"
                required
                maxLength={25}
              />
              {errors.from_email && (
                <span className="error">{errors.from_email}</span>
              )}
            </div>
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Subject"
                name="from_subject"
                className="form_control"
                required
                maxLength={45}
              />
            </div>
          </div>
          <div className="form_input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              className="form_control textarea"
              required
              maxLength={250}
              type="text"
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send Message{" "}
            <span className="button_icon contact_button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
