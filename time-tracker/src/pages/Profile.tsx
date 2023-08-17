import React, { useEffect, useState } from "react";
import useUserStore from "../useUserStore";

export default function Profile() {
  interface userDataInterface {
    createdAt: string;
    emailVerified: boolean;
  }

  const [user_data, setUserData] = useState<userDataInterface>({createdAt:"", emailVerified:false});

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {setUserData(data); console.log(user_data)})
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      <p>This is the Profile page!</p>
      <p>User created at: {user_data.createdAt}</p>
      <p>Is the user verified: {user_data.emailVerified.toString()}</p>
    </div>
  );
}
