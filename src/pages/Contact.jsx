import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactForm from "../components/ContactForm/ContactForm";
function Contact() {
  return (
    <div>
      <h1>Get in touch!</h1>
      <p>
        Whether you’re looking to build a responsive website, improve user
        experience, or collaborate on a creative project — I’d love to hear from
        you. Feel free to reach out via the form below or connect with me on
        LinkedIn or Email.
      </p>
      <div className="contacts-wrapper">
        <div className="contact contact__linkedin">
          <div className="contact__icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="contact__linkedin__text">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/msebastiaoveiga/"
            >
              Marlene Sebastião Veiga
            </a>
          </div>
        </div>
        <div className="contact contact__phone">
          <div className="contact__icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="contact__phone__text">
            <a href="tel:+351933736356">933736356</a>
          </div>
        </div>
        <div className="contact contact__email">
          <div className="contact__icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="contact__email__text">
            <a href="mailto:marlene.s.veiga@gmail.com">
              marlene.s.veiga@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
