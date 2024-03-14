import { createContext } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ username: "ghifary" }}>
      {children}
    </UserContext.Provider>
  );
};
