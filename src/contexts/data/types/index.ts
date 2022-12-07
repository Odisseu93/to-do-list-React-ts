import React from "react";

interface IProps {
  id: string | undefined;
  titulo: string | undefined;
  descricao: string | undefined;
  status: string | undefined;
}

const data: IProps = {} as IProps;

export interface IDataContext {
  data: IProps[];
  setData: React.Dispatch<React.SetStateAction<{}[]>>;
}

export type TChildren = JSX.Element | JSX.Element[];
