import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bharath rai </span>
            from <span className="purple"> Mangalore, India.</span>
            <br />
            I am currently studying at scem.
            <br />
            I have completed my puc in SDPT colleg Kateel.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Would like to build the things i use"{" "}
          </p>
          <footer className="blockquote-footer">Bharath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
