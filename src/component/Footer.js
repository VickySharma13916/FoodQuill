import React, { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Footer = () => {
  const user = useContext(UserContext);
  return (
    <div className="flex justify-center pb-4">
      This website is developed by {user.name} - {user.email}
    </div>
  );
};

export default Footer;
