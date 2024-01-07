import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Josh",
});

export default UserContext;
