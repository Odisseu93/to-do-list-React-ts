import { useData } from "../../../../contexts/data/useData";
import { useEffect, useRef, useState } from "react";
import { Tarefa } from "./styles";
import trashIcon from "../Card/icons8-waste-24.png";

export interface ICardProps {
  id: string;
  titulo: string;
  descricao: string;
  status: string;
}

export const Card = ({ id, titulo, descricao, status }: ICardProps) => {
  const statusRef = useRef<null | HTMLSelectElement>(null);
  const tituloRef = useRef<null | HTMLInputElement>(null);
  const descricaoRef = useRef<null | HTMLTextAreaElement>(null);
  const [statusStyle, setStatusStyle] = useState(status);
  const { data, setData } = useData();

  function handleSelect() {
    setStatusStyle(() => statusRef.current!.value);

    return;
  }

  function handleTitleOnInput(e: React.FormEvent<HTMLInputElement>) {
    tituloRef.current!.value = e.currentTarget.value;
  }

  function handleDescOnInput(e: React.FormEvent<HTMLTextAreaElement>) {
    descricaoRef.current!.value = e.currentTarget.value;
  }

  function handleOnChange(e: React.FormEvent<HTMLDivElement>) {
    setStatusStyle(() => statusRef.current!.value);
    const idTarget = e.currentTarget.id;

    const targetIndex = data.findIndex((item) => item.id == idTarget);

    data.splice(targetIndex, 1, {
      id: idTarget,
      titulo: tituloRef.current?.value,
      descricao: descricaoRef.current?.value,
      status: statusRef.current?.value,
    });

    setData([...data]);

    return;
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    const updateData = data.filter(
      (item) => item.id !== e.currentTarget.parentElement?.id
    );
    setData(() => updateData);
    data.length === 1 && setData(() => [{}]);

    return;
  }

  useEffect(() => {
    tituloRef.current!.value = titulo;
    descricaoRef.current!.value = descricao;
  }, []);

  return (
    <Tarefa id={id} onChange={handleOnChange} styleStatus={statusStyle}>
      <input
        type="text"
        className="titulo"
        ref={tituloRef}
        onInput={handleTitleOnInput}
        maxLength={50}
      />
      <textarea
        className="descricao"
        ref={descricaoRef}
        onInput={handleDescOnInput}
        maxLength={200}
      />
      <b>Status </b>
      <select
        id="status"
        onChange={handleSelect}
        className="select-status"
        ref={statusRef}
      >
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
        <img src={trashIcon} alt="ícone de uma lixeira" />
      </button>
    </Tarefa>
  );
};
