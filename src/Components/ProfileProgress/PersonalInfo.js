import React, { useState } from "react";
import { toast } from "react-toastify";
import authService from "../../Services/auth.service";
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
import { handlePersonalInfoClose } from "../../Slice/ModalSlice";
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

export default function PersonalInfo() {
  const dispatch = useDispatch();

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: null,
      phone: null,
      username: null,
      password: null,
      confirmPassword: null,
    },
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    try {
      const name = data.name;
      const email = data.email;
      const phone = data.phone;
      const birthdate = data.birthdate;

      console.log("name: ", name);
      console.log("email: ", email);
      console.log("phone: ", phone);
      console.log("birthdate: ", birthdate);
    } catch (error) {
      console.error(error);
      //   toast.error("Invalid phone number");
    }
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
          Personal Information
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "300",
            fontSize: ".8rem",
          }}
        >
          Complete your personal information.
        </Typography>
      </div>
      <Box
        className="input-container flex flex-col justify-center items-center gap-2 w-full "
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col gap-3 w-full ">
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
                helperText={error ? error.message : ""}
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
        </div>

        <div className="button-container flex flex-col justify-center items-center w-full ">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-black my-3 py-3 bg-gradient-to-r from-indigo-200 via-blue-500 to-indigo-500 text-xs lg:text-base"
          >
            Confirm
          </Button>
        </div>
      </Box>
    </div>
  );
}
