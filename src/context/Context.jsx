import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Context = () => {
  return useContext(UserContext);
};
