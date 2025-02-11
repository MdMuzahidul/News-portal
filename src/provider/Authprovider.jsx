import { createContext } from "react";

const AuthContext = createContext();

const Authprovider = () => {
  const { user, setUser } = {
    name: "muzhid",
    email: "xyz@gmail.com",
  };
  return <AuthContext.Provider></AuthContext.Provider>;
};

export default Authprovider;
