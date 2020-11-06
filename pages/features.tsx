import Layout from '../components/Layout'
import IntroPage from '../components/IntroPage'
import { IntroItem } from '../interfaces'
import image from '../images/pic3.jpg'

const introItem: IntroItem = {
    title: '製品の特徴',
    subtitle: 'Product features',
    text: [
        'フル4シーターの4ドアセダン車をメインに据えつつもスポーティーな作りを心掛けているのが特徴である。駆動方式についてもフロントエンジン・リアドライブ方式（FR）の後輪駆動（もしくはFRベースの4WD）にこだわり、最近までBMWブランドでの前輪駆動（FF）車はなかったが、2シリーズアクティブツアラーがBMW初のFF車としてラインナップに加わった。また、過去にもFF車の研究開発も行っており、その技術は同じBMWグループ内のFF車、ローバー75やMINIで生かされている。また、直列6気筒へのこだわりも同社ならではである。他社がスペースや重量上有利なV型6気筒へ次々転換を進める中、あえてBMWは直列6気筒の振動特性やフィーリングにこだわり、スペースやエンジンの軽量化を犠牲にして同社製直列6気筒エンジンを搭載し続けており、このエンジン類を俗称として「シルキーシックス」呼ぶ。この長いエンジンを納めるため、特に小型の車種でボンネットは車長に対して長めであり、BMW車のデザイン上のポイントとなっている。',
        'その他、フロントアクスルを前端寄りに、エンジン配置を可能な限り客室寄りに、バッテリーをトランクルームに配置するなど前後の重量配分を50：50に近づける努力を続けており、さらに理想的な駆動のために縦置き搭載されるエンジン、スムーズで心地よい加速感を持たせたトラクション、俊敏なハンドリングレスポンスなど、BMWはFR車の美点（コーポレートスローガンでもある「Freude am Fahren」。和訳は「運転する喜び」または「走る喜び」となり、BMW JAPANのスローガンも「駆け抜ける喜び」）を追求し続けている。'
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