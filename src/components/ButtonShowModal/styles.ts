import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px 0 10px 20px;
  border: none;
  border-radius: 1px;
  color: #fff;
  font-weight: bold;
  background: rgba(2, 141, 245, 0.91);
  box-shadow: -2px 4px 0 3px #000;

  &:active {
    background: rgba(2, 245, 131, 0.21);
    color: #4261d1;
    box-shadow: -2px 4px 0 3px #4261d1;
    transform: scale(0.9);
  }

  @media (min-width: 769px) {
    &:hover {
      transform: scale(1.03);
      box-shadow: -1px 1px 0 3px #38e54d;
      color: #38e54d;
      cursor: pointer;
    }
  }
`;
