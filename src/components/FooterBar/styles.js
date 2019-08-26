import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  border-top: 1px solid lightgray;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  img {
    height: 20px;
    padding: 2px;
  }
  span {
    margin-left: 5px;
    font-size: 10px;
    a {
      text-decoration: none;
      color: black;
    }
  }
`;
