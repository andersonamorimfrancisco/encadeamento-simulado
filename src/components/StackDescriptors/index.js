import React from "react";

import { Container, Linha, Title } from "./styles";

export default function StackDescriptors({ state }) {
  const { start, end, nextFree, len } = state;
  return (
    <Container>
      <Title>Descritores</Title>
      <Linha>INI: {start.pos}</Linha>
      <Linha>FIM: {end.pos}</Linha>
      <Linha>PROX: {nextFree}</Linha>
      <Linha>NUM: {len}</Linha>
    </Container>
  );
}
