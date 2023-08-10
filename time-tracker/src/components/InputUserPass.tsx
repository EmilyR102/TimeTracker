import { useEffect } from "react";
import useUserStore from "../useUserStore";
import Button from "react-bootstrap/esm/Button";

interface InputUserPassProps {
  authentication: "signup" | "login";
}

export default function InputUserPass({ authentication }: InputUserPassProps) {
  const { email, password, setEmail, setPassword } = useUserStore();

  useEffect(() => console.log({ email }), [email]);
  useEffect(() => console.log({ password }), [password]);

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

  const otherAuth = authentication == "login" ? "Signup" : "Login";

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
        <div>
          <Button
            variant="outline-light"
            as="input"
            type="submit"
            value="Submit"
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Button href={"/" + otherAuth.toLowerCase()}>{otherAuth}</Button>
        </div>
      </form>
    </div>
  );
}
