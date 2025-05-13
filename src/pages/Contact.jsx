import ContactForm from "../components/ContactForm/ContactForm";
import Contacts from "../components/ContactForm/Contacts";

function Contact() {
  return (
    <div>
      <Contacts />
      <div className="contactForm">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
