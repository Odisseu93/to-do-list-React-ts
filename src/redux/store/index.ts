import { configureStore } from "@reduxjs/toolkit";
import { setDataLocalStorage } from "./../../storage/localStorage";
import { todoSlice } from "./../slice/index";

export const store = configureStore({
  reducer: { todos: todoSlice.reducer },
});

const todos = store.getState();
store.subscribe(() => setDataLocalStorage("data", store.getState()));

// store.dispatch(add({id: 1, titulo:"blah", descricao: "fsaksjfga", status: "afazer" }));
// store.dispatch(add({id: 2, titulo:"blah2", descricao: "fsaksjfga", status: "afazer" }));
// store.dispatch(add({id: 3, titulo:"vou ser removido!", descricao: "fsaksjfga", status: "afazer" }));
// store.dispatch(add({id: 4, titulo:"blah4", descricao: "fsaksjfga", status: "afazer" }));
// store.dispatch(add({id: 5, titulo:"é esse mesmo!", descricao: "fsaksjfga", status: "afazer" }));
// store.dispatch(update({id: 3, titulo:"foi atualizado", descricao: "fsaksjfga", status: "afazer" }));
