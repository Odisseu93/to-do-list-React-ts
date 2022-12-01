import { useEffect, useRef, useState } from "react";
import { Tarefa } from "./styles";

export interface ICardProps {
  id: string;
  titulo: string;
  descricao: string;
  status: string;
}

export const Card = ({ id, titulo, descricao, status }: ICardProps) => {
  const statusRef = useRef<null | HTMLSelectElement>(null);
  const [statusStyle, setStatusStyle] = useState(status);

  function handleSelect() {
    setStatusStyle(() => statusRef.current!.value);

    return;
  }

  useEffect(() => {
    console.log(statusStyle);
  }, [statusStyle]);

  return (
    <Tarefa id={id} styleStatus={statusStyle}>
      <div
        className="titulo"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {titulo}
      </div>
      <div
        className="descricao"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {descricao}
      </div>
      <b>Status: </b>
      <select id="status" onChange={handleSelect} ref={statusRef}>
        <option value="default" selected={status === "default" ? true : false}>
          -- Selecione um status --
        </option>
        <option value="afazer" selected={status === "afazer" ? true : false}>
          A Fazer
        </option>
        <option value="fazendo" selected={status === "fazendo" ? true : false}>
          Em Andamento
        </option>
        <option value="feito" selected={status === "feito" ? true : false}>
          Concluído
        </option>
      </select>
      <button id="bntApagarTarefa" className="bnt-apagar-tarefa">
        Apagar
      </button>
    </Tarefa>
  );
};
