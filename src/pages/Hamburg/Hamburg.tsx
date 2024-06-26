import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  HamburgImg,
  HamburgLogo,
  Guitars,
  Butterfly,
  TwoPeople,
  University,
} from "assets"

import Footer from "components/Footer"

function Hamburg() {
  return (
    <>
      <Header
        logoImgDescr={{ src: HamburgLogo, alt: "HamburgLogo" }}
        logoText="Гамбург"
        city="Гамбург"
        HeaderDropDown={true}
      />
      <MainUpperPart
        bcgImgDescr={{ src: HamburgImg, alt: "HamburgImg" }}
        mainTitle="Новости Гамбурга и окрестностей"
        firstImgDescr={{ src: Guitars, alt: "Guitars" }}
        secondImgDescr={{ src: Butterfly, alt: "Butterfly" }}
        thirdImgDescr={{ src: TwoPeople, alt: "Two people" }}
        fourthImgDescr={{ src: University, alt: "University" }}
        firstImgTitle="Музыкальные истории"
        secondImgTitle="Загадки природы"
        thirdImgTitle="Жизнь рядом с нами"
        fourthImgTitle="Высшее образование в Германии"
        buttonProps={{
          name: "Читать подробнее",
          onClick: () => {
            console.log("Читать подробнее Hamburg");
          },
        }}
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Hamburg
