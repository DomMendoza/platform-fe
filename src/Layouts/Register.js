import React, { useState } from "react";
import { toast } from "react-toastify";
import authService from "../Services/auth.service";
import dayjs from "dayjs";
import Cookies from "js-cookie";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useForm, Controller } from "react-hook-form";
import {
  handleRegisterClose,
  handleLoginOpen,
  handleOtpOpen,
} from "../Slice/ModalSlice";
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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      // name: null,
      email: null,
      phone: null,
      // birthdate: null,
      username: null,
      password: null,
      confirmPassword: null,
    },
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    try {
      // const name = data.name;
      const email = data.email;
      const phone = data.phone;

      console.log("phone", phone);
      // const birthdate = data.birthdate;
      const username = data.username;
      const password = data.password;
      const confirmPassword = data.confirmPassword;

      if (!isChecked) {
        toast.error("Please accept the Terms of Use and Privacy Policy.");
        return;
      }

      if (password === confirmPassword) {
        const result = await authService.registerUser(
          username,
          password,
          // name,
          email,
          phone
          // birthdate
        );
        if (result && result.success) {
          const { player_id } = result.user;
          Cookies.set("player_id", player_id, { expires: 1 });
          toast.success("Successfully Registered!");
          dispatch(handleRegisterClose());
          // dispatch(handleOtpOpen());
        } else {
          toast.error("An error occured while registering user.");
        }
      } else {
        toast.error("Password does not match.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid phone number");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmedPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmedPassword = () =>
    setShowConfirmedPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" bg-white p-6 lg:p-8 rounded-lg flex flex-col justify-center items-center gap-5">
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
          }}
          className="text-[1.5rem] lg:text-[2rem]"
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
        className="input-container flex flex-col justify-center items-center gap-2 w-full "
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-3 lg:gap-4 place-items-center w-full ">
          {/* <Controller
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
                helperText={error ? error.message : ""}
              />
            )}
          /> */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
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
                helperText={error ? error.message : ""}
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
              pattern: {
                value: /^09[0-9]{9}$/,
                message: "Invalid phone number",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="09**********"
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
                helperText={error ? error.message : ""}
              />
            )}
          />
          {/* <Controller
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
          /> */}
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "username is required",
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
                helperText={error ? error.message : ""}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
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
                  helpertext={error ? error.message : ""}
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
                message: "confirm your password",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
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
                  helperText={error ? error.message : ""}
                />
              </FormControl>
            )}
          />
        </div>
        <div className="flex justify-start items-center mt-2 w-full">
          <Checkbox
            style={{ padding: 0 }}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="text-xs font-[Poppins]">
            I am at least 21 years of age and I accept the{" "}
            <a href="#" className="text-blue-500 underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
          </p>
        </div>

        <div className="button-container flex flex-col justify-center items-center w-full ">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-black my-3 py-3 bg-gradient-to-r from-indigo-200 via-blue-500 to-indigo-500 text-xs lg:text-base"
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
