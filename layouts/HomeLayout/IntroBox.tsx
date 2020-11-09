import styled from "styled-components";
import Link from "next/link";
import { Button, Title, SubTitle } from "@/components";

const Container = styled.div`
  max-width: 520px;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 991px) {
    max-width: 100%;
    margin: 100px 60px 100px;
  }
  @media (max-width: 480px) {
    margin: 25px 20px 40px;
    text-align: left;
  }
`;

const Text = styled.div`
  margin-bottom: 40px;
  font-family: YuGothic;
  font-size: 14px;
  line-height: 20px;
`;

export const IntroBox = () => (
  <Container>
    <Title color="#2DBC9C">BMW</Title>
    <SubTitle>Bayerische Motoren WerkeAG</SubTitle>
    <Text>
      BMW（ビーエムダブリュー、ドイツ語: Bayerische Motoren
      WerkeAG、バイエルン発動機製造株式会社）は、ドイツのバイエルン州ミュンヘンを拠点とする自動車および自動二輪車、エンジンメーカーである。
    </Text>
    <Link href="/bmw">
      <a>
        <Button
          width={160}
          height={47}
          size={16} //
          border="#ccc"
          color="#2DBC9C"
        >
          Read More
        </Button>
      </a>
    </Link>
  </Container>
);
