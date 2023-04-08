import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ButtonShowModal } from "./components/ButtonShowModal";
import { Card } from "./components/Container/ListadeTarefas/Card";
import { ListadeTarefas } from "./components/Container/ListadeTarefas/ListadeTarefas";
import { Container } from "./components/Container/styles";
import Form from "./components/Form";
import { ICard } from "./redux/slice";
import GlobalStyle from "./styles/global";
import { ModalContext } from "./userContext";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const todos = useSelector((state: any) => state.todos);
  const [data, setdata] = useState(todos);

  useEffect(() => {
    setdata(todos);
  }, [todos]);

  return (
    <div className="App">
      <GlobalStyle />
      <ModalContext.Provider value={[openModal, setOpenModal]}>
        <ButtonShowModal handleClick={() => setOpenModal(() => true)} />
        <Form />
      </ModalContext.Provider>
      <Container>
        <ListadeTarefas>
          {data
            ? data
                .slice(1)
                .map(
                  ({ id, titulo, descricao, status }: ICard) => {
                    return (
                      <Card
                        key={crypto.randomUUID()}
                        id={id}
                        titulo={titulo}
                        descricao={descricao}
                        status={status}
                      />
                    );
                  }
                )
            : null}
        </ListadeTarefas>
      </Container>
    </div>
  );
}

export default App;
