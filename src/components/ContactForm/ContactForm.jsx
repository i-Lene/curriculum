import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  validateEmail,
  isValidPhoneNumber,
  isNotEmpty,
} from "../../utilities/formValidation";

function ContactForm() {
  const [formState, setFormState] = useState({ errors: {} });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAIL__SERVICE__KEY;
  const templateIdAuto = import.meta.env.VITE_AUTO__TEMPLATE;
  const templateIdContact = import.meta.env.VITE_CONTACT__TEMPLATE;
  const userId = import.meta.env.VITE_EMAIL__KEY;


  console.log(serviceId, templateIdAuto, templateIdContact, userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    const formData = new FormData(e.target);

    const fd = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    let errors = {};

    if (!validateEmail(fd.email)) {
      errors.email = "Invalid email address.";
    }

    if (!isNotEmpty(fd.name)) {
      errors.name = "Name cannot be empty.";
    }

    if (!isNotEmpty(fd.message)) {
      errors.message = "Message cannot be empty.";
    }

    if (fd.phone && !isValidPhoneNumber(fd.phone)) {
      errors.phone = "Invalid phone number.";
    }

    if (Object.keys(errors).length > 0) {
      setFormState({ errors });
      return;
    }

    setIsSubmitting(true);

    // email to me
    emailjs
      .send(
        serviceId,
        templateIdContact,
        {
          name: fd.name,
          email: fd.email,
          phone: fd.phone,
          message: fd.message,
        },
        userId
      )
      .then(
        (response) => {
          console.log(
            "Contact email sent successfully!",
            response.status,
            response.text
          );

          // automatic response to user
          emailjs
            .send(
              serviceId,
              templateIdAuto,
              {
                name: fd.name,
                email: fd.email,
              },
              userId
            )
            .then(
              (response) => {
                console.log(
                  "Auto-response email sent successfully!",
                  response.status,
                  response.text
                );
                setSuccessMessage(
                  "Message sent successfully! A confirmation email has been sent to you."
                );
              },
              (error) => {
                console.error("Failed to send auto-response email:", error);
                setSuccessMessage(
                  "Message sent successfully, but failed to send confirmation email."
                );
              }
            );
        },
        (error) => {
          console.error("Failed to send contact email:", error);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <fieldset>
        <legend>Contact Form</legend>

        {successMessage && <div className="formSuccess">{successMessage}</div>}

        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          {formState.errors.name && (
            <span className="error">{formState.errors.name}</span>
          )}
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          {formState.errors.email && (
            <span className="error">{formState.errors.email}</span>
          )}
        </div>

        <div className="formGroup">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
          {formState.errors.phone && (
            <span className="error">{formState.errors.phone}</span>
          )}
        </div>

        <div className="formGroup">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          {formState.errors.message && (
            <span className="error">{formState.errors.message}</span>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
