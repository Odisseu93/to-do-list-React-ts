import { DataContextProvider } from "./contexts/data/contextProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Footer } from "./components/Footer/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataContextProvider>
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
    </DataContextProvider>
  </React.StrictMode>
);
