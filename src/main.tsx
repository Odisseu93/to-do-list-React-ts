import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { Footer } from "./components/Footer/styles";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Footer>
        <span className="wrapper">
          Desenvolvido por
          <a
            href="https://github.com/Odisseu93"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ulisses Silvério
          </a>
        </span>
      </Footer>
    </Provider>
  </React.StrictMode>
);
