import styled from "styled-components";
import Link from "next/link";
import { Button } from "✨/components";
import image from "✨/images/pic1.jpg";

const Background = styled.img`
  min-height: 720px;
  width: 100%;
  object-fit: cover;
  @media (max-width: 480px) {
    min-height: 254px;
  }
`;

const Main = styled.div`
  position: relative;
  height: 380px;
  z-index: 0;
  @media (max-width: 480px) {
    height: 290px;
  }
  &::before {
    content: "";
    height: 400px;
    width: 100%;
    background-color: #3f95d8;
    transform: skewY(-5deg);
    display: block;
    left: 0;
    top: -100px;
    position: absolute;
    z-index: -1;
    @media (max-width: 991px) {
      transform: skewY(0);
      top: -10px;
    }
    @media (max-width: 480px) {
      top: -3px;
      height: 290px;
    }
  }
`;

const Container = styled.div`
  color: #fff;
  text-align: center;
  @media (max-width: 991px) {
    padding: 100px 20px 0;
  }
  @media (max-width: 480px) {
    padding: 70px 20px 0;
  }
`;

const Title = styled.div`
  font-family: "Verdana";
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 24px;
  }
`;

const SubTitle = styled.div`
  font-family: YuGothic;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 46px;
  }
`;

export const MainVisual = () => (
  <>
    <Background src={image} />
    <Main>
      <Container>
        <Title>Freude am Fahren</Title>
        <SubTitle>駆けぬける歓び</SubTitle>
        <Link href="/bmw">
          <a>
            <Button width={180} height={58} border="#fff" size={20}>
              Continue
            </Button>
          </a>
        </Link>
      </Container>
    </Main>
  </>
);
