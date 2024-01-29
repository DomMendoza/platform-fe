import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import { postLogin } from "../services/postLogin";
// import { postAuditLog } from "../services/postAuditLog";
import { toast } from "react-toastify";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";

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

const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmedPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmedPassword = () =>
    setShowConfirmedPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const phone = data.get("phone");
    const password = data.get("password");
    const confirm = data.get("confirmPassword");

    console.log("username: ", username);
    console.log("phone: ", phone);
    console.log("password: ", password);
    console.log("confirm: ", confirm);

    // const result = await postLogin(username, password);

    // if (result.admin) {
    //   localStorage.setItem("username", result.admin.username);
    //   localStorage.setItem("user_id", result.admin.user_id);

    //   await postAuditLog(
    //     result.admin.user_id,
    //     result.admin.username,
    //     "logged in",
    //     "Login"
    //   );
    //   Cookies.set("token", "admin", { expires: 1 });
    //   navigate("/reports/ggr");
    //   toast.success("Successfully logged in.");
    // } else {
    //   toast.error("Invalid Credentials.");
    // }
  };

  return (
    <div className=" bg-white px-5 py-8 rounded-lg flex flex-col justify-center items-center gap-5">
      <div className="header-container flex flex-col mb-5 justify-center items-center">
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
                  fontFamily: "Poppins, sans serif",
                },
              }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              required
              fullWidth
              inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
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
          {/* <div className="flex justify-between items-center">
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
          </div> */}
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
          {/* <Link
            href="/#"
            variant="body2"
            className="font-[Poppins] no-underline text-xs"
          >
            Don't have an account yet? <span>Join Now!</span>
          </Link> */}
        </div>
      </Box>

      <div className="login-footer border-2 border-red-600 h-24 rounded-lg w-full  flex justify-center items-center">
        login footer
      </div>
    </div>
  );
}
