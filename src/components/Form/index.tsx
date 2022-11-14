import { useRef, useEffect, useState, ChangeEvent, useContext } from "react";
import { ModalContext } from "../../userContext";
import { atualizarLocalStorage } from "../../storage/localStorage";
import { Modal } from "./styles";

export const dataFromStorage = JSON.parse(localStorage.data);

function Form() {
  const TituloRef = useRef<null | HTMLInputElement>(null);
  const DescricaoRef = useRef<null | HTMLTextAreaElement>(null);

  const [openModal, setOpenModal] = useContext(ModalContext);
  const [contadorTitulo, setContadorTitulo] = useState(0);
  const [contadorDesc, setContadorDesc] = useState(0);
  const [statusValue, setStatusValue] = useState<string>("");
  const [dataState, setDataState] = useState<Array<any>>(dataFromStorage);

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
    if (localStorage.data) {
      setDataState([
        ...dataFromStorage,
        {
          titulo: TituloRef.current!.value,
          descricao: DescricaoRef.current!.value,
          status: statusValue,
        },
      ]);
    } else {
      setDataState([
        {
          titulo: TituloRef.current!.value,
          descricao: DescricaoRef.current!.value,
          status: statusValue,
        },
      ]);
    }
  };

  useEffect(() => {
    if (dataState !== undefined) {
      atualizarLocalStorage(dataState);
    }
    // try {
    //   // console.log(dataState);
    //   for (let tarefa of dataState) console.log(tarefa.titulo);
    // } catch (error) {
    //   console.error(error);
    // }
  }, [dataState]);

  return (
    <Modal className="modal" open={typeof "boolean" && openModal}>
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
            onClick={() => setOpenModal(() => false)}
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
