import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll';
import Title from "./Intro/Title"
import SubTitle from "./Intro/SubTitle"
import Button from "./Button"
import { IntroItem } from '../interfaces'

const Main = styled.div<{ reverse: boolean }>`
    height: 680px;
    width: 100vw;
    display: flex;
    background: ${ props => props.color};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    flex: 1;
    @media (max-width: 991px) {
        flex-direction: column;
        height: auto;
    }
`

const Visual = styled.img`
    width:50%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 991px) {
        width: 100vw;
        height: auto;
    }
`

const Container = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    @media (max-width: 991px) {
        width: 100vw;
    }
`

const Section = styled.div<{ reverse: boolean }>`
    padding: 180px 60px 0;
    text-align: ${props => props.reverse ? 'right' : 'left'};
    @media (max-width: 991px) {
        padding: 60px;
        text-align: left;
    }
    @media (max-width: 480px) {
        padding: 20px;
    }
`

const Text = styled.div`
    margin-bottom: 40px;
    font-family: YuGothic;
    font-size: 14px;
    line-height: 22px;
    color: ${props => props.color};
`

const Scroll = styled.div<{ reverse: boolean }>`
  position: absolute;
  cursor: pointer;
  bottom: 0;
  ${props => props.reverse ? 'left: 0;' : 'right: 0;'}
  margin: 20px 15px;
  @media (max-width: 991px) {
    display: none;
  }
`

const Scrolly = styled(ScrollLink)`
  text-decoration: none;
  color: ${props => props.color ? props.color : '#fff'};
  display: block;
  border: 1px solid ${props => props.color ? '#ccc' : '#fff'};;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
`

const IntroSection = ({
  id,
  title,
  subtitle,
  text,
  image,
  color,
  reverse,
  light,
  prev,
  next
}: IntroItem) => {
  return (
    <Main id={id} color={light ? '#fff' : color} reverse={reverse}>
      <Visual src={image} />
      <Container>
        <Fade>
          <Section reverse={reverse}>
            <Title
              color={light ? color : '#fff'}
            >{title}</Title>
            <SubTitle color={light ? '#ccc' : '#fff'}>{subtitle}</SubTitle>
            <Text color={light ? '#000' : '#fff'}>{text}</Text>
            <Link href={`/${id}`}>
              <Button
                width={160}
                height={47}
                size={16}
                border={light ? '#ccc' : '#fff'}
                color={light ? color : '#fff'}
              >Read More</Button>
            </Link>
          </Section>
        </Fade>
        <Scroll reverse={reverse}>
          <Scrolly
            activeClass="active"
            to={prev ? prev : id}
            spy={true}
            smooth={true}
            duration={800}
            color={light ? color : ''} ><i className="fa fa-chevron-up" /></Scrolly>
          <Scrolly
            activeClass="active"
            to={next ? next : id}
            spy={true}
            smooth={true}
            duration={800}
            color={light ? color : ''}><i className="fa fa-chevron-down" /></Scrolly>
        </Scroll>
      </Container>
    </Main>
  )
}

export default IntroSection
