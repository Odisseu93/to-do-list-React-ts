import Form, { dataFromStorage } from "./components/Form";
import { useState } from "react";
import GlobalStyle from "./styles/global";
import { ButtonShowModal } from "./components/ButtonShowModal";
import { Container } from "./components/Container/styles";
import { ListadeTarefas } from "./components/Container/ListadeTarefas/ListadeTarefas";
import { Card } from "./components/Container/ListadeTarefas/Card";
import { ModalContext } from "./userContext";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="App">
      <GlobalStyle />
      <ModalContext.Provider value={[openModal, setOpenModal]}>
        <ButtonShowModal handleClick={() => setOpenModal(() => true)} />
        <Form />
      </ModalContext.Provider>
      <Container>
        <ListadeTarefas>
          {dataFromStorage.map((tarefa: any, index: number) => {
            return (
              <Card
                key={index}
                titulo={tarefa.titulo}
                descricao={tarefa.descricao}
              />
            );
          })}
        </ListadeTarefas>
      </Container>
    </div>
  );
}

export default App;
