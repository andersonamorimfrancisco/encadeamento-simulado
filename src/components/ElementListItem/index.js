import React from "react";

import { Container } from "./styles";

export default function Component({ data, state, dispatch, actions }) {
  const { alphabetical } = state;
  const { InsertItemOnStack, updatePointers, updateDescriptors } = actions;

  async function handleItemClick(data) {
    await dispatch(InsertItemOnStack(data));
    await dispatch(updatePointers());
    await dispatch(updateDescriptors());
  }

  return (
    <Container onClick={() => handleItemClick(data)}>
      {alphabetical ? data.name : data.text}
    </Container>
  );
}
