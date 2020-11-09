import { DefaultLayout } from "@/layouts";
import { IntroItem } from "@/interfaces";
import pic2 from "@/images/pic2.jpg";
import pic3 from "@/images/pic3.jpg";
import pic4 from "@/images/pic4.jpg";
import pic5 from "@/images/pic5.jpg";
import pic6 from "@/images/pic6.jpg";
import { MainVisual } from "./MainVisual";
import { IntroBox } from "./IntroBox";
import { IntroSection } from "./IntroSection";

const IntroText: IntroItem[] = [
  {
    id: "emblem",
    title: "エンブレムの由来",
    subtitle: "Origin of the emblem",
    text:
      "1917年10月5日にBMWのロゴマークが商標登録された。1929年の広報広告により、現在の黒く縁取った円の中央を十字によって4等分し、 点対称に青と白に塗り分けたデザインである。",
    image: pic2,
    color: "#2DBC9C",
    next: "features",
  },
  {
    id: "features",
    title: "製品の特徴",
    subtitle: "Product features",
    text:
      "フル4シーターの4ドアセダン車をメインに据えつつもスポーティーな作りを心掛けているのが特徴である。駆動方式についてもフロントエンジン・リアドライブ方式（FR）の後輪駆動（もしくはFRベースの4WD）にこだわり、最近までBMWブランドでの前輪駆動（FF）車はなかったが、2シリーズアクティブツアラーがBMW初のFF車としてラインナップに加わった。",
    image: pic3,
    color: "#3F95D8",
    reverse: true,
    light: true,
    prev: "emblem",
    next: "motorcycle",
  },
  {
    id: "motorcycle",
    title: "二輪車",
    subtitle: "Motorcycle",
    text:
      "BMWは第一次世界大戦後にオートバイ用エンジンの生産を始め、続いてオートバイ自体の生産を始めた。同社のオートバイブランドは現在日本では「BMWモトラッド（ドイツ語読みではモトアラート、モトラート）」として知られる。",
    image: pic4,
    color: "#3F95D8",
    prev: "features",
    next: "sports",
  },
  {
    id: "sports",
    title: "モータースポーツ",
    subtitle: "Motor sports",
    text:
      "モータースポーツには古くから比較的積極的な姿勢を見せている。 特に活動が目立つのがツーリングカーレースで、シュニッツァー・モータースポーツやハーマンモータースポーツなどのセミワークスチームを多数抱え、世界ツーリングカー選手権（WTCC）やニュルブルクリンク24時間レースなどのレースに積極的に参戦している。",
    image: pic5,
    color: "#9956B2",
    reverse: true,
    light: true,
    prev: "motorcycle",
    next: "business",
  },
  {
    id: "business",
    title: "経営状況",
    subtitle: "Business conditions",
    text:
      "2011年通期の世界市場での販売実績はBMWグループ全体として166万8982台、内訳はBMW138万384台、MINI28万5060台、ロールスロイス3538台、売上高は688億2100万ユーロ（2003年通期の世界市場での販売実績はBMWグループ全体として110万4916台、売上高は415億2500万ユーロ）。",
    image: pic6,
    color: "#9956B2",
    prev: "sports",
  },
];

export const HomeLayout = () => (
  <DefaultLayout title="BMW Fan!!!!!" divider={true}>
    <MainVisual />
    <IntroBox />
    {IntroText.map((item) => {
      return <IntroSection key={item.id} {...item} />;
    })}
  </DefaultLayout>
);
