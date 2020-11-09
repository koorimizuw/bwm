import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Button, Title, SubTitle } from "@/components";
import { IntroItem } from "@/interfaces";

const Main = styled.div<{ reverse: boolean }>`
  height: 680px;
  width: 100vw;
  display: flex;
  background: ${(props) => props.color};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  flex: 1;
  @media (max-width: 991px) {
    flex-direction: column;
    height: auto;
  }
`;

const Visual = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 991px) {
    width: 100vw;
    height: auto;
  }
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  @media (max-width: 991px) {
    width: 100vw;
  }
`;

const Section = styled.div<{ reverse: boolean }>`
  padding: 180px 60px 0;
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  @media (max-width: 991px) {
    padding: 60px;
    text-align: left;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Text = styled.div`
  margin-bottom: 40px;
  font-family: YuGothic;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.color};
`;

const Scroll = styled.div<{ reverse: boolean }>`
  position: absolute;
  cursor: pointer;
  bottom: 0;
  ${(props) => (props.reverse ? "left: 0;" : "right: 0;")}
  margin: 20px 15px;
  @media (max-width: 991px) {
    display: none;
  }
`;

const Scrolly = styled(ScrollLink)`
  text-decoration: none;
  color: ${(props) => (props.color ?? "#fff")};
  display: block;
  border: 1px solid ${(props) => (props.color ? "#ccc" : "#fff")};
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
`;

function useIntroSectionColor(color: string, light?: boolean) {
  const lightStyle = {
    main: "#fff",
    title: color,
    subTitle: "#ccc",
    text: "#000",
    buttonBorder: "#ccc",
    buttonColor: color,
    scrollyColor: color,
  } as const;
  const darkStyle = {
    main: color,
    title: "#fff",
    subTitle: "#fff",
    text: "#fff",
    buttonBorder: "#fff",
    buttonColor: "#fff",
    scrollyColor: "",
  } as const;
  return light ? lightStyle : darkStyle;
}

export const IntroSection = ({
  id,
  title,
  subtitle,
  text,
  image,
  color,
  reverse,
  light,
  prev,
  next,
}: IntroItem) => {
  const style = useIntroSectionColor(color, light);

  return (
    <Main id={id} color={style.main} reverse={reverse}>
      <Visual src={image} />
      <Container>
        <Fade>
          <Section reverse={reverse}>
            <Title color={style.title}>{title}</Title>
            <SubTitle color={style.subTitle}>{subtitle}</SubTitle>
            <Text color={style.text}>{text}</Text>
            <Link href={`/${id}`}>
              <a>
                <Button
                  width={160}
                  height={47}
                  size={16}
                  border={style.buttonBorder}
                  color={style.buttonColor}
                >
                  Read More
                </Button>
              </a>
            </Link>
          </Section>
        </Fade>
        <Scroll reverse={reverse}>
          <Scrolly
            activeClass="active"
            to={prev ?? id}
            spy={true}
            smooth={true}
            duration={800}
            color={style.scrollyColor}
          >
            <i className="fa fa-chevron-up" />
          </Scrolly>
          <Scrolly
            activeClass="active"
            to={next ?? id}
            spy={true}
            smooth={true}
            duration={800}
            color={style.scrollyColor}
          >
            <i className="fa fa-chevron-down" />
          </Scrolly>
        </Scroll>
      </Container>
    </Main>
  );
};
