import { useEffect } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../useUserStore";
import "../index.css";
import { assert } from "console";
import Button from "react-bootstrap/esm/Button";

interface InputUserPassProps {
  authentication: "signup" | "login";
}

export default function InputUserPass({ authentication }: InputUserPassProps) {
  const { email, password, setEmail, setPassword } = useUserStore();

  useEffect(() => console.log({ email }), [email]);

  const handleButtonClick = async () => {
    const response = fetch("http://localhost:5000/" + authentication, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        email: email,
        password: password,
      }),
    });

    if ((await response).redirected) {
      //Redirect to the redirect url
      window.location.href = (await response).url;
    } else {
      //return data from response
      const data = (await response).json();
      console.log(data);
    }
  };

  const otherAuth = authentication == "login" ? "signup" : "login";

  return (
    <div className="input_user_pass">
      <form action="http://localhost:5000/login" method="POST">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            className="field"
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            className="field"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="submit_btn">
          <input type="submit" onClick={handleButtonClick}></input>
        </div>
        <div className="other_auth_btn">
          <Button href={"/" + otherAuth}>{otherAuth}</Button>
        </div>
      </form>
    </div>
  );
}
