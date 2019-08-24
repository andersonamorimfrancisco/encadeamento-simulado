import React from "react";

import { Container } from "./styles";

export default function StackViewItem({ data = {}, dispatch, actions }) {
  const { element } = data;

  async function handleContainerClick(data) {
    await dispatch(actions.removeStackItem(data));
  }

  const text = element ? element.text : null;

  return (
    <Container onClick={() => handleContainerClick(data)}>{text}</Container>
  );
}
