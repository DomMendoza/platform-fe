import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

//redux
import { useDispatch, useSelector } from "react-redux";
import { handleExpiredSessionClose } from "../Slice/ModalSlice";
import PushableButton from "./Inputs/PushableButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
};

function ExpiredSessionModal() {
  const dispatch = useDispatch();
  const { expiredSessionOpen } = useSelector((state) => state.modal);
  const handleClose = () => {
    dispatch(handleExpiredSessionClose());
  };
  return (
    <div>
      <Modal
        open={expiredSessionOpen}
        // onClose={handleClose}
        onClose={() => {
          handleClose();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <Box
          sx={style}
          className="flex flex-col gap-2 justify-center items-center font-[Poppins] w-[70%] lg:w-[400px] text-center"
        >
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="lg:text-[1.5rem]"
            />
            <p className="font-bold text-base lg:text-lg">
              You've been logged out.
            </p>
          </div>
          <p className="text-xs lg:text-sm">
            Your account has logged in somewhere else. You can only logged in on
            one computer at a time.
          </p>
          <Button
            variant="contained"
            className="bg-black hover:bg-black mt-2 w-[70%]"
            onClick={() => {
              handleClose();
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }}
          >
            I undestand
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ExpiredSessionModal;
