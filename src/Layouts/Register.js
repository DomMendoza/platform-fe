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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useForm, Controller } from "react-hook-form";
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

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      birthdate: null,
      username: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmedPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmedPassword = () =>
    setShowConfirmedPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const name = data.get("name");
  //   const email = data.get("email");
  //   const phone = data.get("phone");
  //   const birthdate = dayjs(selectedDate).format("YYYY-MM-DD");
  //   const username = data.get("username");
  //   const password = data.get("password");
  //   const confirm = data.get("confirmPassword");

  //   // Check if any of the values are not filled
  //   if (
  //     !name ||
  //     !email ||
  //     !phone ||
  //     !birthdate ||
  //     !username ||
  //     !password ||
  //     !confirm
  //   ) {
  //     toast.error("Please fill in all the required fields.");
  //     return;
  //   } else {
  //     if (password === confirm) {
  //       const result = await authService.registerUser(
  //         username,
  //         password,
  //         name,
  //         email,
  //         phone,
  //         birthdate
  //       );
  //       if (result.success) {
  //         console.log("user: ", result.user);
  //         toast.success("Successfully Registered!");
  //         dispatch(handleRegisterClose());
  //         dispatch(handleLoginOpen());
  //       } else {
  //         toast.error("An error occured while registering user.");
  //       }
  //     } else {
  //       toast.error("Password does not match.");
  //     }
  //   }
  // };

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
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="auth-container flex flex-col gap-2 w-full ">
          <div className="flex flex-col gap-3 justify-between items-center">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Name is required",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
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
                  error={error !== undefined}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "email is required",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
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
                  error={error !== undefined}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "phone is required",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Phone"
                  variant="outlined"
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
                  error={error !== undefined}
                />
              )}
            />
            {/* TODO: INSERT INPUT VALIDATION HERE AND THEN SUBMIT */}
            <Controller
              name="birthdate"
              control={control}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ width: "100%" }}
                  >
                    <DatePicker
                      {...field}
                      label="Birthdate"
                      slotProps={{ textField: { fullWidth: true } }}
                      value={field.value}
                      inputRef={field.ref}
                      onChange={(date) => {
                        field.onChange(dayjs(date).format("YYYY-MM-DD"));
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
            />
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "phone is required",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Username"
                  variant="outlined"
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
                  error={error !== undefined}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "phone is required",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    {...field}
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
                    label="Password"
                    error={error !== undefined}
                  />
                </FormControl>
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "phone is required",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="password">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="confirmPassword"
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirmPassword visibility"
                          onClick={handleClickShowConfirmedPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    name="confirmPassword"
                    label="confirmPassword"
                    error={error !== undefined}
                  />
                </FormControl>
              )}
            />
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
