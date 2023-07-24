import { useEffect } from "react";
import useUserStore from "../useUserStore";
import "../App.css";

export default function InputUserPass() {
  const { email, password, setEmail, setPassword } = useUserStore();

  useEffect(() => console.log({ email }), [email]);

  const handleButtonClick = async () => {
    const response = fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        email: email,
        password: password,
      }),
    });

    if ((await response).redirected){
      //Redirect to the redirect url
      window.location.href = (await response).url;
    } else {
      //return data from response
      const data = (await response).json();
      console.log(data);
    }
  };

  return (
    <div className="InputLogin">
      <form action="http://localhost:5000/login" method="POST">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            className="login_info"
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
            className="login_info"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
        <div>
          <button onClick={handleButtonClick}>Signup</button>
        </div>
      </form>
    </div>
  );
}
