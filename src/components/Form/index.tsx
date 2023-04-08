import { useRef, useEffect, useState, ChangeEvent, useContext } from "react";
import { ModalContext } from "../../userContext";
import {
  getDataLocalStorage,
  setDataLocalStorage,
} from "../../storage/localStorage";
import { Modal } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { ICard, add } from "./../../redux/slice";

// const dataFromStorage:any
export let dataFromStorage: ICard;
dataFromStorage = getDataLocalStorage("data") ?? {};

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
  const data = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

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


  const handleSubmit = () => {
    const randomID8char = crypto.randomUUID().substring(4);

    dispatch(
      add({
        id: randomID8char,
        titulo: tituloRef.current!.value,
        descricao: descricaoRef.current!.value,
        status: statusValue,
      })
    );
    descricaoRef.current!.value = "";
    tituloRef.current!.value = "";
    statusRef.current!.value = "default";
  };

  return (
    <Modal className="modal" open={openModal}>
      <form>
        <label htmlFor="titulo" className="lbls lbl-titulo">
          Título
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          ref={tituloRef}
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
          ref={descricaoRef}
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
          <select
            id="status"
            ref={statusRef}
            onChange={(e) => handleOnchangeSelect(e)}
          >
            <option value="default">-- Selecione um status --</option>
            <option value="afazer">A Fazer</option>
            <option value="fazendo">Em Andamento</option>
            <option value="feito">Concluído</option>
          </select>
        </section>
      </form>
    </Modal>
  );
}

export default Form;
