import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Shariff </span>
            from <span className="purple"> Rajahamundry, India.</span>
            <br />an adaptable and curious individual driven to leverage technology for real-life problem-solving. With a Bachelor's in Computer Science and a solid background in freelance Social Media Management, I'm committed to continuous learning and industry immersion.
            <br />
            My journey includes collaborating with renowned brands, honing skills in branding, SEO, content marketing, and web design. Let's connect and explore new horizons in the digital world together!"
            <br />
            <br />
            Apart from this, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight />  Travelling
            </li> 
            <li className="about-activity">
              <ImPointRight />  Tech Explorer
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shariff</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
