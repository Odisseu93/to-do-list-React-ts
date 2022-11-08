import styled from "styled-components";

export const Tarefa = styled.div`
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 300px;
  height: auto;
  overflow-wrap: break-word;
  box-shadow: 0 0 9px blue;
  background: rgba(39, 127, 245, 0.15);

  .titulo {
    background: #fdeedc;
    text-align: center;
    width: 100%;
    color: #3e3ebf;
    border-radius: 6px;
    font-weight: bold;
  }

  .descricao {
    margin: 5px 0;
    background: #def1ef;
    border: 1px solid #000;
    padding: 10px;
    line-height: 1.3rem;
    height: 210px;
  }

  .bnt-apagar-tarefa{
    width: 60px;
    margin-left: 5px;
  }

  .tarefa-a-fazer {
  background: linear-gradient(to right, #ff9966, #ff5e62);
}

.tarefa-em-andamento {
  background: linear-gradient(to right, #CAC531, #F3F9A7);
}

.tarefa-concluida {
  background: linear-gradient(to right, #00b09b, #96c93d);
}
`;
