import { useContext } from "react";
import { DataContext } from "../DataContext";

const useData = () => {
    const context = useContext(DataContext);
  
    return context;
  };
  export {useData};