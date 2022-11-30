import { Tarefa } from "./styles";

export interface ICardProps {
  id: string;
  titulo: string;
  descricao: string;
  status: string;
}

export const Card = ({ id, titulo, descricao, status }: ICardProps) => {
  return (
    <Tarefa id={id}>
      <div className="titulo" contentEditable="true">
        {titulo}
      </div>
      <div className="descricao" contentEditable="true">
        {descricao}
      </div>
      <b>Status: </b>
      <select id="status">
        <option value="" selected={status === "" ? true : false}>
          -- Selecione um status --
        </option>
        <option value="A Fazer" selected={status === "A Fazer" ? true : false}>
          A Fazer
        </option>
        <option
          value="Em Andamento"
          selected={status === "Em Andamento" ? true : false}
        >
          Em Andamento
        </option>
        <option
          value="Concluído"
          selected={status === "Concluído" ? true : false}
        >
          Concluído
        </option>
      </select>
      <button id="bntApagarTarefa" className="bnt-apagar-tarefa">
        Apagar
      </button>
    </Tarefa>
  );
};
