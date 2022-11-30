import { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import { ButtonShowModal } from "./components/ButtonShowModal";
import { Container } from "./components/Container/styles";
import { ListadeTarefas } from "./components/Container/ListadeTarefas/ListadeTarefas";
import { Card } from "./components/Container/ListadeTarefas/Card";
import { ModalContext } from "./userContext";
import Form from "./components/Form";
import { useData } from "./contexts/data/useData";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const { data, setData } = useData();

  return (
    <div className="App">
      <GlobalStyle />
      <ModalContext.Provider value={[openModal, setOpenModal]}>
        <ButtonShowModal handleClick={() => setOpenModal(() => true)} />
        <Form />
      </ModalContext.Provider>
      <Container>
        <ListadeTarefas>
          {data.map(({ id, titulo, descricao, status }: any, index: number) => {
            if (index > 0) {
              return (
                <Card
                  key={index}
                  id={id}
                  titulo={titulo}
                  descricao={descricao}
                  status={status}
                />
              );
            } else null;
          })}
        </ListadeTarefas>
      </Container>
    </div>
  );
}

export default App;
