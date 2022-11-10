import Form from "./components/Form";
import { Card } from "./components/Card";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Form />
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
    </div>
  );
}

export default App;
