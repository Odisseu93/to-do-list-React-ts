import Form from "./components/Form";
import { Card } from "./components/Container/Card";
import GlobalStyle from "./styles/global";
import { Container } from "./components/Container/styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Form />
      <Container>
        {Array.from(localStorage).map((item, index) => {
          const titulo = JSON.parse(
            localStorage.getItem("card" + index)!.toString()
          ).titulo;
          const descricao = JSON.parse(
            localStorage.getItem("card" + index)!.toString()
          ).descricao;
          const status = JSON.parse(
            localStorage.getItem("card" + index)!.toString()
          ).status;
          return (
            <Card key={"card" + index} titulo={titulo} descricao={descricao} />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
