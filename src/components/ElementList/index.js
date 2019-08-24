import React from "react";

import ElementListItem from "../ElementListItem";

import { Container } from "./styles";

export default function ELementList({ state, dispatch, actions }) {
  const { elements } = state;
  return (
    <Container>
      {elements.map(element => {
        return (
          <ElementListItem
            key={element.id}
            data={element}
            dispatch={dispatch}
            actions={actions}
          />
        );
      })}
    </Container>
  );
}
