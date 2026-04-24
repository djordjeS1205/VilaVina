import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./About.css";
import Footer from "../../components/Footer";

import about2 from "../../img/about2.jpeg";
import about3 from "../../img/about3.jpeg";
import about4 from "../../img/about4.jpeg";
import about5 from "../../img/about5.jpeg";
import about7 from "../../img/about7.jpeg";
import about8 from "../../img/about8.jpg";
import about9 from "../../img/about9.jpeg";
import about11 from "../../img/about11.jpg";
import about12 from "../../img/about12.jpg";
import about13 from "../../img/about13.jpg";
import about14 from "../../img/about14.jpg";
import about15 from "../../img/about15.jpg";
import about16 from "../../img/about16.jpg";
import about17 from "../../img/about17.png";
import about18 from "../../img/about18.jpeg";
import about19 from "../../img/about19.jpg";
import about20 from "../../img/about20.jpg";
import about21 from "../../img/about21.jpeg";
import about22 from "../../img/about22.jpeg";
import about23 from "../../img/about23.jpeg";
import about24 from "../../img/about24.jpeg";

import wine9 from "../../img/wine9.jpeg";

const imagesONama = [about11, about5, about12];

const imagesNasaPrica = [about2, about3, about13, about14, about15];

const imagesMilomir = [about4, about7, about16, about17];

const imagesBrend = [about18, wine9];

const imagesVinogradi = [
  about19,
  about22,
  about21,
  about23,
  about20,
  about24,
  about9,
  about8,
];

const timelineData = [
  {
    year: "Osnivanje vinarije",
    title: "Počeci porodične tradicije",
    text: "Porodica Milosavljević se od dolaska na ove prostore pre dva veka bavila vinovom lozom i proizvodnjom vina na mestu zvanom Bučke Poljane gde su se nalazili prvi podrumi za čuvanje vina i rakije.",
  },
  {
    year: "1980",
    title: "Registracija domaćinstva",
    text: "Godine 1980 domaćinstvo se registrovalo za proizvodnju vina i rakije.",
  },
  {
    year: "2006",
    title: "Ponovno registrovanje",
    text: "Domaćinstvo se ponovo registruje kao porodična vinarija, flašira vina i prodaje ih na tržištu.",
  },
  {
    year: "2010",
    title: "Širenje tržišta",
    text: "Vinarija se 2010. preregistrovala kao preduzetnička radnja Dragan Milosavljević i počela sa proširenjem tržišta i izvozom na strana tržišta.",
  },
  {
    year: "Vila Vina",
    title: "Prepoznatljiv brend",
    text: "Vila Vina postaje brend pod kojim je vinarija poznata i prepoznata po kvalitetu, autentičnosti i tradiciji.",
  },
];

