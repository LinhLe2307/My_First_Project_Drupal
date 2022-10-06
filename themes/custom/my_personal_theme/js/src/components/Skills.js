import React from "react";
import Typography from "@mui/material/Typography";
import {
  SiReact,
  SiSymfony,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiDrupal,
  SiAmazonaws,
  SiRedux,
  SiTypescript,
  SiGit,
} from "react-icons/si";

const skillsList = [
  {
    name: <SiHtml5 className="icons2" />,
    title: "HTML",
  },
  {
    name: <SiCss3 className="icons2" />,
    title: "CSS",
  },
  {
    name: <SiGit className="icons2" />,
    title: "Git",
  },
  {
    name: <SiJavascript className="icons2" />,
    title: "JavaScript",
  },
  {
    name: <SiTypescript className="icons2" />,
    title: "TypeScript",
  },
  {
    name: <SiPhp className="icons2" />,
    title: "PHP",
  },
  {
    name: <SiReact className="icons2" />,
    title: "React",
  },
  {
    name: <SiRedux className="icons2" />,
    title: "Redux",
  },
  {
    name: <SiSymfony className="icons2" />,
    title: "Symfony",
  },
  {
    name: <SiDrupal className="icons2" />,
    title: "Drupal",
  },
  {
    name: <SiAmazonaws className="icons2" />,
    title: "AWS",
  },
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <Typography
        variant="h4"
        component="h4"
        sx={{ fontFamily: '"Raleway", sans-serif' }}
      >
        Skills
      </Typography>

      <div className="skills-div">
        {skillsList.map((skill, index) => (
          <div className="icons-div" key={index}>
            {skill.name}
            <p>{skill.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
