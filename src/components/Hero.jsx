import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  return (
    <div className="container">
      <motion.div
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 1,
          delay: 0.2, // Slight delay for a smoother entrance
        }}
        whileHover={{
          scale: 1.2,
          rotate: 15,
          transition: {
            yoyo: Infinity, // Creates a pulsing effect
            duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.9,
          rotate: -20,
          borderRadius: "50%",
          transition: {
            duration: 0.2,
          },
        }}
        className="pfp"
      >
        <img src={props.img} alt="Ashique P Raj" />
      </motion.div>


      <Heading firstWord="Who" secondWord="Am I?" />
      <div className="hero-typewriter">
        <h3>I am</h3>
        <Typewriter
          options={{
            strings: [
              "A Full Stack Developer",
              "An Expert in Laravel & CodeIgniter",
              "A Shopify App Specialist",
              "A Problem Solver",
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
      </div>

      <div className="hero-text">
        <p className="hero-desc">{props.description}</p>
      </div>
      <br />
      <br />
      Find me on:
      <div className="hero-socials">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            <img src={`/MyPortfolio/socials/${social.icon}`} alt={social.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
