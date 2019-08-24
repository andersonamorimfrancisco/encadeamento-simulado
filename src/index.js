import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import ElementList from "./components/ElementList";
import StackView from "./components/StackView";
import * as actions from "./store/actions";

import initialState from "./store/initialState";
import reducer from "./store/reducer";

import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>Próximo livre: {state.freeStack[0].pos}</div>
      <StackView state={state} dispatch={dispatch} actions={actions} />
      <ElementList state={state} dispatch={dispatch} actions={actions} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
