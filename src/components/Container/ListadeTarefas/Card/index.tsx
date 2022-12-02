import { useData } from "../../../../contexts/data/useData";
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
  const { data, setData } = useData();

  function handleSelect() {
    setStatusStyle(() => statusRef.current!.value);

    return;
  }

  function handleOnChange() {
    setStatusStyle(() => statusRef.current!.value);

    return;
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    // console.log(e.currentTarget.parentElement?.id);

    const deletIndex = data.findIndex(
      (item) => item.id == e.currentTarget.parentElement?.id
    );

    // data.splice(deletIndex, 1);

    const arr = data.filter(
      (item) => item.id !== e.currentTarget.parentElement?.id
    );
    setData(() => arr);
    data.length === 1 && setData(() => [{}]);
    console.log(data);

    return;
  }

  useEffect(() => {
    setStatusStyle(() => statusRef.current!.value);
  }, [Tarefa]);

  return (
    <Tarefa id={id} onChange={handleOnChange} styleStatus={statusStyle}>
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
      <button
        id="bntApagarTarefa"
        className="bnt-apagar-tarefa"
        onClick={handleDelete}
      >
        Apagar
      </button>
    </Tarefa>
  );
};