const AnimatedImageGallery = ({ images, activeIndex, right = false }) => {
  return (
    <div
      className={`about-images-wrapper ${
        right ? "about-images-wrapper-right" : ""
      }`}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Vila Vina ${index + 1}`}
          className={`about-image ${right ? "about-image-right" : ""} ${
            index === activeIndex ? "active" : ""
          } ${index === (activeIndex + 1) % images.length ? "next" : ""}`}
        />
      ))}
    </div>
  );
};

const About = () => {
  const [activeIndexONama, setActiveIndexONama] = useState(0);
  const [activeIndexNasaPrica, setActiveIndexNasaPrica] = useState(0);
  const [activeIndexMilomir, setActiveIndexMilomir] = useState(0);
  const [activeIndexBrend, setActiveIndexBrend] = useState(0);
  const [activeIndexVinogradi, setActiveIndexVinogradi] = useState(0);
  const [timelineIndex, setTimelineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexONama((prev) => (prev + 1) % imagesONama.length);
      setActiveIndexNasaPrica((prev) => (prev + 1) % imagesNasaPrica.length);
      setActiveIndexMilomir((prev) => (prev + 1) % imagesMilomir.length);
      setActiveIndexBrend((prev) => (prev + 1) % imagesBrend.length);
      setActiveIndexVinogradi((prev) => (prev + 1) % imagesVinogradi.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section className="about-page">
        <div className="container-fluid about-container">
          {/* 1. SEKCIJA - O NAMA */}
          <div className="row align-items-center min-vh-100 about-row">
            <div className="col-lg-6 col-12 about-images-col">
              <AnimatedImageGallery
                images={imagesONama}
                activeIndex={activeIndexONama}
              />
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
                  vinograda sa pažljivo odabranim sortama i minimalnom upotrebom
                  hemije. Poseban fokus stavljen je na autohtone sorte Tamjaniku
                  i Prokupac, koje simbolizuju tradiciju ovog kraja.
                </p>
              </div>
            </div>
          </div>

          {/* 2. SEKCIJA - NAŠA PRIČA */}
          <div className="row align-items-center min-vh-100 about-row about-row-reverse">
            <div className="col-lg-6 col-12 about-text-col">
              <div className="about-text-box">
                <span className="about-subtitle">Naša priča</span>
                <h2>Vekovi tradicije, jedna porodična vizija</h2>
                <p>
                  Vinarija Milosavljević svoje korene nalazi u bogatoj istoriji
                  Bučja, gde se vinova loza gaji još od srednjeg veka. Još u
                  vreme kneza Lazara i dinastije Nemanjića, ovaj kraj bio je
                  poznat po uzgoju autohtonih sorti poput Prokupca. Ta duboka
                  povezanost sa zemljom postavila je temelje vinarske tradicije
                  koja traje do danas.
                </p>
                <p>
                  Porodica Milosavljević nastanila se u Bučju 1808. godine i
                  kroz generacije razvijala vinogradarstvo i proizvodnju vina.
                  Ključni koraci napravljeni su krajem 20. veka, kada su
                  osnovani prvi porodični podrumi i postavljeni temelji
                  savremene proizvodnje. Novi razvoj započinje povratkom
                  Milomira iz Švajcarske, koji donosi znanje i iskustvo i
                  obnavlja vinograde.
                </p>
                <p>
                  Danas, kroz brend „Vila Vina“, porodica obrađuje šest hektara
                  vinograda i proizvodi vina prepoznata širom sveta. Vođeni
                  zajedničkom vizijom, Milomir, Dragan i Branko nastavljaju da
                  unapređuju tradiciju i kvalitet. Njihova priča ostaje spoj
                  nasleđa, strasti i stalne težnje ka savršenstvu.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12 about-images-col">
              <AnimatedImageGallery
                images={imagesNasaPrica}
                activeIndex={activeIndexNasaPrica}
                right
              />
            </div>
          </div>

          {/* 3. SEKCIJA - MILOMIROVA PRIČA */}
          <div className="row align-items-center min-vh-100 about-row">
            <div className="col-lg-6 col-12 about-images-col">
              <AnimatedImageGallery
                images={imagesMilomir}
                activeIndex={activeIndexMilomir}
              />
            </div>

            <div className="col-lg-6 col-12 about-text-col">
              <div className="about-text-box">
                <span className="about-subtitle">Milomirova priča</span>
                <h1>Put strasti i nasleđe</h1>
                <p>
                  Milomir Milosavljević, osnivač vinarije Vila Vina, svoj vinski
                  put započeo je 1972. godine odlaskom u Švajcarsku, gde je
                  radio u vinariji Rebbaugenossenschaft u mestu Spiez. Tokom 35
                  godina rada u inostranstvu stekao je dragoceno iskustvo,
                  usvajajući najbolje prakse evropskog vinogradarstva i spajajući
                  preciznost nemačkih i sofisticiranost francuskih vinara.
                </p>
                <p>
                  Po povratku u rodno Bučje 2005. godine, Milomir podiže nove
                  vinograde i obnavlja porodičnu tradiciju staru više vekova. Sa
                  jasnom vizijom, kombinuje međunarodne sorte sa autohtonim
                  srpskim vinima, postavljajući temelje savremenog pristupa
                  proizvodnji.
                </p>
                <p>
                  U tom procesu osniva i razvija sopstveni brend vinarije pod
                  nazivom Vila Vina. Danas, uz podršku sina Dragana i unuka
                  Branka — treće generacije — Milomir i dalje aktivno učestvuje
                  u radu vinarije, stvarajući vina koja povezuju tradiciju,
                  znanje i modernu tehnologiju.
                </p>
                <p>
                  Fotografija „Ruke i grožđe“, autora Martina Čandira, danas
                  predstavlja simbol manifestacije „Dani Prokupca“, koja se
                  održava svake godine u oktobru širom Srbije.
                </p>
              </div>
            </div>
          </div>

          {/* 4. SEKCIJA - O BRENDU */}
          <div className="row align-items-center min-vh-100 about-row about-row-reverse">
            <div className="col-lg-6 col-12 about-text-col">
              <div className="about-text-box">
                <span className="about-subtitle">O brendu</span>
                <h2>Suština Vila Vina</h2>
                <p>
                  Po povratku iz Švajcarske, Milomir Milosavljević osniva brend
                  VILA VINA — kao izraz svoje vizije, znanja i dubokih porodičnih
                  korena. Ideja je bila jasna: spojiti tradiciju i inovaciju u
                  vinima koja nose autentičan karakter i savremen kvalitet.
                </p>
                <p>
                  Danas Vila Vina predstavlja vinariju sa devet etiketa, koje
                  obuhvataju raspon od svežih i aromatičnih belih vina do moćnih
                  crvenih vina dozrelih u bariku. Svaka boca nosi pečat ručnog
                  rada, pažnje prema detaljima i posvećenosti vrhunskom kvalitetu.
                </p>
                <p>
                  Vina iz brenda Vila Vina pronašla su svoj put do nekih od
                  najprestižnijih svetskih tržišta, uključujući Nemačku, Japan,
                  Kinu, Austriju, Sjedinjene Američke Države, Estoniju i
                  Francusku, potvrđujući vrednost i prepoznatljivost brenda na
                  međunarodnoj sceni.
                </p>
                <p>
                  Vila Vina je više od brenda — to je način života i filozofija
                  koja slavi autentičnost, kvalitet i trajnu vezu između
                  vinograda, porodice i vremena.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12 about-images-col">
              <AnimatedImageGallery
                images={imagesBrend}
                activeIndex={activeIndexBrend}
                right
              />
            </div>
          </div>

          {/* 5. SEKCIJA - VINOGRADI */}
          <div className="row align-items-center min-vh-100 about-row">
            <div className="col-lg-6 col-12 about-images-col">
              <AnimatedImageGallery
                images={imagesVinogradi}
                activeIndex={activeIndexVinogradi}
              />
            </div>

            <div className="col-lg-6 col-12 about-text-col">
              <div className="about-text-box">
                <span className="about-subtitle">Vinogradi</span>
                <h1>Terroir</h1>
                <p>
                  Vinogradi porodice Milosavljević prostiru se na 6 hektara
                  bogatog, mineralnog zemljišta sa žutim peskom, okrenuti jugu
                  na nadmorskoj visini od 300 do 380 metara, u podnožju Kopaonika
                  i Goča. Klima je umereno kontinentalna, s toplim letima i
                  svežim noćima, što stvara idealne uslove za vinograd.
                </p>
                <p>
                  Gaje se autohtone sorte Tamjanika i Prokupac, kao i
                  međunarodne sorte Sauvignon Blanc, Cabernet Sauvignon, dok su
                  Merlot i Shiraz specijaliteti vinarije.
                </p>
                <p>
                  Vina odležavaju u savremenom podrumu kapaciteta 45,000 litara,
                  u inoks tankovima i barik buradima od srpskog hrasta. Od ovih
                  vinograda nastalo je 9 etiketa vrhunskih vina, koja odražavaju
                  spoj tradicije i savremene tehnologije.
                </p>
                <p>
                  Vinarija Milosavljević primenjuje integrisanu proizvodnju,
                  uvodeći principe organske proizvodnje.
                </p>
              </div>
            </div>
          </div>

          <section className="timeline-section">
            <div className="timeline-header">
              <span className="about-subtitle">Vremenska linija</span>
              <h2>Put razvoja naše vinarije</h2>
              <p>
                Vodič kroz godine. Upoznajte ključne trenutke u razvoju vinarije
                Vila Vina.
              </p>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-years">
                {timelineData.map((item, index) => (
                  <button
                    key={index}
                    className={`timeline-year ${
                      timelineIndex === index ? "active" : ""
                    }`}
                    onClick={() => setTimelineIndex(index)}
                  >
                    {item.year}
                  </button>
                ))}
              </div>

              <div className="timeline-slider-box">
                <input
                  type="range"
                  min="0"
                  max={timelineData.length - 1}
                  step="1"
                  value={timelineIndex}
                  onChange={(e) => setTimelineIndex(Number(e.target.value))}
                  className="timeline-slider"
                />
              </div>

              <div className="timeline-content-box">
                <h3>{timelineData[timelineIndex].title}</h3>
                <p>{timelineData[timelineIndex].text}</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;