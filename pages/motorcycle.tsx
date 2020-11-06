import Layout from '../components/Layout'
import IntroPage from '../components/IntroPage'
import { IntroItem } from '../interfaces'
import image from '../images/pic4.jpg'

const introItem: IntroItem = {
    title: '二輪車',
    subtitle: 'Motorcycle',
    text: [
        'BMWは第一次世界大戦後にオートバイ用エンジンの生産を始め、続いてオートバイ自体の生産を始めた[3]。同社のオートバイブランドは現在日本では「BMWモトラッド（ドイツ語読みではモトアラート、モトラート）」として知られる。',
        '「ヘリオス」と「フリンク」が失敗した後、最初の成功作R32の生産を1923年に始める。R32は空冷の「ボクサーツイン」（水平対向2気筒）エンジンを搭載し、縦置きエンジン配置により各シリンダーは車体の左右に突出している。単気筒モデルは別として、BMWのオートバイは1980年代前半までこの特有のレイアウトのみを使用した。現在でも多くのモデルが空冷ボクサーツインを搭載し、RシリーズおよびHPシリーズとして生産される。'
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