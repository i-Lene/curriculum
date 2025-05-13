import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import classes from "./Contacts.module.scss";

function Contacts() {
  return (
    <>
      <div className={classes["contacts-header"]}>
        <h1>Get in touch!</h1>
        <p>
          Whether you’re looking to build a responsive website, improve user
          experience, or collaborate on a creative project — I’d love to hear
          from you.
        </p>
        <p>
          Feel free to reach out via the form below or connect with me directly.
        </p>
      </div>

      <div className={classes["contacts-wrapper"]}>
        <a
          className={classes.contact}
          href="https://www.linkedin.com/in/msebastiaoveiga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          <span className={classes.contact__text}>Marlene Sebastião Veiga</span>
        </a>

        <a className={classes.contact} href="tel:+351933736356">
          <FontAwesomeIcon icon={faPhone} className={classes.icon} />
          <span className={classes.contact__text}>933 736 356</span>
        </a>

        <a className={classes.contact} href="mailto:marlene.s.veiga@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
          <span className={classes.contact__text}>
            marlene.s.veiga@gmail.com
          </span>
        </a>
      </div>
    </>
  );
}

export default Contacts;
