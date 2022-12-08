import React from "react";

export interface IDataContext {
  data:
    | {
        id: string;
        titulo: string | undefined;
        descricao: string | undefined;
        status: string | undefined;
      }[]
    | any;
  setData: React.Dispatch<React.SetStateAction<{}[]>>;
}

export type TChildren = JSX.Element | JSX.Element[];
