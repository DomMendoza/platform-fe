import * as React from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");

    const result = await authService.loginUser(username, password);
    if (result.success) {
      Cookies.set("token", result.loginAuthenticate, { expires: 1 });
      window.location.reload();
    } else {
      toast.error("Invalid Credentials.");
    }
  };

  return (
    <div className=" bg-white px-5 py-8 rounded-lg flex flex-col justify-center items-center gap-5">
      <div className="header-container flex flex-col justify-center items-center mb-5">
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            fontSize: "2rem",
          }}
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
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="auth-container flex flex-col w-full ">
          <div className="flex flex-col gap-5 justify-between items-center">
            <TextField
              required
              fullWidth
              inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
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
          </div>
          <div className="flex justify-between items-center">
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Typography
                  sx={{ fontSize: 14, fontFamily: "Poppins, sans serif" }}
                >
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
            className="bg-black my-3 py-3 bg-gradient-to-r from-indigo-500 to-pink-500"
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

      <div className="login-footer border-2 border-red-600 h-36 rounded-lg w-full  flex justify-center items-center">
        login footer
      </div>
    </div>
  );
}
