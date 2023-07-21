import React, { useContext } from "react";
import UserContext from "../Contexts";

export default function InputUserPass() {
  const user = useContext(UserContext)
  let {username, password, setUsername, setPassword} = user
  
  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
      </form>
      <form>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
      </form>
    </div>
  );
}
