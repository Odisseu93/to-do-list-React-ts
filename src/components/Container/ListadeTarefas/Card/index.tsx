import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import trashIcon from "../Card/icons8-waste-24.png";
import { ICard, remove, update } from "./../../../../redux/slice";
import { Tarefa } from "./styles";

export interface ICardProps {
  id?: string;
  titulo: string;
  descricao: string;
  status: string;
}

export const Card = ({ id, titulo, descricao, status }: ICardProps) => {
  const statusRef = useRef<null | HTMLSelectElement>(null);
  const tituloRef = useRef<null | HTMLInputElement>(null);
  const descricaoRef = useRef<null | HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const cards = useSelector((state: any) => state.todos);

  function handleOnChange(e: React.FormEvent<HTMLDivElement>) {
    const idTarget = e.currentTarget.id;

setTimeout(() => {
  dispatch(update({
        id: String(idTarget),
        titulo: tituloRef.current?.value,
        descricao: descricaoRef.current?.value,
        status: statusRef.current?.value,}))
}, 1000);
  
    return;
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(remove({ id: String(e.currentTarget.parentElement?.id) }));
    return;
  }

  useEffect(() => {
    tituloRef.current!.value = titulo;
    descricaoRef.current!.value = descricao;
  }, []);

  return (
    <Tarefa
      id={id}
      onChange={handleOnChange}
      styleStatus={
        cards.find((item: ICard) => item.id === id)
          ? cards.find((item: ICard) => item.id === id).status
          : null
      }
    >
      <input
        type="text"
        className="titulo"
        ref={tituloRef}
        maxLength={50}
      />
      <textarea
        className="descricao"
        ref={descricaoRef}
        maxLength={200}
      />
      <b>Status </b>
      <select id="status" className="select-status" ref={statusRef}>
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
