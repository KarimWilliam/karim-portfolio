import React, { useEffect } from "react";
import waveBanner from "./WaveBanner.svg";
import waveBanner2 from "./WaveBanner2.svg";
import moon from "./moon.svg";
import sun from "./sun.svg";
import { useState } from "react";

function Header() {
  const [currentColor, setCurrentColor] = useState(true);

  function themeButtonClick() {
    if (currentColor) {
      document.documentElement.style.setProperty(
        "--nav-justify",
        "space-between"
      );
      document.documentElement.style.setProperty("--text-color", "#00000");
      document.documentElement.style.setProperty("--yellow-color", "#e1d703");
      document.documentElement.style.setProperty("--cyan-color", "#00ffd2");
      document.documentElement.style.setProperty("--border-color", "#424242");
      document.documentElement.style.setProperty("--pink-color", "#e5007");
      document.documentElement.style.setProperty("--border-color", "black");
      document.documentElement.style.setProperty(
        "--background-color",
        "#1b1b1b"
      );
    } else {
      document.documentElement.style.setProperty("--border-color", "#9b9677");
      document.documentElement.style.setProperty(
        "--nav-justify",
        "space-between"
      );
      document.documentElement.style.setProperty("--text-color", "#9b9677");
      document.documentElement.style.setProperty("--yellow-color", "#242526");
      document.documentElement.style.setProperty("--cyan-color", "#9b9677");
      document.documentElement.style.setProperty("--pink-color", "#b6b29a");
      document.documentElement.style.setProperty(
        "--background-color",
        "#18191a"
      );
    }
    setCurrentColor(!currentColor);
  }

  useEffect(() => {}, [currentColor]);
  return (
    <div className="header">
      <div className="topnav">
        {!currentColor ? (
          <div className="only-show-on-big-screens">
            <img
              src={require("../images/rainbow.avif")}
              alt="rainbow strip"
              height="40"
              width="auto"
            />
          </div>
        ) : (
          <div className="my-name only-show-on-big-screens">
            Karim's Portfolio
          </div>
        )}

        <div className="nav-elements">
          <a href="#projects">Projects</a>
          <a href="#About">About</a>

          {currentColor ? (
            <button
              className="theme-button punkbutton"
              onClick={() => {
                themeButtonClick();
              }}>
              {currentColor ? "Punkify " : "Dark Mode "}
              {currentColor ? (
                <img alt="sun" width={"15px"} src={sun}></img>
              ) : (
                <img alt="moon" width={"15px"} src={moon}></img>
              )}
            </button>
          ) : (
            <button
              className="theme-button "
              onClick={() => {
                themeButtonClick();
              }}>
              {currentColor ? "Punkify " : "Dark Mode "}
              {currentColor ? (
                <img alt="sun" width={"15px"} src={sun}></img>
              ) : (
                <img alt="moon" width={"15px"} src={moon}></img>
              )}
            </button>
          )}
        </div>
      </div>
      <img
        src={!currentColor ? waveBanner : waveBanner2}
        height="423"
        width="1902"
        alt="destopian building banner"></img>
    </div>
  );
}

export default Header;
