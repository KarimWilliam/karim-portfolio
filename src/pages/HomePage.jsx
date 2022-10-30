import React from "react";
import reviewImg from "../images/reviewsite.avif";
import commerceImg from "../images/commerce.avif";
import RightArrow2 from "../components/RightArrow2.svg";
import pesksite from "../images/pesksite.webp";

function HomePage() {
  // document.documentElement.style.cssText = "--yellow-color: red";

  return (
    <div className="page-layout">
      <div className="intro">
        <div className="into">
          <h2 className="myname" style={{ textDecoration: "none" }}>
            Karim William{" "}
            <span style={{ fontWeight: "100" }}> - Web Developer</span>
          </h2>
          <p className="top-paragraph">
            Thank you for taking the time to check out my portfolio! Below are
            links to some of my recent projects.
          </p>
        </div>
      </div>
      <h3 id="projects">Sample Websites</h3>
      <div className="projects">
        {/* game reviews */}
        <div>
          <h3 className="title">
            <a
              className="title"
              rel="noopener noreferrer"
              target="_blank"
              href="https://dark-game-reviews.cyclic.app">
              Dark Game Reviews{" "}
              <img width={"20px"} src={RightArrow2} alt="right arrow"></img>
            </a>
          </h3>
          <div className="review-project">
            <div className=" blur-card" id="blur-card">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dark-game-reviews.cyclic.app">
                <img
                  height="300"
                  width="auto"
                  className="project-image"
                  src={reviewImg}
                  alt="review site img"></img>
              </a>
            </div>
            <h4 className="centered" id="centered">
              For those looking for unbiased reviews by a fellow gamer
            </h4>
          </div>
        </div>
        {/* commerce site */}
        <div className="">
          <h3 className="title">
            <a
              className="title"
              rel="noopener noreferrer"
              target="_blank"
              height="300"
              width="auto"
              href="https://dark-commerce.cyclic.app">
              Dark E-Commerce{" "}
              <img width={"20px"} src={RightArrow2} alt="right arrow"></img>
            </a>
          </h3>
          <div className="review-project">
            <div className=" blur-card" id="blur-card">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dark-commerce.cyclic.app">
                <img
                  className="project-image"
                  src={commerceImg}
                  alt="commerce website"></img>
              </a>
            </div>
            <h4 className="centered" id="centered">
              Where items come to be sold…
            </h4>
          </div>
        </div>
        {/* peskales site */}
        <div className="">
          <h3 className="title">
            <a
              className="title"
              rel="noopener noreferrer"
              target="_blank"
              height="300"
              width="auto"
              href="https://peskales-clinic.onrender.com/">
              Peskales's Clinic{" "}
              <img width={"20px"} src={RightArrow2} alt="right arrow"></img>
            </a>
          </h3>
          <div className="review-project">
            <div className=" blur-card" id="blur-card">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dark-commerce.cyclic.app">
                <img
                  className="project-image"
                  src={pesksite}
                  alt="clinic site"></img>
              </a>
            </div>
            <h4 className="centered" id="centered">
              Physical Therapy Clinic
            </h4>
          </div>
        </div>
      </div>
      <h3 id="About">About Section</h3>
      <div className="about-container">
        <div className="about-elements">
          <h4>Motivation</h4>
          <ul>
            <li>
              <p>
                {" "}
                A highly motivated web developer seeking to gain experience and
                expand my knowledge.
              </p>
              I am looking to attain a position in a team that will utilize my
              abilities and further develop my skill-set.
            </li>
          </ul>
        </div>
        <div className="about-elements">
          <h4>About Me</h4>
          <ul className="aboutme">
            <li>
              Graduated with a Computer Science &amp; Engineering degree from
              the German university in Cairo.
            </li>
            <li>
              My colleagues best describe me as friendly, understanding and easy
              to work with.{" "}
            </li>
            <li>
              Hobbies include video games, cooking, swimming and working out.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
