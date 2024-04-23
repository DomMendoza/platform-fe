import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Login from "../Layouts/Login";

//redux
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export default function ProgressModal({
  open,
  close,
  selector,
  icon,
  title,
  subtitle,
  component,
}) {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(open());
  };

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <>
      <div
        className="categories flex flex-col xl:flex-row items-center justify-center xl:justify-start px-1 h-full gap-2 cursor-pointer"
        onClick={handleOpen}
      >
        <div className="size-10 xl:size-12 rounded-full border-[1px] border-blue-600 flex justify-center items-center">
          {icon}
        </div>
        <div className="xl:flex-1">
          <p className="text-[9px] lg:text-xs xl:text-sm font-bold text-center xl:text-start">
            {title}
          </p>
          <p className="text-[10px] hidden xl:block">{subtitle}</p>
        </div>
      </div>
      <Modal
        open={selector}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <Box sx={style} className="w-[85%] lg:w-auto">
          {component}
        </Box>
      </Modal>
    </>
  );
}
