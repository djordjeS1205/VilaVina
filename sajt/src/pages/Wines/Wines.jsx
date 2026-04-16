import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Wines.css";

import bgWine from "../../img/wine.jpg";
import wine1 from "../../img/wine1.jpg";
import wine2 from "../../img/wine2.jpg";
import wine3 from "../../img/wine3.jpg";
import wine4 from "../../img/wine4.jpg";
import wine5 from "../../img/wine5.jpeg";

const winesData = [
  {
    id: 1,
    name: "Tamjanika",
    image: wine1,
    shortText: "Zašto odabrati Tamjaniku Vila Vina?",
    description:
      "Tamjanika Vila Vina predstavlja srce naše vinarije i njen najprepoznatljiviji proizvod. Ova suva muskatna sorta odlikuje se slamnasto žutom bojom sa blagim zelenim odsjajem i bogatim aromama. U njenom bukeu prepliću se mirisi tamjana, bosiljka, muskatnog oraha, tropskog voća i herbalnih nota. Svežina i prijatna pitkost čine je idealnim izborom za različite prilike. Odlično se slaže uz tradicionalna srpska jela poput punjene paprike, prebranca i mesa ispod sača, ali i uz lagane sireve i belu ribu. Takođe je savršen pratilac salata i laganijih obroka. Najbolje se služi rashlađena na temperaturi od 9 do 12°C kako bi se istakle njene arome. Tamjanika ima dugu tradiciju u Župi, gde se gaji vekovima i predstavlja simbol tog kraja. Njena raznolikost, od žute do zelene varijante, govori o spoju tradicije i prirodne evolucije. Tamjanika Vila Vina nije samo vino, već priča o nasleđu, autentičnosti i ljubavi prema vinogradarstvu.",
  },
  {
    id: 2,
    name: "Cabernet Sauvignon Barrique",
    image: wine2,
    shortText: "Zašto odabrati Cabernet Sauvignon Barrique Vila Vina?",
    description:
      "Cabernet Sauvignon Barrique je premium vino proizvedeno od 100% grožđa ove poznate francuske sorte iz sopstvenih zasada. Odlikuje ga tamno crvena boja i kompleksan miris sa notama šumskog voća, pržene kafe, duvana i vanile iz hrastovih buradi. Na ukusu je pun i harmoničan, sa mekim taninima i dugotrajnom završnicom. Vino odležava 12 do 24 meseca u hrastovim buradima od 500 litara, čime dobija dodatnu složenost i eleganciju. Preporučuje se dekantiranje i serviranje na temperaturi od 16 do 18°C kako bi se arome potpuno razvile. Odlično se slaže uz različite vrste mesa, divljač, jagnjetinu, pečene bifteke, pikantne kobasice i zrele sireve. Sa ograničenom proizvodnjom od oko 3.000 boca godišnje, predstavlja ekskluzivan izbor za ljubitelje vrhunskih vina. Ovo vino je jedno od najcenjenijih u našoj kolekciji, potvrđeno brojnim prestižnim nagradama. Posebno se izdvaja uspeh na takmičenju Emozioni dal Mondo 2020 u Bergamu, gde je osvojio dva zlatna odličja.",
  },
  {
    id: 3,
    name: "Merlot",
    image: wine3,
    shortText: "Zašto odabrati Merlot Vila Vina?",
    description:
      "Merlot Vina Vila iz premium linije nastaje u vinogradima smeštenim na jugoistočnim padinama, na 340 metara nadmorske visine, gde loza ima idealne uslove za razvoj. Iako poreklom iz Francuske, ovaj Merlot dobija poseban karakter zahvaljujući odležavanju u barik buradima od srpskog hrasta. Odlikuje ga tamno rubin crvena boja i bogat aromatski profil sa izraženim voćnim notama. Na ukusu je mekan, harmoničan i zaokružen prijatnim taninima i dugom završnicom. Njegova elegancija i punoća čine ga odličnim izborom za ljubitelje kompleksnih vina. Preporučuje se uz sočna i bogata jela, jače sireve, ali i čokoladne deserte za poseban gastronomski doživljaj. Dekantiranje pre serviranja dodatno oslobađa njegove arome i unapređuje ukus. Idealna temperatura serviranja je između 18 i 20°C kako bi se u potpunosti izrazili svi slojevi vina. Ovo vino predstavlja spoj pažljivo odabranog terroira, tradicije i savremene proizvodnje.",
  },
  {
    id: 4,
    name: "Prokupac",
    image: wine4,
    shortText: "Zašto odabrati Prokupac Vila Vina?",
    description:
      "Prokupac Vila Vina predstavlja autentično srpsko vino koje na najbolji način spaja tradiciju i savremenu proizvodnju. Ova autohtona sorta, poznata i kao rskavac ili kameničarka, gaji se vekovima i danas doživljava svoju renesansu. Vino se odlikuje tamno rubin crvenom bojom i bogatim aromama trešnje, kupine, ribizle i šumskog voća. Na ukusu je voćno, harmonično i zaokruženo, sa prijatnom srednje dugom završnicom. Zahvaljujući svom karakteru, osvojilo je ljubitelje vina kako u Srbiji, tako i širom sveta. Odlično se slaže uz crvena mesa, roštilj, divljač, tradicionalna jela, ali i uz ribu i raznovrsne deserte. Preporučuje se serviranje na temperaturi od 16 do 18°C kako bi se istakle njegove najbolje osobine. Prokupac ima bogatu istoriju koja seže još u vreme srednjovekovne Srbije i smatra se simbolom domaćeg vinogradarstva. Prokupac Vila Vina nije samo vino, već izraz kulture, nasleđa i jedinstvenog ukusa tradicije.",
  },
  {
    id: 5,
    name: "Jefimija",
    image: wine5,
    shortText: "Zašto odabrati Jefimija Vila Vina?",
    description:
      "Jefimija je premium barikirana Tamjanika iz vinarije Milosavljević, koja predstavlja spoj inovacije i tradicije u srpskom vinogradarstvu. Proizvedena od pažljivo odabranih grozdova iz sopstvenih zasada, odležava u novim hrastovim buradima od 500 litara, čime dobija dodatnu složenost i eleganciju. Odlikuje je svetlo žuta boja sa blagim zelenim nijansama i bogat aromatski profil u kome se prepliću note tamjana, bosiljka, vanile i hrasta. Na ukusu je harmonična, mekana i zaokružena, sa prijatnom svežinom i kremastom teksturom. Zahvaljujući posebnom procesu odležavanja, vino razvija kompleksne arome i finu ravnotežu između voćnosti i uticaja drveta. Jefimija je prepoznata i na međunarodnoj sceni, osvojivši srebrnu medalju na takmičenju AWC u Beču 2019. godine. Odlično se slaže uz tradicionalna jela, ribu sa grila, tvrde sireve i lagane salate. Preporučuje se serviranje na temperaturi od 11 do 12°C kako bi se u potpunosti izrazile njene arome. Ovo vino nosi ime po Jefimiji, simbolu kulture i tradicije, i predstavlja jedinstveno iskustvo u svakoj čaši.",
  },
];

