import React, { ReactNode, useContext } from "react";
import { useState } from "react";
import { DataContext } from "../DataContext";

export const DataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState([{}]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
