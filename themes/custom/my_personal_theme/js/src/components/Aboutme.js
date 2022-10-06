import React from "react";
import Typography from "@mui/material/Typography";
// import classes from './modules/Aboutme.module.css'
import avatar from "../assets/images/Avatar.png";
import Resume from "./Resume";

const Aboutme = () => {
  return (
    <section className="about-me" id="about me">
      <div className="about-me-info">
        <div className="gradient-color shadow about-me-div">
          <div className="about-me-img">
            <img src={avatar} alt="about me" />
          </div>
        </div>
        <div className="about-me-description">
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontFamily: '"Raleway", sans-serif', marginBottom: "1.5rem" }}
          >
            About me
          </Typography>
          <p>
            My name is Linh Le, I am a fullstack web development student at
            Helsinki Business College. I
          </p>
          <Resume />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
