import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import ElementList from "./components/ElementList";
import StackView from "./components/StackView";
import StackDescriptors from "./components/StackDescriptors";
import FooterBar from "./components/FooterBar";

import * as actions from "./store/actions";
import initialState from "./store/initialState";
import reducer from "./store/reducer";

import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header>
        <h1>Encadeamento Simulado</h1>
      </header>
      <StackView state={state} dispatch={dispatch} actions={actions} />

      <div className="second-line">
        <ElementList state={state} dispatch={dispatch} actions={actions} />
        <StackDescriptors state={state} />
      </div>
      <FooterBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
