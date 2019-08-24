import React from "react";

import { Container } from "./styles";

export default function Component({ data, dispatch, actions }) {
  const { InsertItemOnStack } = actions;

  async function handleItemClick(data) {
    await dispatch(InsertItemOnStack(data));
  }

  return (
    <Container onClick={() => handleItemClick(data)}>{data.text}</Container>
  );
}
