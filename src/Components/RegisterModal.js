import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import PushableButtonAuth from "./Inputs/PushableButton.auth";
import Register from "../Layouts/Register";

//redux
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterOpen, handleRegisterClose } from "../Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

export default function RegisterModal() {
  const dispatch = useDispatch();
  const registerOpen = useSelector((state) => state.modal.registerOpen);

  const handleOpen = () => {
    dispatch(handleRegisterOpen());
  };

  const handleClose = () => {
    dispatch(handleRegisterClose());
  };

  return (
    <div>
      <PushableButtonAuth text={"register"} handleOpen={handleOpen} />
      <Modal
        open={registerOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <Box sx={style}>
          <Register />
        </Box>
      </Modal>
    </div>
  );
}
