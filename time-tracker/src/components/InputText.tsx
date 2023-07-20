import React, { useContext } from "react";
import UserContext from "../Contexts";

export default function InputText() {
  const user = useContext(UserContext)
  let username = user.username
  let password = user.password
  
  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" value={username}></input>
      </form>
      <form>
        <label htmlFor="password">Password: </label>
        <input id="password" type="text" value={password}></input>
      </form>
    </div>
  );
}
