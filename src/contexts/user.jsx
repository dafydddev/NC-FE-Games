import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = { username: "jessjelly" };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
