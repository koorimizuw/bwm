import Layout from '../components/Layout'
import IntroPage from '../components/IntroPage'
import { IntroItem } from '../interfaces'
import image from '../images/pic5.jpg'

const introItem: IntroItem = {
    title: 'モータースポーツ',
    subtitle: 'Motor sports',
    text: [
        'モータースポーツには古くから比較的積極的な姿勢を見せている。 特に活動が目立つのがツーリングカーレースで、シュニッツァー・モータースポーツやハーマンモータースポーツなどのセミワークスチームを多数抱え、世界ツーリングカー選手権（WTCC）やニュルブルクリンク24時間レースなどのレースに積極的に参戦している。',
        'F1へはエンジンサプライヤーとして、1982年 - 1988年そして2000年 - 2005年と2期参戦。1982年6月の第8戦カナダグランプリで初優勝し、1983年にはネルソン・ピケがブラバム・BMWを駆ってドライバーズタイトルを獲得した。2006年からはザウバー・チームを買収し、BMWザウバーF1チームとしてワークス参戦。2008年6月の第7戦カナダグランプリ（FORMULA1-Grand Prix du Canada 2008）で初優勝を飾るなど活躍を見せた。'
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