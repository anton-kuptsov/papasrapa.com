import {
  Decoration,
  INIT_LETTER_315,
  INIT_LETTER_135
} from "../components/Decoration";

const text =
  "апа Срапа — харизматичный артист, работающий в столетней традиции русской шумовой музыки, создатель уникальных синтезаторов, каждый из которых является уникальным объектом искусства.";

export const data = {
  desc_back_1:
    "Удивительно, но именно СССР — родина индастриал-музыки. Еще в 20х годах Дзига Вертов записывал музыкальные композиции из звуков лесопильного завода, а Арсений Авраамов создал симфонию, целиком состоящую из звуков города: заводских гудков, свиста пара и звуков самолетов. Этим фильмом мы хотим показать миру современного представителя столетней традиции, посвятившего свою жизнь шуму, перфомансу и синтезу.",
  desc_back_2: "П" + { text },
  text_top: (
    <>
      <Decoration {...INIT_LETTER_135}>П</Decoration>
      {text}
    </>
  ),
  text_bottom: (
    <>
      <Decoration {...INIT_LETTER_315}>Н</Decoration>ад созданием каждого
      инструмента Папа Срапа трудится очень тщательно, досконально продумывается
      звук, внешний вид и удобство управления. Все изделия получаются разными,
      их немного, и каждое уникально. Он создает поистине безумные синтезаторы
      из деталей, найденных в катакомбах заброшенной советской военной фабрики и
      радио элементов с затопленного города Крымска. Звуки, которые издают его
      инструменты — непривычны не только на слух, но и на ощупь, дико ревущие и
      превращающие любой концерт Папы Срапы в запредельное шоу саунд-арта.
    </>
  )
};
