import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import PushableButtonAuth from "./Inputs/PushableButton.auth";
import Login from "../Layouts/Login";

//redux
import { useDispatch, useSelector } from "react-redux";
import { handleLoginOpen, handleLoginClose } from "../Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  boxShadow: 24,
};

export default function LoginModal() {
  const dispatch = useDispatch();
  const loginOpen = useSelector((state) => state.modal.loginOpen);

  const handleOpen = () => {
    dispatch(handleLoginOpen());
  };

  const handleClose = () => {
    dispatch(handleLoginClose());
  };

  return (
    <div>
      <PushableButtonAuth text={"login"} handleOpen={handleOpen} />
      <Modal
        open={loginOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <Box sx={style}>
          <Login />
        </Box>
      </Modal>
    </div>
  );
}
