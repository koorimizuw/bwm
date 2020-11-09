import styled from "styled-components";

export const SubTitle = styled.div`
  --sub-title-color: ${(props) => (props.color ? props.color : "#ccc")};
  font-family: "Verdana";
  font-size: 14px;
  color: var(--sub-title-color);
  font-weight: 600;
  font-style: italic;
  margin: 22px 0;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--sub-title-color);
    margin-bottom: 10px;
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--sub-title-color);
    margin-top: 15px;
  }
`;
