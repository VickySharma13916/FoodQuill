import { createContext } from "react";

const UserContext = createContext({
  name: "Vicky",
  email: "Vickysharma13916@gmail.com",
});

UserContext.displayName = "UserContext";

export default UserContext;
