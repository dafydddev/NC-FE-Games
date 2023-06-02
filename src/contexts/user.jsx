import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // hard coded user
  const user = { username: "jessjelly" };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
