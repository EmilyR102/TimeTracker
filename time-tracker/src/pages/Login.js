import React, { useState, useEffect } from "react";
import login_signup from "../styles/Login.css";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  signup_color: {
    primary: {
      main: "#ffffff",
      darker: "#B2BEB5",
    },
  },
});

function Login() {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="Login">
      <div className="Login-header">
        <h1>TimeTracker</h1>
        <div id="entry">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
              console.log(username);
            }}
          />
        </div>
        <div id="entry">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
        </div>

        <button
          id = "signup"
          variant="text"
          color="signup_color"
          onClick={() => {
            console.log("signup instead");
          }}
        >
          Signup
        </button>

        {/* <Button
          variant="text"
          color="signup_color"
          onClick={() => {
            console.log("signup instead");
          }}
        >
          Signup
        </Button> */}
      </div>
    </div>
  );
}

export default Login;
