import styled from "styled-components";

export const Modal = styled.div`
  display: grid;
  height: 90vh;
  width: 99vw;
  justify-content: center;
  border: none;
  position: absolute;
  border-radius: 8px;
  font-size: 20px;
  background: rgba(11, 11, 11, 0.58);

  form {
    box-sizing: border-box;
    width: 360px;
    height: fit-content;
    padding: 15px;
    box-shadow: 0 0 9px blue;
    font-size: 18px;
    margin-top: 30px;
    border-radius: 8px;
    background: #bcead5;
    display: flex;
    flex-flow: column wrap;
  }

  label {
    font-size: inherit;
    display: block;
    width: 100%;
    text-align: center;
  }

  input[type="text"] {
    font-size: inherit;
    width: 100%;
  }
  textarea {
    width: 325px;
    font-size: inherit;
    display: block;
    border: none;
  }

  .btns {
    display: flex;
    width: 100%;
    margin: 5px auto;
  }

  input[type="button"] {
    width: 100px;
    margin: 2.5px auto;
    height: 25px;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    box-shadow: -1px 2px 1px #395144;
  }

  .status {
    font-size: inherit;
    margin: 10px 0;
    display: flex;
  }

  b {
    width: min-content;
    margin-right: 3px;
    font-size: 20px;
  }
  select {
    width: fit-content;
    font-size: inherit;
  }
`;
