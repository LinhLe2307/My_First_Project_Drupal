import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  minWidth: 350,
  boxShadow: 24,
  p: 2.5,
  borderRadius: "20px",
  border: "none",
};

const Project = ({ project, languageList }) => {
  const [open, setOpen] = useState(false);
  const { name, description, html_url, projectImage } = project;
  const newName = name
    .replaceAll("_", " ")
    .replaceAll("React", "")
    .replace("Symfony", "");
  const herokuName = name.toLowerCase().replaceAll("_", "-");
  // const herokuUrl = `https://linh-le-${herokuName}.herokuapp.com/`;
  const newLanguagesList = Object.keys(languageList).map((lang) => `${lang} `);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <article className="gradient-color shadow projects-article">
      <a href="#" className="projects-link">
        <img
          alt="lifestyle"
          src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          className="project-image"
        />
      </a>
      <div className="description">
        <Typography
          variant="p"
          component="p"
          sx={{
            flexGrow: 1,
            display: { sm: "block" },
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          {newLanguagesList}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            flexGrow: 1,
            display: { sm: "block" },
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          {newName}
        </Typography>
      </div>
      <div>
        <Button onClick={handleOpen}>See more</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <img
              // src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              src={projectImage}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h5"
              sx={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              {newName}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              {description}
            </Typography>
            <Button>
              {/* <Link
                href={herokuUrl}
                target="_blank"
                sx={{ textDecoration: "none" }}
              > */}
                View Project
              {/* </Link> */}
            </Button>
            <Button>
              <Link
                href={html_url}
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                View Code
              </Link>
            </Button>
            <Button
              style={{
                display: "absolute",
                bottom: "14px",
                right: "14px",
              }}
              onClick={handleClose}
            >
              X
            </Button>
          </Box>
        </Modal>
      </div>
    </article>
  );
};

export default Project;
