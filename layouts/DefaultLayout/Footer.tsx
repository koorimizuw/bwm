import styled from "styled-components";

const Main = styled.div`
  background-color: #333;
  height: 240px;
  width: 100%;
  color: #fff;
  text-align: center;
`;

const SNS = styled.div`
  padding: 80px 0 40px;
  font-size: 30px;
  a {
    color: #fff;
    margin: 0 10px;
  }
`;

const Text = styled.div`
  font-family: "Verdana";
  font-size: 12px;
`;

export const Footer = () => (
  <Main>
    <SNS>
      <a href="#">
        <i className="fa fa-twitter" />
      </a>
      <a href="#">
        <i className="fa fa-facebook" />
      </a>
      <a href="#">
        <i className="fa fa-instagram" />
      </a>
    </SNS>
    <Text>(c) BMW Fan!!!!!.</Text>
  </Main>
);
