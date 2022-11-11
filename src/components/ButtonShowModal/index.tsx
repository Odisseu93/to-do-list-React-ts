import { MouseEventHandler } from "react";
import { Button } from "./styles";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonShowModal = ({ handleClick }: Props) => {
  return <Button onClick={handleClick}>Criar Tarefa</Button>;
};
