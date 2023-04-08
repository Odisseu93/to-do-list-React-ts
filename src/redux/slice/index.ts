import { createSlice } from "@reduxjs/toolkit";
import { getDataLocalStorage } from "./../../storage/localStorage";

export interface ICard {
  id: string;
  titulo: string;
  descricao: string;
  status: string;
}

const initialState: ICard[] = getDataLocalStorage("data")
  ? getDataLocalStorage("data").todos
  : [
      {
        id: "",
        titulo: "",
        descricao: "",
        status: "",
      },
    ];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const { titulo, descricao, status } = action.payload;
      const attributes = [titulo, descricao, status];

      if (attributes.includes(undefined) || attributes.includes("")) {
        if (!titulo) return alert(`Você esqueceu o titulo!`);
        if (!descricao) return alert(`Você esqueceu o descricao!`);
        if (!status) return alert(`Você esqueceu o status!`);
      }

      const todos: ICard = {
        id: action.payload.id,
        titulo: action.payload.titulo,
        descricao: action.payload.descricao,
        status: action.payload.status,
      };
      state.push(todos);
    },
    update: (state, action) => {
      const { id, titulo, descricao, status } = action.payload;
      const attributes = [titulo, descricao, status];

      if (attributes.includes(undefined) || attributes.includes("")) {
        if (!titulo) return alert(`Você esqueceu o titulo!`);
        if (!descricao) return alert(`Você esqueceu o descricao!`);
        if (!status) return alert(`Você esqueceu o status!`);
      }
      const todo: ICard = {
        id: id,
        titulo: titulo,
        descricao: descricao,
        status: status,
      };
      const index = state.findIndex((item) => item.id === id);
      if (!state.find((item) => item.id === id)) return alert("não encontrado");
      else {
        state.splice(index, 1, todo);
        return state;
      }
    },
    remove: (state, action) => {
      const { id } = action.payload;
      if (!id) {
        console.error("Erro ao tentar deletar o card, id não encontrado!");
        return;
      }
      if (window.confirm("tem certeza que que excluir este cartão?"))
        return state.filter((todo) => todo.id !== id);
    },

  },
});

export const { add, update, remove } = todoSlice.actions;
