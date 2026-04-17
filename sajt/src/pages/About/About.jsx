import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./About.css";

import about1 from "../../img/about1.jpeg";
import about2 from "../../img/about2.jpeg";
import about3 from "../../img/about3.jpeg";
import about4 from "../../img/about6.jpeg";
import about5 from "../../img/about5.jpeg";
import about6 from "../../img/about4.jpeg";
import about7 from "../../img/about7.jpeg";
import about8 from "../../img/about8.jpg";
import about9 from "../../img/about9.jpeg";
import about10 from "../../img/about10.jpeg";

const imagesTop = [about1, about4, about2, about3, about5];
const imagesBottom = [about7, about6, about8, about9, about10];

const About = () => {
  const [activeIndexTop, setActiveIndexTop] = useState(0);
  const [activeIndexBottom, setActiveIndexBottom] = useState(0);

  useEffect(() => {
    const intervalTop = setInterval(() => {
      setActiveIndexTop((prev) => (prev + 1) % imagesTop.length);
    }, 3000);

    const intervalBottom = setInterval(() => {
      setActiveIndexBottom((prev) => (prev + 1) % imagesBottom.length);
    }, 3000);

    return () => {
      clearInterval(intervalTop);
      clearInterval(intervalBottom);
    };
  }, []);

  return (
    <>
      <Navbar />

      <section className="about-page">
        <div className="container-fluid about-container">
          <div className="row align-items-center min-vh-100 about-row">
            <div className="col-lg-6 col-12 about-images-col">
              <div className="about-images-wrapper">
                {imagesTop.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Vinarija ${index + 1}`}
                    className={`about-image ${
                      index === activeIndexTop ? "active" : ""
                    } ${
                      index === (activeIndexTop + 1) % imagesTop.length
                        ? "next"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="col-lg-6 col-12 about-text-col">
              <div className="about-text-box">
                <span className="about-subtitle">O nama</span>
                <h1>Ukorenjeni u tradiciji, okrenuti budućnosti</h1>
                <p>
                  Na blagim brežuljcima Bučja, na desnoj obali Zapadne Morave,
                  gde se vinova loza gaji još od rimskih vremena, smešteni su
                  vinogradi porodice Milosavljević. Ovaj kraj odiše prirodnom
                  lepotom i skladom pažljivo negovanih zasada. Svaki pogled na
                  vinograde otkriva spoj tradicije, prirode i predanog rada.
                </p>
                <p>
                  Porodica Milosavljević već više od pet generacija neguje
                  vinarsku tradiciju, koju je dodatno unapredio Milomir svojim
                  iskustvom iz švajcarske vinarije „Rebbaugenossenschaft Spiez“.
                  Znanje stečeno u inostranstvu preneo je na svog sina Dragana,
                  a danas i na unuka Branka. Tako se porodična priča nastavlja,
                  spajajući iskustvo, inovaciju i ljubav prema vinu.
                </p>
                <p>
                  Danas, kroz brend „Vila Vina“, porodica obrađuje šest hektara
                  vinograda sa pažljivo odabranim sortama i minimalnom
                  upotrebom hemije. Poseban fokus stavljen je na autohtone sorte
                  Tamjaniku i Prokupac, koje simbolizuju tradiciju ovog kraja.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center min-vh-100 about-row about-row-reverse">
            <div className="col-lg-6 col-12 about-text-col">
              <div className="about-text-box">
                <span className="about-subtitle">Naša priča</span>
                <h2>Vekovi tradicije, jedna porodična vizija</h2>
                <p>
                  Vinarija Milosavljević svoje korene nalazi u bogatoj istoriji Bučja, gde se vinova loza gaji još od srednjeg veka. Još u vreme kneza Lazara i dinastije Nemanjića, ovaj kraj bio je poznat po uzgoju autohtonih sorti poput Prokupca. Ta duboka povezanost sa zemljom postavila je temelje vinarske tradicije koja traje do danas.
                </p>
                <p>
                  Porodica Milosavljević nastanila se u Bučju 1808. godine i kroz generacije razvijala vinogradarstvo i proizvodnju vina. Ključni koraci napravljeni su krajem 20. veka, kada su osnovani prvi porodični podrumi i postavljeni temelji savremene proizvodnje. Novi razvoj započinje povratkom Milomira iz Švajcarske, koji donosi znanje i iskustvo i obnavlja vinograde.
                </p>
                <p>
                  Danas, kroz brend „Vila Vina“, porodica obrađuje šest hektara vinograda i proizvodi vina prepoznata širom sveta. Vođeni zajedničkom vizijom, Milomir, Dragan i Branko nastavljaju da unapređuju tradiciju i kvalitet. Njihova priča ostaje spoj nasleđa, strasti i stalne težnje ka savršenstvu.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12 about-images-col">
              <div className="about-images-wrapper about-images-wrapper-right">
                {imagesBottom.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Vinarija detalj ${index + 1}`}
                    className={`about-image about-image-right ${
                      index === activeIndexBottom ? "active" : ""
                    } ${
                      index === (activeIndexBottom + 1) % imagesBottom.length
                        ? "next"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;