import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <div>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
};

export default Profile;
