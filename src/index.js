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
      <div className="leftBar">
        <button
          className="showName"
          onClick={() => {
            dispatch({ type: "TOGGLENAME" });
          }}
        >
          {state.alphabetical ? "Numérico" : "Alfabético"}
        </button>
        <StackDescriptors state={state} />
        <ElementList state={state} dispatch={dispatch} actions={actions} />
      </div>
      <div className="main">
        <header>
          <h1>Encadeamento Simulado</h1>
        </header>
        <StackView state={state} dispatch={dispatch} actions={actions} />
      </div>

      <FooterBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
