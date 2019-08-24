import React from "react";

import StackViewItem from "../StackViewItem";

import { Container } from "./styles";

export default function StackView({ state, dispatch, actions }) {
  const { stack } = state;
  return (
    <Container>
      {stack.map(item => {
        return (
          <StackViewItem
            key={item.pos}
            data={item}
            dispatch={dispatch}
            actions={actions}
          />
        );
      })}
    </Container>
  );
}
