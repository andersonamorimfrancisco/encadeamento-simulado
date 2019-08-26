import React from "react";

import {
  Container,
  Text,
  Pointer,
  Details,
  NextIndicator,
  StartIndicator,
  EndIndicator
} from "./styles";

export default function StackViewItem({ data = {}, state, dispatch, actions }) {
  const { pos, element } = data;
  const { nextFree, start, end, alphabetical } = state;
  const { updatePointers, removeStackItem, updateDescriptors } = actions;

  async function handleContainerClick(data) {
    if (data.element) {
      await dispatch(removeStackItem(data));
      await dispatch(updatePointers());
      await dispatch(updateDescriptors());
    }
  }

  const hasElement = element ? true : false;
  const text = !hasElement ? null : alphabetical ? element.name : element.text;

  return (
    <Container onClick={() => handleContainerClick(data)}>
      <Details>
        <Text>{text}</Text>
        <Pointer>{data.next}</Pointer>
      </Details>
      {nextFree === pos ? <NextIndicator>Próximo</NextIndicator> : null}
      {start.pos === pos ? <StartIndicator>Inicio</StartIndicator> : null}
      {end.pos === pos ? <EndIndicator>Final</EndIndicator> : null}
    </Container>
  );
}
