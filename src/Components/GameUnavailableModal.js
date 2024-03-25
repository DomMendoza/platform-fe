import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import unavailableBanner from "../Assets/unavailable_banner.png";

//redux
import { useDispatch, useSelector } from "react-redux";
import { handleUnavailableClose } from "../Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function GameUnavailableModal() {
  const dispatch = useDispatch();
  const { unavailableOpen } = useSelector((state) => state.modal);
  const handleClose = () => {
    dispatch(handleUnavailableClose());
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={unavailableOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <Box
          sx={style}
          className="flex flex-col gap-2 justify-center items-center font-[Poppins] w-[70%] lg:w-[400px]"
        >
          <img src={unavailableBanner} />
          <p className="text-3xl lg:text-4xl font-bold">Oops!</p>
          <p className="w-[85%] text-center text-sm lg:text-base">
            The game is currently unavailable.
          </p>
          <Button
            variant="contained"
            className="bg-black hover:bg-black mt-2 w-[90%]"
            onClick={() => {
              handleClose();
            }}
          >
            I undestand
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
