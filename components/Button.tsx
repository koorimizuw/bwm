import styled from "styled-components";

export const Button = styled.button<{
  width: number;
  height: number;
  size: number;
  border: string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: transparent;
  border: 2px ${(props) => props.border} solid;
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.color ?? "#fff")};
  cursor: pointer;
  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
    height: 46px;
  }
`;
