import Layout from '../components/Layout'
import IntroPage from '../components/IntroPage'
import { IntroItem } from '../interfaces'
import image from '../images/pic1.jpg'

const introItem: IntroItem = {
  title: 'BMW',
  subtitle: 'Bayerische Motoren WerkeAG',
  text: [
    'BMW（ビーエムダブリュー、ドイツ語: Bayerische Motoren WerkeAG、バイエルン発動機製造株式会社）は、ドイツのバイエルン州ミュンヘンを拠点とする自動車および自動二輪車、エンジンメーカーである。',
    '同社はBMWの他に、英国のロールス・ロイスとMINIの2社を傘下のカー・ブランドとして所有している。また、BMW Motorradを子会社として所有する。本社ビルはエンジンのシリンダーを模した円筒形を4つ組み合わせたような形をしており、フィーア・ツュリンダー（Vier Zylinder）、英語でフォー・シリンダーズ（Four Cylinders）と呼ばれる。'
  ]
}

const Page = () => (
  <Layout>
    <IntroPage
      title={introItem.title}
      subtitle={introItem.subtitle}
      text={introItem.text}
      image={image}
    />
  </Layout>

)


export default Page