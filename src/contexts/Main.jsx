import { createContext, useContext, useState } from "react";

import data from "data.json";

const MainContext = createContext();

export const Provider = ({ children }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => setValue(value);

  const filteredData = data.filter((element) =>
    element.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <MainContext.Provider value={{ value, filteredData, handleChange }}>
      {children}
    </MainContext.Provider>
  );
};

const useMain = () => useContext(MainContext);
export default useMain;
