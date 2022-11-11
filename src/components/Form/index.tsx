import { useRef, useEffect, useState, ChangeEvent } from "react";
import { atualizarLocalStorage } from "../../storage/localStorage";
import { Modal } from "./styles";

function Form() {
  const TituloRef = useRef<null | HTMLInputElement>(null);
  const DescricaoRef = useRef<null | HTMLTextAreaElement>(null);

  const [estahAberto, setEstahAberto] = useState<boolean>(true);
  const [contadorTitulo, setContadorTitulo] = useState(0);
  const [contadorDesc, setContadorDesc] = useState(0);
  const [statusValue, setStatusValue] = useState<string>("");
  const [data, setData] = useState<object | undefined>();

  const handleOnchangeTitulo = () => {
    setContadorTitulo(TituloRef.current!.value.length);
  };

  const handleOnchangeDesc = () => {
    setContadorDesc(DescricaoRef.current!.value.length);
  };

  const handleOnchangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const input = e.currentTarget.value;
    setStatusValue(input);
  };

  const handleSubmit = () => {
    setData({
      titulo: TituloRef.current!.value,
      descricao: DescricaoRef.current!.value,
      status: statusValue,
    });
  };

  useEffect(() => {
    if (data !== undefined) {
      atualizarLocalStorage(data);
    }
    try {
      for (let i = 0; i < localStorage.length; i++) {
        console.log(
          "Título: " +
            JSON.parse(localStorage.getItem("card" + i)!.toString()).titulo,
          "Descrição: " +
            JSON.parse(localStorage.getItem("card" + i)!.toString()).descricao,
          "Status: " +
            JSON.parse(localStorage.getItem("card" + i)!.toString()).status
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [data]);

  return (
    <Modal className="modal" open={estahAberto}>
      <form>
        <label htmlFor="titulo" className="lbls lbl-titulo">
          Título
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          ref={TituloRef}
          onChange={handleOnchangeTitulo}
          placeholder=" Título da tarefa"
          maxLength={50}
        />
        <span>
          <span id="contadorTitulo">{contadorTitulo}</span> /50
        </span>
        <label htmlFor="descricao" className="lbls lbl-descricao">
          Descrição
        </label>
        <textarea
          rows={5}
          cols={40}
          id="descricao"
          name="descricao"
          ref={DescricaoRef}
          onChange={handleOnchangeDesc}
          placeholder=" Uma breve descrição..."
          maxLength={200}
        ></textarea>
        <span>
          <span id="contadorDescricao">{contadorDesc}</span> /200
        </span>
        <div className="btns">
          <input
            type="button"
            id="btnCadastrarTarefas"
            name="cadastrarTarefas"
            onClick={handleSubmit}
            value="Enviar"
          />
          <input
            type="button"
            id="btnCancelar"
            name="cancelar"
            onClick={() => setEstahAberto(false)}
            value="Cancelar"
          />
        </div>
        <section className="status">
          <b>Status: </b>
          <select id="status" onChange={(e) => handleOnchangeSelect(e)}>
            <option value="">-- Selecione um status --</option>
            <option value="A Fazer">A Fazer</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
        </section>
      </form>
    </Modal>
  );
}

export default Form;
