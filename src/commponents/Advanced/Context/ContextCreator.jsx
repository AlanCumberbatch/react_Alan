import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: 'Jone',
    email: '1231232@12.com',
    dob:'01/01/2000'
  })
  return <UserContext.Provider value={{ user }}>{ children }</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);// created, but need the app to be aware of this