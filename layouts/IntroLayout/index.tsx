import { IntroItem } from "@/interfaces";
import styled from "styled-components";
import { Title, SubTitle } from "@/components";
import { DefaultLayout } from "@/layouts";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Visual = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Text = styled.div`
  margin-bottom: 40px;
  font-family: YuGothic;
  font-size: 16px;
  line-height: 26px;
  @media (min-width: 960px) {
    width: 48%;
  }
`;

const Content = styled.div`
  margin: 30px;
  @media (min-width: 960px) {
    margin: 30px 0;
  }
`;

const TextBox = styled.div`
  @media (min-width: 960px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const IntroLayout = ({ image, title, subtitle, text }: IntroItem) => (
  <DefaultLayout>
    <Container>
      <Visual src={image} />
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <TextBox>
          {Array.isArray(text) ? (
            text.map((item, index) => {
              return (
                <Text key={index}>
                  <p>{item}</p>
                </Text>
              );
            })
          ) : (
            <Text>{text}</Text>
          )}
        </TextBox>
      </Content>
    </Container>
  </DefaultLayout>
);
