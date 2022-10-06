import React, { useState } from "react";
import Carousel from "react-grid-carousel";

import composer from "../assets/images/Linh-Le-certificate-composer.jpg";
import harmonious from "../assets/images/Linh-Le-harmonious-development-with-symfony-6.jpg";
import namespaces from "../assets/images/Linh-Le-php-namespaces.jpg";
import devOps from "../assets/images/Linh_Le_DevOps_AWS.jpg";
import codeCommit from "../assets/images/Linh_Le_AWS_Codecommit.jpg";
import elastic from "../assets/images/Linh_Le_Introduction_to_Amazon_Elastic_Compute.jpg";
import { Box, Button, Modal, Paper, Typography } from "@mui/material";

const style = {
  // position: "absolute",
  position: "relative",
  top: "50%",
  left: "50%",
  width: "70vw",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boder: "white",
};
const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [certiPath, setCertiPath] = useState({});
  const handleOpen = (path, index) => {
    const newPath = { ...path, index: index };
    setOpen(true);
    setCertiPath(newPath);
  };
  const handleClose = () => setOpen(false);

  const images = [
    {
      label: "Composer",
      imgPath: composer,
      url: "https://symfonycasts.com/certificates/55E3F815DC29",
    },
    {
      label: "Harmonious Development with Symfony 6",
      imgPath: harmonious,
      url: "https://symfonycasts.com/certificates/E4A4BF29C141",
    },
    {
      label: "PHP Namespaces",
      imgPath: namespaces,
      url: "https://symfonycasts.com/certificates/1DE6A47C0C21",
    },
    {
      label: "Getting Started with DevOps on AWS",
      imgPath: devOps,
    },
    {
      label: "Introduction to AWS CodeCommit",
      imgPath: codeCommit,
    },
    {
      label: "Introduction to Amazon Elastic Compute Cloud (EC2)",
      imgPath: elastic,
    },
  ];

  return (
    <div className="certificates">
      <Typography
        variant="h4"
        component="div"
        sx={{
          flexGrow: 1,
          display: { sm: "block" },
          fontFamily: '"Raleway", sans-serif',
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        Certificates
      </Typography>
      <Carousel cols={3} rows={1} gap={10} loop>
        {images.map((image, index) => (
          <Carousel.Item key={image.imgPath}>
            <img
              width="100%"
              src={image.imgPath}
              alt={image.label}
              className="shadow"
              onClick={() => handleOpen(image, index)}
            />
            <a href={image.url} target="_blank">
              {image.label}
            </a>
            <Modal
              open={open}
              onClose={handleClose}
              sx={{
                background: "transparent",
              }}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Carousel cols={1} rows={1} gap={10} loop>
                  {images
                    .slice(certiPath.index)
                    .concat(images.slice(0, certiPath.index))
                    .map((image, index) => (
                      <Carousel.Item key={image.imgPath}>
                        <img
                          width="100%"
                          src={image.imgPath}
                          alt={image.label}
                          // className="shadow"
                          sx={{
                            borderRadius: "20px",
                          }}
                          onClick={() => handleOpen(image)}
                        />
                      </Carousel.Item>
                    ))}
                </Carousel>
                {/* <Button
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                  }}
                >
                  X
                </Button>
                <img
                  width="100%"
                  src={certiPath.imgPath}
                  alt={certiPath.label}
                /> */}
              </Box>
            </Modal>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Certificates;
