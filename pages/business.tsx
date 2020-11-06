import Layout from '../components/Layout'
import IntroPage from '../components/IntroPage'
import { IntroItem } from '../interfaces'
import image from '../images/pic6.jpg'

const introItem: IntroItem = {
    title: '経営状況',
    subtitle: 'Business conditions',
    text: [
        '2011年通期の世界市場での販売実績はBMWグループ全体として166万8982台、内訳はBMW138万384台、MINI28万5060台、ロールスロイス3538台、売上高は688億2100万ユーロ（2003年通期の世界市場での販売実績はBMWグループ全体として110万4916台、売上高は415億2500万ユーロ）。',
        'BMWは同族会社であり、株式の約47%がズザンネ・クラッテン、シュテファン・クヴァントら、ドイツ・クヴァント家により所有されている。経営は良好であり、過去40年以上赤字を出していないとも言われる。一方、傘下に収めた英国ローバー・グループの経営再建には失敗し、2000年、同グループは解体に至った。ランドローバーをフォードに譲渡、収益の見込めるMINIについては自社で継続所有、その他、ローバー、MGなどをたった10ポンドで英国の投資会社に売却したことは話題となった。 生産拠点について、1970年代から稼動する南アフリカの工場のほか、近年はアメリカ、中国、パキスタンなど、ドイツ国外における展開に積極的である。'
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