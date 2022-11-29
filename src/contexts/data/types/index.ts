import React from "react";

export interface IDataContext {
  data: {}[];
  setData: React.Dispatch<React.SetStateAction<{}[]>>;
}

export type TChildren = JSX.Element | JSX.Element[];
