import React from "react";

import GithubLogo from "../../assets/github-logo.png";

import { Container } from "./styles";

export default function FooterBar() {
  return (
    <Container>
      <img src={GithubLogo} alt="" />
      <span>
        <a href="https://github.com/useranderson/encadeamento-simulado">
          Anderson Amorim
        </a>
      </span>
    </Container>
  );
}