const ITEMS_PER_PAGE = 4;
const ANIMATION_DURATION = 3000;

const AnimatedCircle = ({ value, label, suffix = "" }) => {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const elapsed = timestamp - startTimestamp;
      const percent = Math.min(elapsed / ANIMATION_DURATION, 1);

      setProgress(percent);
      setCount(Math.floor(percent * value));

      if (percent < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const degrees = progress * 360;

  return (
    <div className="stat-circle-box">
      <div
        className="stat-circle"
        style={{
          background: `conic-gradient(rgba(255,255,255,0.95) ${degrees}deg, rgba(255,255,255,0.15) ${degrees}deg)`,
        }}
      >
        <div className="stat-circle-inner">
          <span className="stat-number">
            {count}
            {suffix}
          </span>
        </div>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const Wines = () => {
  const [selectedWine, setSelectedWine] = useState(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(winesData.length / ITEMS_PER_PAGE);

  const visibleWines = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return winesData.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  useEffect(() => {
    if (selectedWine) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedWine]);

  const openCard = (wine) => {
    setSelectedWine(wine);
  };

  const closeCard = () => {
    setSelectedWine(null);
  };

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <>
      <Navbar />

      <div
        className={`wines-page ${selectedWine ? "blur-active" : ""}`}
        style={{ backgroundImage: `url(${bgWine})` }}
      >
        <div className="wines-overlay">
          <section className="wines-hero">
            <div className="wines-hero-content">
              <h1>Ukusi koji pričaju priču</h1>
              <p>
                Svako naše vino nosi deo tradicije, pažnje i strasti pretočene u
                jedinstveno iskustvo.
              </p>

              <div className="wines-stats">
                <AnimatedCircle value={8} label="Vrsta vina u ponudi" />
                <AnimatedCircle value={26} label="Osvojenih nagrada" />
              </div>
            </div>
          </section>

          <section className="wines-grid-section">
            <div className="wines-grid">
              {visibleWines.map((wine) => (
                <div
                  className="wine-card"
                  key={wine.id}
                  onClick={() => openCard(wine)}
                >
                  <div className="wine-card-image-wrapper">
                    <img
                      src={wine.image}
                      alt={wine.name}
                      className="wine-card-image"
                    />
                  </div>

                  <div className="wine-card-content">
                    <h3>{wine.name}</h3>
                    <p>{wine.shortText}</p>
                    <button className="wine-card-button">Saznaj više</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="wines-pagination">
              {totalPages > 1 && (
                <>
                  <button className="page-arrow" onClick={prevPage}>
                    ↑
                  </button>

                  <div className="page-indicator">
                    {page + 1} / {totalPages}
                  </div>

                  <button className="page-arrow" onClick={nextPage}>
                    ↓
                  </button>
                </>
              )}
            </div>
          </section>
        </div>

        <Footer />
      </div>

      {selectedWine && (
        <div className="wine-modal-overlay" onClick={closeCard}>
          <div
            className="wine-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="wine-modal-close" onClick={closeCard}>
              ×
            </button>

            <div className="wine-modal-image-wrapper">
              <img
                src={selectedWine.image}
                alt={selectedWine.name}
                className="wine-modal-image"
              />
            </div>

            <div className="wine-modal-content">
              <h2>{selectedWine.name}</h2>
              <p>{selectedWine.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wines;