import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="mailto:ashiqazy@gmail.com">email</a>. 👋
        </p>
        <br />
        <h3>Or find me on:</h3>
        <div className="hero-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url}>
              <img src={`/MyPortfolio/socials/${social.icon}`} alt={social.name} />
            </a>
          ))}
        </div>
        <div>
          <p className="contact-links">
            <MdEmail />
            ashiqazy@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +91 7907669002, +91 9995925323
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Calicut, Kerala, India
          </p>
          <br />
        </div>
      </div>
      {/* <div className="contact-form">
        <form name="contact" netlify>
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="email" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div> */}
    </div>
  );
};

export default ContactForm;
