import styled from "styled-components";

interface ITarefa {
  styleStatus?: string;
}

export const Tarefa = styled.div<ITarefa>`
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 300px;
  height: auto;
  overflow-wrap: break-word;
  box-shadow: 0 0 9px blue;
  background: ${(props) =>
    (props.styleStatus === "default" && "rgba(39, 127, 245, 0.15)") ||
    (props.styleStatus === "afazer" &&
      "linear-gradient(to right, #ff9966, #ff5e62)") ||
    (props.styleStatus === "fazendo" &&
      "linear-gradient(to right, #cac531, #f3f9a7)") ||
    (props.styleStatus === "feito" &&
      "linear-gradient(to right, #00b09b, #96c93d)")};

  .titulo {
    background: #fdeedc;
    text-align: center;
    width: 100%;
    color: #3e3ebf;
    border-radius: 6px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      transform: scale(0.99);
    }
  }

  .descricao {
    margin: 5px 0;
    background: #def1ef;
    border: 1px solid #000;
    padding: 10px;
    line-height: 1.3rem;
    width: 279px;
    font-size: 20px;
    height: 210px;
    cursor: pointer;
    &:hover {
      transform: scale(0.99);
    }
  }

  .select-status {
    width: 80%;
    font-size: 18px;
    cursor: pointer;
  }

  b {
    font-size: 20px;
  }

  .bnt-apagar-tarefa {
    width: fit-content;
    margin-left: 9.1rem;
    margin-top: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }

  .tarefa-a-fazer {
    background: linear-gradient(to right, #ff9966, #ff5e62);
  }

  .tarefa-em-andamento {
    background: linear-gradient(to right, #cac531, #f3f9a7);
  }

  .tarefa-concluida {
    background: linear-gradient(to right, #00b09b, #96c93d);
  }
`;
