import useUserStore from "../useUserStore";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";

interface InputUserPassProps {
  authentication: "signup" | "login";
}

export default function InputUserPass({ authentication }: InputUserPassProps) {
  const { email, password, setEmail, setPassword } = useUserStore();
  const url = "http://localhost:5000/" + authentication;

  const handleButtonClick = async () => {
    axios
      .post(url, new URLSearchParams({ email: email, password: password }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        if (response.data.redirected) window.location.href = response.data.url;
        else console.log(response.data);
      });
  };

  return (
    // added onSubmit to prevent posting twice to server
    <div className="input_user_pass">
      <form action={url} method="POST" onSubmit={(e) => e.preventDefault()}>
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
      </form>
    </div>
  );
}
