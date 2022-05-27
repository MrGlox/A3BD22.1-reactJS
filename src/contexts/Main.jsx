import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const Provider = ({ children }) => {
  const [test, setTest] = useState("Mon test");

  return (
    <MainContext.Provider value={{ test, setTest }}>
      {children}
    </MainContext.Provider>
  );
};

const useMain = () => useContext(MainContext);
export default useMain;
