import Layout from '../components/Layout'
import IntroPage from '../components/IntroPage'
import { IntroItem } from '../interfaces'
import image from '../images/pic2.jpg'

const introItem: IntroItem = {
  title: 'エンブレムの由来',
  subtitle: 'Origin of the emblem',
  text: [
    '1917年10月5日にBMWのロゴマークが商標登録された。1929年の広報広告により、現在の黒く縁取った円の中央を十字によって4等分し、 点対称に青と白に塗り分けたデザインである。円と十字はかつて航空機エンジンメーカーであった事にちなみ飛行機の回転するプロペラを表したイメージが確立した。 現在の公式サイトやカタログでもプロペラをモチーフにして、バイエルンの白い雲と青い空をイメージしていると表記されている。',
    '上記により、ブランドロゴとして航空機のプロペラをモチーフとしたブランドイメージが確立し、ロゴイメージの由来として一般に浸透した。 エンブレムのデザインは過去に何度か微妙にBMWの字体とその位置程度が変わっているが、基本的な部分は変わらない。',
    '2010年1月7日付けのニューヨークタイムズにて、実際は黒の円は母体となったRapp Motorenwerke GmbHのエンブレムマークに由来し、 中央の青と白はバイエルン王ヴィッテルスバッハ家の紋章に起源を持つ旧バイエルン王国、現在のバイエルン州旗にちなむという記事が出た。 それはブランドイメージに寄与する内容ではなく、メーカーが認定しないゴシップ記事に過ぎない。'
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