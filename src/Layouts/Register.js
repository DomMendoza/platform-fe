import React, { useState } from "react";
import { toast } from "react-toastify";
import authService from "../Services/auth.service";
import DatePickerInput from "../Components/Inputs/DatePicker";
import dayjs from "dayjs";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

import { handleRegisterClose, handleLoginOpen } from "../Slice/ModalSlice";
import { useDispatch } from "react-redux";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Breddas Back Office
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Register() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmedPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    // This function will be called whenever the user selects a new date
    setSelectedDate(date);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmedPassword = () =>
    setShowConfirmedPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const birthdate = dayjs(selectedDate).format("YYYY-MM-DD");
    const username = data.get("username");
    const password = data.get("password");
    const confirm = data.get("confirmPassword");

    // Check if any of the values are not filled
    if (
      !name ||
      !email ||
      !phone ||
      !birthdate ||
      !username ||
      !password ||
      !confirm
    ) {
      toast.error("Please fill in all the required fields.");
      return;
    } else {
      if (password === confirm) {
        const result = await authService.registerUser(
          username,
          password,
          name,
          email,
          phone,
          birthdate
        );
        if (result.success) {
          console.log("user: ", result.user);
          toast.success("Successfully Registered!");
          dispatch(handleRegisterClose());
          dispatch(handleLoginOpen());
        } else {
          toast.error("An error occured while registering user.");
        }
      } else {
        toast.error("Password does not match.");
      }
    }
  };

  return (
    <div className=" bg-white px-5 py-8 rounded-lg flex flex-col justify-center items-center gap-5">
      <div
        className="header-container flex flex-col mb-2
       justify-center items-center"
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            fontSize: "2rem",
          }}
        >
          Platform Register
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "300",
            fontSize: "1rem",
          }}
        >
          Create your account.
        </Typography>
      </div>
      <Box
        className="input-container flex flex-col justify-center items-center  w-full "
        component="form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="auth-container flex flex-col gap-2 w-full ">
          <div className="flex flex-col gap-3 justify-between items-center">
            <TextField
              required
              fullWidth
              inputProps={{
                style: {
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.8rem",
                },
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.9rem",
                },
              }}
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              required
              fullWidth
              inputProps={{
                style: {
                  fontFamily: "Poppins, sans serif",
                  fontSize: ".8rem",
                },
              }}
              InputLabelProps={{
                style: { fontFamily: "Poppins, sans serif", fontSize: ".9rem" },
              }}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              required
              fullWidth
              inputProps={{
                style: {
                  fontFamily: "Poppins, sans serif",
                  fontSize: ".8rem",
                },
              }}
              InputLabelProps={{
                style: { fontFamily: "Poppins, sans serif", fontSize: ".9rem" },
              }}
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              autoFocus
            />
            <div className="w-full">
              <DatePickerInput
                label={"Birthdate"}
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
              />
            </div>
            <TextField
              required
              fullWidth
              inputProps={{
                style: {
                  fontFamily: "Poppins, sans serif",
                  fontSize: ".8rem",
                },
              }}
              InputLabelProps={{
                style: { fontFamily: "Poppins, sans serif", fontSize: ".9rem" },
              }}
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                label="password"
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirmPassword visibility"
                      onClick={handleClickShowConfirmedPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="confirmPassword"
                label="confirmPassword"
              />
            </FormControl>
          </div>
        </div>

        <div className="button-container flex flex-col justify-center items-center w-full ">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-black my-3 py-3 bg-gradient-to-r from-indigo-500 to-pink-500"
          >
            Sign Up
          </Button>
        </div>
      </Box>

      {/* <div className="login-footer border-2 border-red-600 h-24 rounded-lg w-full  flex justify-center items-center">
        login footer
      </div> */}
    </div>
  );
}
