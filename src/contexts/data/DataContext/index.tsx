import React from "react";
import { IDataContext } from "../types";

const DataContext = React.createContext<IDataContext>({} as IDataContext);

export { DataContext };
