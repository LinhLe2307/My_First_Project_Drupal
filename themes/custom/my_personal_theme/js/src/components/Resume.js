import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// import resume from "../assets/images/Linh.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  height: "90vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
  position: "relative",
  // overflow: "hidden",
};

function Resume() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Preview CV</Button>
      <Button>
        <a href={require("../assets/images/Linh.jpg")} download="Linh.jpg">
          Download CV
        </a>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src="../assets/images/Linh.jpg"
            style={{
              maxWidth: "100%",
              objectFit: "contain",
              position: "absolute",
              top: "0",
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default Resume;
