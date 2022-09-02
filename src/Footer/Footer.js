import React from "react";
import LinkedIn from "../assets/Linkedin.svg";
import Github from "../assets/github.png";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p>Joshua Medina</p>
      <a
        className="linkedinAnchor"
        href="https://www.linkedin.com/in/joshua-medina/"
      >
        <img src={LinkedIn} className="img" alt="Joshua Medina" />
      </a>

      <a className="githubAnchor" href="https://github.com/jrmedina">
        <img src={Github} className="img" alt="Joshua Medina" />
      </a>

      <p>Michael Martinelli</p>
      <a
        className="linkedinAnchor"
        href="https://www.linkedin.com/in/michael-martinelli-7230b5237/"
      >
        <img src={LinkedIn} className="img" alt="Michael Martinelli" />
      </a>
      <a className="githubAnchor" href="https://github.com/mmartinelli22">
        <img src={Github} className="img" alt="Michael Martinelli" />
      </a>
    </div>
  );
};

export default Footer;
