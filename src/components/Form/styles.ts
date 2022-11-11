import styled from "styled-components";

export const Modal = styled.dialog`
  border: none;
  border-radius: 8px;
  background: #bcead5;

  &::backdrop {
    background: rgba(11, 11, 11, 0.58);
  }

  form {
    display: flex;
    flex-flow: column wrap;
  }

  label {
    display: block;
    width: 100%;
    text-align: center;
  }

  input[type="text"] {
    width: 100%;
  }
  textarea {
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
    margin: 10px 0;
    display: flex;
  }

  b {
    width: min-content;
    margin-right: 3px;
  }
  select {
    width: fit-content;
  }
`;
