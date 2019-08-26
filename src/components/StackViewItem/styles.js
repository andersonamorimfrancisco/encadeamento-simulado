import styled from "styled-components";

export const Container = styled.div`
  width: 18%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
`;

export const Text = styled.div`
  border: 1px solid #3c6382;
  width: 100%;
`;
export const Pointer = styled.div`
  border: 1px solid #3c6382;
  background-color: #3c6382;
  color: #fff;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 40px;
  font-size: 12px;
`;
export const Position = styled.div`
  position: absolute;
  font-size: 10px;
  top: 25px;
`;

export const NextIndicator = styled.div`
  border: 1px solid lightgrey;

  border-radius: 4px;
  margin-top: 5px;
  padding: 4px;
  font-size: 10px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

export const StartIndicator = styled.div`
  border: 1px solid #20bf6b;
  background-color: #26de81;
  color: #fff;

  border-radius: 4px;
  margin-top: 5px;
  padding: 4px;
  font-size: 10px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

export const EndIndicator = styled.div`
  border: 1px solid #eb3b5a;
  background-color: #fc5c65;
  color: #fff;
  border-radius: 4px;
  margin-top: 5px;
  padding: 4px;
  font-size: 10px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`;
