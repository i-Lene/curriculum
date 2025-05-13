import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Contacts.module.scss";
import Modal from "../UI/Modal";
import contactImage from "/images/contactImg.png";
import { motion } from "motion/react";
import {
  validateEmail,
  isValidPhoneNumber,
  isNotEmpty,
} from "../../utilities/formValidation";

function ContactForm() {
  const [formState, setFormState] = useState({ errors: {} });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1025);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const serviceId = import.meta.env.VITE_EMAIL__SERVICE__KEY;
  const templateIdAuto = import.meta.env.VITE_AUTO__TEMPLATE;
  const templateIdContact = import.meta.env.VITE_CONTACT__TEMPLATE;
  const userId = import.meta.env.VITE_EMAIL__KEY;

  const whileHoverEffect = isMobile
    ? {}
    : {
        scale: 1.05,
        transition: {
          duration: 0.3,
          type: "spring",
        },
      };

  const whileTapEffect = isMobile
    ? {}
    : {
        scale: 0.95,
        transition: {
          duration: 0.3,
          type: "spring",
        },
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ errors: {} });

    const formData = new FormData(e.target);
    const fd = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const errors = {};
    if (!validateEmail(fd.email)) errors.email = "Invalid email address.";
    if (!isNotEmpty(fd.name)) errors.name = "Name is required.";
    if (!isNotEmpty(fd.message)) errors.message = "Message is required.";
    if (fd.phone && !isValidPhoneNumber(fd.phone))
      errors.phone = "Invalid phone number.";

    if (Object.keys(errors).length > 0) {
      setFormState({ errors });
      return;
    }

    setIsSubmitting(true);

    // Send contact message
    emailjs
      .send(serviceId, templateIdContact, fd, userId)
      .then(() => {
        // Auto-response
        return emailjs.send(
          serviceId,
          templateIdAuto,
          {
            name: fd.name,
            email: fd.email,
          },
          userId
        );
      })
      .then(() => {
        setModalMessage(
          "Your message was sent! Check your email for confirmation."
        );
        setShowModal(true);
      })
      .catch(() => {
        setModalMessage("Something went wrong. Please try again later.");
        setShowModal(true);
      })
      .finally(() => {
        setIsSubmitting(false);
        e.target.reset();
      });
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <>
      {showModal && <Modal message={modalMessage} onClose={closeModal} />}

      <form onSubmit={handleSubmit} className={classes.contactForm}>
        <fieldset className={classes.fieldset}>
          <img
            src={contactImage}
            alt="Contact Us"
            className={classes.contactImage}
          />

          <div className={classes.formContainer}>
            <div className={classes.formGroup}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              {formState.errors.name && (
                <span className={classes.error}>{formState.errors.name}</span>
              )}
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              {formState.errors.email && (
                <span className={classes.error}>{formState.errors.email}</span>
              )}
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="phone">Phone (optional):</label>
              <input type="tel" id="phone" name="phone" />
              {formState.errors.phone && (
                <span className={classes.error}>{formState.errors.phone}</span>
              )}
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={10}></textarea>
              {formState.errors.message && (
                <span className={classes.error}>
                  {formState.errors.message}
                </span>
              )}
            </div>
            <div className={classes.actions}>
              <motion.button
                whileHover={whileHoverEffect}
                whileTap={whileTapEffect}
                className={classes.formBtn}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default ContactForm;
