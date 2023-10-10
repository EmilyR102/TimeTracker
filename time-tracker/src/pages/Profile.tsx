import React, { useEffect, useState } from "react";
// import useUserStore from "../useUserStore";
// import { error } from "console";

export default function Profile() {
  interface userDataInterface {
    createdAt: string;
    emailVerified: boolean;
  }

  const [user_data, setUserData] = useState<userDataInterface>({
    createdAt: "",
    emailVerified: false,
  });

  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response.json());
          return response.json();
        } else throw response;
      })
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
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
