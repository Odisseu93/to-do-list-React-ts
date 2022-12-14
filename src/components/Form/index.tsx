import { useRef, useEffect, useState, ChangeEvent, useContext } from "react";
import { ModalContext } from "../../userContext";
import { atualizarLocalStorage } from "../../storage/localStorage";
import { Modal } from "./styles";
import { useData } from "../../contexts/data/useData";

// const dataFromStorage:any
export let dataFromStorage: any;
localStorage.data ? (dataFromStorage = JSON.parse(localStorage.data)) : {};

function Form() {
  const tituloRef = useRef<null | HTMLInputElement>(null);
  const descricaoRef = useRef<null | HTMLTextAreaElement>(null);
  const statusRef = useRef<null | HTMLSelectElement>(null);

  const [openModal, setOpenModal] =
    useContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>(
      ModalContext
    );
  const [contadorTitulo, setContadorTitulo] = useState(0);
  const [contadorDesc, setContadorDesc] = useState(0);
  const [statusValue, setStatusValue] = useState<string>("");
  const { data, setData } = useData();

  const handleOnchangeTitulo = () => {
    setContadorTitulo(tituloRef.current!.value.length);
  };

  const handleOnchangeDesc = () => {
    setContadorDesc(descricaoRef.current!.value.length);
  };

  const handleOnchangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const input = e.currentTarget.value;
    setStatusValue(input);
  };

  window.onload = () => {
    if (localStorage.data) {
      setData([...dataFromStorage]);
      console.log(data);
    }
  };

  const handleSubmit = () => {
    const token = Math.random().toString(36).substring(2);
    setData([
      ...data,
      {
        id: token,
        titulo: tituloRef.current!.value,
        descricao: descricaoRef.current!.value,
        status: statusValue,
      },
    ]);
    descricaoRef.current!.value = "";
    tituloRef.current!.value = "";
    statusRef.current!.value = "default";
  };

  useEffect(() => {
    if (data.length > 1) {
      atualizarLocalStorage(data);
    } else atualizarLocalStorage([{}]);
    try {
    } catch (error) {
      console.error(error);
    }
  }, [data]);

  return (
    <Modal className="modal" open={openModal}>
      <form>
        <label htmlFor="titulo" className="lbls lbl-titulo">
          T??tulo
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          ref={tituloRef}
          onChange={handleOnchangeTitulo}
          placeholder=" T??tulo da tarefa"
          maxLength={50}
        />
        <span>
          <span id="contadorTitulo">{contadorTitulo}</span> /50
        </span>
        <label htmlFor="descricao" className="lbls lbl-descricao">
          Descri????o
        </label>
        <textarea
          rows={5}
          cols={40}
          id="descricao"
          name="descricao"
          ref={descricaoRef}
          onChange={handleOnchangeDesc}
          placeholder=" Uma breve descri????o..."
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
          <select
            id="status"
            ref={statusRef}
            onChange={(e) => handleOnchangeSelect(e)}
          >
            <option value="default">-- Selecione um status --</option>
            <option value="afazer">A Fazer</option>
            <option value="fazendo">Em Andamento</option>
            <option value="feito">Conclu??do</option>
          </select>
        </section>
      </form>
    </Modal>
  );
}

export default Form;
