import React from "react";

import ElementListItem from "../ElementListItem";

import { Container } from "./styles";

export default function ELementList({ state, dispatch, actions }) {
  const { elements } = state;
  return (
    <Container>
      <h3>Elementos</h3>
      {elements.map(element => {
        return (
          <ElementListItem
            key={element.id}
            data={element}
            state={state}
            dispatch={dispatch}
            actions={actions}
          />
        );
      })}
    </Container>
  );
}
