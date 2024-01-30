import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import PushableButtonAuth from "./Inputs/PushableButton.auth";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

export default function AuthModal({ type }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <PushableButtonAuth text={type} handleOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        {type === "login" ? (
          <Box sx={style}>
            <Login />
          </Box>
        ) : (
          <Box sx={style}>
            <Register />
          </Box>
        )}
      </Modal>
    </div>
  );
}
