import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user_data, setUserData] = useState(null);
  const url = "http://localhost:5000/profile";
  useEffect(() => {
    axios.get(url).then((response) => setUserData(response.data));
  }, []);

  console.log("Inside Profile.tsx. Printing user_data:\n", user_data);

  return (
    <div>
      <h1>This is the Profile page!</h1>
      <p>User data:</p>
      <p>{user_data}</p>
    </div>
  );
}
