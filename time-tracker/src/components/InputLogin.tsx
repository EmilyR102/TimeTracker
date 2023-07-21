import { useEffect } from "react";
import useUserStore from "../useUserStore";
import "../App.css";

export default function InputUserPass() {

  const {email, password, setEmail, setPassword} = useUserStore();

  useEffect(() => console.log({email}), [email])
  
  return (
    <div className="InputLogin">
      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            className="login_info"
            id="email"
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
        <div>
          <button>Signup</button>
        </div>
      </form>
    </div>
  );
}
