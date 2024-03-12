import * as React from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
import login_modal_banner from "../Assets/login-modal-banner.webp";

//API
import authService from "../Services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterOpen, handleLoginClose } from "../Slice/ModalSlice";

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

export default function Login() {
  const dispatch = useDispatch();

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const username = data.username;
    const password = data.password;

    // console.log(username, password);

    const result = await authService.loginUser(username, password);
    if (result && result.success) {
      Cookies.set("token", result.loginAuthenticate, { expires: 1 });
      window.location.reload();
    } else {
      toast.error("Invalid Credentials.");
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex rounded-lg bg-white">
      <div className="hidden lg:block">
        <img src={login_modal_banner} className="h-full rounded-s-lg" />
      </div>
      <div className="  px-5 py-8 flex flex-col justify-center items-center gap-5 w-full">
        <div className="header-container flex flex-col justify-center items-center mb-5">
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
            className="text-[1.5rem] lg:text-[2rem]"
          >
            Platform Login
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
            Welcome!
          </Typography>
        </div>
        <Box
          className="input-container flex flex-col justify-center items-center  w-full "
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="auth-container flex flex-col w-full ">
            <div className="flex flex-col gap-5 justify-between items-center">
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
                      helperText={error ? error.message : ""}
                    />
                  </FormControl>
                )}
              />
            </div>
            <div className="flex justify-between items-center">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={
                  <Typography className="font-[Poppins] text-xs lg:text-sm">
                    Remember Me
                  </Typography>
                }
              />
              <Link
                href="#"
                variant="body2"
                className="font-[Poppins] no-underline text-xs"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="button-container flex flex-col justify-center items-center w-full ">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="bg-black my-3 py-3 bg-gradient-to-r from-indigo-200 via-blue-500 to-indigo-500 text-xs lg:text-base"
            >
              Sign In
            </Button>
            <Link
              href="/#"
              variant="body2"
              className="font-[Poppins] no-underline text-xs"
              onClick={() => {
                dispatch(handleRegisterOpen());
                dispatch(handleLoginClose());
              }}
            >
              Don't have an account yet? <span>Join Now!</span>
            </Link>
          </div>
        </Box>
        {/* <div className="login-footer border-2 border-red-600 h-36 rounded-lg w-full  flex justify-center items-center">
          login footer
        </div> */}
      </div>
    </div>
  );
}
