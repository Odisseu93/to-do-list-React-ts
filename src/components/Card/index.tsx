// import { atualizarLocalStorage } from "./storage/localStorage";
import { Tarefa } from "./styles";

interface Props {
  titulo: string;
  descricao: string;
}

export const Card = ({ titulo, descricao }: Props) => {
  return (
    <Tarefa
    //   onInput={()=> atualizarLocalStorage}
    >
      <div className="titulo" contentEditable>
        {titulo}
      </div>
      <div className="descricao" contentEditable>
        {descricao}
      </div>
      <b>Status: </b>
      <select id="status">
        <option value="">-- Selecione um status --</option>
        <option value="A Fazer">A Fazer</option>
        <option value="Em Andamento">Em Andamento</option>
        <option value="Concluído">Concluído</option>
      </select>
      <button id="bntApagarTarefa" className="bnt-apagar-tarefa">
        Apagar
      </button>
    </Tarefa>
  );
};
