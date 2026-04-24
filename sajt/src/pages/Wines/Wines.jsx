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
import wine6 from "../../img/wine6.jpeg";
import wine7 from "../../img/wine7.jpeg";
import wine8 from "../../img/wine8.jpeg";
import wine9 from "../../img/wine9.jpeg";

const winesData = [
  {
    id: 1,
    name: "Tamjanika",
    image: wine1,
    shortText: "Cena: 900 dinara.",
    description:
      "Tamjanika Vila Vina predstavlja srce naše vinarije i njen najprepoznatljiviji proizvod. Ova suva muskatna sorta odlikuje se slamnasto žutom bojom sa blagim zelenim odsjajem i bogatim aromama. U njenom bukeu prepliću se mirisi tamjana, bosiljka, muskatnog oraha, tropskog voća i herbalnih nota. Svežina i prijatna pitkost čine je idealnim izborom za različite prilike. Odlično se slaže uz tradicionalna srpska jela poput punjene paprike, prebranca i mesa ispod sača, ali i uz lagane sireve i belu ribu. Takođe je savršen pratilac salata i laganijih obroka. Najbolje se služi rashlađena na temperaturi od 9 do 12°C kako bi se istakle njene arome. Tamjanika ima dugu tradiciju u Župi, gde se gaji vekovima i predstavlja simbol tog kraja. Njena raznolikost, od žute do zelene varijante, govori o spoju tradicije i prirodne evolucije. Tamjanika Vila Vina nije samo vino, već priča o nasleđu, autentičnosti i ljubavi prema vinogradarstvu.",
    price: 900,
  },
  {
    id: 2,
    name: "Cabernet Sauvignon Barrique",
    image: wine2,
    shortText: "Cena: 1300 dinara.",
    description:
      "Cabernet Sauvignon Barrique je premium vino proizvedeno od 100% grožđa ove poznate francuske sorte iz sopstvenih zasada. Odlikuje ga tamno crvena boja i kompleksan miris sa notama šumskog voća, pržene kafe, duvana i vanile iz hrastovih buradi. Na ukusu je pun i harmoničan, sa mekim taninima i dugotrajnom završnicom. Vino odležava 12 do 24 meseca u hrastovim buradima od 500 litara, čime dobija dodatnu složenost i eleganciju. Preporučuje se dekantiranje i serviranje na temperaturi od 16 do 18°C kako bi se arome potpuno razvile. Odlično se slaže uz različite vrste mesa, divljač, jagnjetinu, pečene bifteke, pikantne kobasice i zrele sireve. Sa ograničenom proizvodnjom od oko 3.000 boca godišnje, predstavlja ekskluzivan izbor za ljubitelje vrhunskih vina. Ovo vino je jedno od najcenjenijih u našoj kolekciji, potvrđeno brojnim prestižnim nagradama. Posebno se izdvaja uspeh na takmičenju Emozioni dal Mondo 2020 u Bergamu, gde je osvojio dva zlatna odličja.",
    price: 1300,
  },
  {
    id: 3,
    name: "Merlot",
    image: wine3,
    shortText: "Cena: 1300 dinara.",
    description:
      "Merlot Vina Vila iz premium linije nastaje u vinogradima smeštenim na jugoistočnim padinama, na 340 metara nadmorske visine, gde loza ima idealne uslove za razvoj. Iako poreklom iz Francuske, ovaj Merlot dobija poseban karakter zahvaljujući odležavanju u barik buradima od srpskog hrasta. Odlikuje ga tamno rubin crvena boja i bogat aromatski profil sa izraženim voćnim notama. Na ukusu je mekan, harmoničan i zaokružen prijatnim taninima i dugom završnicom. Njegova elegancija i punoća čine ga odličnim izborom za ljubitelje kompleksnih vina. Preporučuje se uz sočna i bogata jela, jače sireve, ali i čokoladne deserte za poseban gastronomski doživljaj. Dekantiranje pre serviranja dodatno oslobađa njegove arome i unapređuje ukus. Idealna temperatura serviranja je između 18 i 20°C kako bi se u potpunosti izrazili svi slojevi vina. Ovo vino predstavlja spoj pažljivo odabranog terroira, tradicije i savremene proizvodnje.",
    price: 1300,
  },
  {
    id: 4,
    name: "Prokupac",
    image: wine4,
    shortText: "Cena: 1000 dinara.",
    description:
      "Prokupac Vila Vina predstavlja autentično srpsko vino koje na najbolji način spaja tradiciju i savremenu proizvodnju. Ova autohtona sorta, poznata i kao rskavac ili kameničarka, gaji se vekovima i danas doživljava svoju renesansu. Vino se odlikuje tamno rubin crvenom bojom i bogatim aromama trešnje, kupine, ribizle i šumskog voća. Na ukusu je voćno, harmonično i zaokruženo, sa prijatnom srednje dugom završnicom. Zahvaljujući svom karakteru, osvojilo je ljubitelje vina kako u Srbiji, tako i širom sveta. Odlično se slaže uz crvena mesa, roštilj, divljač, tradicionalna jela, ali i uz ribu i raznovrsne deserte. Preporučuje se serviranje na temperaturi od 16 do 18°C kako bi se istakle njegove najbolje osobine. Prokupac ima bogatu istoriju koja seže još u vreme srednjovekovne Srbije i smatra se simbolom domaćeg vinogradarstva. Prokupac Vila Vina nije samo vino, već izraz kulture, nasleđa i jedinstvenog ukusa tradicije.",
    price: 1000,
  },
  {
    id: 5,
    name: "Jefimija",
    image: wine5,
    shortText: "Cena: 1300 dinara.",
    description:
      "Jefimija je premium barikirana Tamjanika iz vinarije Milosavljević, koja predstavlja spoj inovacije i tradicije u srpskom vinogradarstvu. Proizvedena od pažljivo odabranih grozdova iz sopstvenih zasada, odležava u novim hrastovim buradima od 500 litara, čime dobija dodatnu složenost i eleganciju. Odlikuje je svetlo žuta boja sa blagim zelenim nijansama i bogat aromatski profil u kome se prepliću note tamjana, bosiljka, vanile i hrasta. Na ukusu je harmonična, mekana i zaokružena, sa prijatnom svežinom i kremastom teksturom. Zahvaljujući posebnom procesu odležavanja, vino razvija kompleksne arome i finu ravnotežu između voćnosti i uticaja drveta. Jefimija je prepoznata i na međunarodnoj sceni, osvojivši srebrnu medalju na takmičenju AWC u Beču 2019. godine. Odlično se slaže uz tradicionalna jela, ribu sa grila, tvrde sireve i lagane salate. Preporučuje se serviranje na temperaturi od 11 do 12°C kako bi se u potpunosti izrazile njene arome. Ovo vino nosi ime po Jefimiji, simbolu kulture i tradicije, i predstavlja jedinstveno iskustvo u svakoj čaši.",
    price: 1300,
  },
  {
    id: 6,
    name: "Rose",
    image: wine6,
    shortText: "Cena: 800 dinara.",
    description:
      "Rose Vila Vina je vino koje spaja šarm, eleganciju i osvežavajući karakter u jedinstvenom doživljaju. Odlikuje ga intenzivna ružičasta boja i bogat aromatski profil sa notama zrelog crvenog šumskog voća, divlje ruže i suptilnih tonova ljubičice. Na ukusu je lagano, sveže i izuzetno prijatno, što ga čini savršenim izborom za različite prilike. Njegova pitkost i balans čine ga idealnim kako za svakodnevno uživanje, tako i za posebne trenutke. Odlično se slaže kao aperitiv, ali i uz predjela, roštilj, živinsko meso, testenine i voćne deserte. Preporučuje se serviranje na temperaturi od 10 do 12°C kako bi se u potpunosti istakle njegove arome i svežina. Proizvodi se pažljivim procesom kratkog kontakta sa pokožicom grožđa, čime dobija svoju prepoznatljivu boju i karakter. Ovaj spoj modernog pristupa i vinske tradicije čini ga posebnim izborom za ljubitelje roze vina. Rose Vila Vina nije samo vino, već simbol elegancije, uživanja i lepih trenutaka koji se pamte.",
    price: 800,
  },
  {
    id: 7,
    name: "Shiraz",
    image: wine7,
    shortText: "Cena: 1300 dinara.",
    description:
      "Shiraz Vila Vina iz premium linije predstavlja vino snažnog karaktera i izražene elegancije, koje u potpunosti otkriva potencijal ove svetski cenjene sorte. Odlikuje ga tamno ljubičasta boja i bogat aromatski profil sa notama crnog bibera, crne ribizle, dudinja i šumskog voća, uz diskretan trag začinskih tonova. Na ukusu je mekan, harmoničan i zaokružen finim kiselinama i srednje dugom završnicom. Zahvaljujući specifičnom podneblju, ovo vino razvija jedinstvenu kompleksnost i dubinu. Idealan je izbor za ljubitelje intenzivnijih i strukturiranih vina. Odlično se slaže uz pečenu ćuretinu, gusku, patku, roštiljano meso i jela od divljači. Preporučuje se serviranje na temperaturi od 18 do 20°C kako bi se u potpunosti istakao njegov karakter. Shiraz Vila Vina spaja bogatu tradiciju sorte sa autentičnim izrazom našeg terroira. Ovo vino pruža snažan i nezaboravan doživljaj u svakoj čaši.",
    price: 1300,
  },
  {
    id: 8,
    name: "Sauvignon Blanc",
    image: wine8,
    shortText: "Cena: 900 dinara.",
    description:
      "Sauvignon Blanc Vila Vina odlikuje se kristalnom bistrinom i svetlo žutom bojom sa zelenkastim odsjajem, što nagoveštava njegovu svežinu i eleganciju. U aromi dominiraju note citrusnog voća, zove, zelene jabuke i tropskih plodova, uz blage herbalne tonove. Na ukusu je osvežavajuć, harmoničan i lepo izbalansiran, sa izraženom živahnošću koja ga čini izuzetno pitkim. Zahvaljujući svojoj svestranosti, savršeno se uklapa uz plodove mora, ribu sa grila, bela i crvena mesa, kao i uz kozje sireve i voćne deserte. Njegova svežina dodatno dolazi do izražaja kada se služi rashlađen na temperaturi od 9 do 12°C. Ova sorta potiče iz Francuske, ali na našem podneblju dobija prepoznatljiv i autentičan karakter. Pažljivim uzgojem i selekcijom grožđa postiže se vrhunski kvalitet u svakoj boci. Sauvignon Blanc Vila Vina predstavlja spoj tradicije, savremenog pristupa i prirodne elegancije. Ovo vino je idealan izbor za ljubitelje laganih, aromatičnih i osvežavajućih belih vina.",
    price: 900,
  },
  {
    id: 9,
    name: "Cabernet Sauvignon",
    image: wine9,
    shortText: "Cena: 1000 dinara.",
    description:
      "Cabernet Sauvignon Vila Vina odlikuje se intenzivnom rubin crvenom bojom sa ljubičastim odsjajem i bogatim aromama šumskog voća, borovnice i kupine. Nastaje u ekološkoj sredini uz strogo kontrolisan prinos, što mu daje dubinu, kompleksnost i harmoničan ukus. Na nepcu je pun, sa lepo izbalansiranim taninima i dugom, elegantnom završnicom. Zahvaljujući optimalnim uslovima sa južno orijentisanih padina, grožđe razvija izražene i koncentrisane arome. Ovo vino predstavlja savršen izbor za ljubitelje snažnih i strukturiranih crvenih vina. Odlično se slaže uz sve vrste mesa, posebno dimljena i pečena jela, ali i uz čokoladne deserte. Preporučuje se serviranje na temperaturi od 16 do 18°C kako bi se u potpunosti istakao njegov karakter. Poseduje i potencijal za odležavanje, tokom kojeg dodatno razvija svoju složenost i eleganciju. Cabernet Sauvignon Vila Vina donosi vrhunski balans snage, kvaliteta i prefinjenog ukusa.",
    price: 1000,
  },
];

const ITEMS_PER_PAGE = 4;
const ORDER_ITEMS_PER_PAGE = 3;
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
  const [orderPage, setOrderPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    note: "",
  });

  const [quantities, setQuantities] = useState(
    winesData.reduce((acc, wine) => {
      acc[wine.id] = 0;
      return acc;
    }, {})
  );

  const totalPages = Math.ceil(winesData.length / ITEMS_PER_PAGE);

  const visibleWines = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return winesData.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  const totalOrderPages = Math.ceil(winesData.length / ORDER_ITEMS_PER_PAGE);

  const visibleOrderWines = useMemo(() => {
    const start = orderPage * ORDER_ITEMS_PER_PAGE;
    return winesData.slice(start, start + ORDER_ITEMS_PER_PAGE);
  }, [orderPage]);

  const selectedItems = useMemo(() => {
    return winesData.filter((wine) => quantities[wine.id] > 0);
  }, [quantities]);

  const totalPrice = useMemo(() => {
    return winesData.reduce((sum, wine) => {
      return sum + wine.price * (quantities[wine.id] || 0);
    }, 0);
  }, [quantities]);

  const totalBottles = useMemo(() => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  }, [quantities]);

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

  const nextOrderPage = () => {
    setOrderPage((prev) => (prev + 1) % totalOrderPages);
  };

  const prevOrderPage = () => {
    setOrderPage((prev) => (prev - 1 + totalOrderPages) % totalOrderPages);
  };

  const handleQuantityChange = (id, type) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const nextValue =
        type === "increase" ? current + 1 : Math.max(0, current - 1);

      return {
        ...prev,
        [id]: nextValue,
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.address.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      alert("Molim vas popunite ime, prezime, adresu, telefon i email.");
      return;
    }

    if (selectedItems.length === 0) {
      alert("Molim vas izaberite barem jedno vino.");
      return;
    }

    if (totalBottles < 6) {
      alert("Minimalna porudžbina je 6 flaša.");
      return;
    }

    const orderLines = selectedItems
      .map((wine) => {
        const qty = quantities[wine.id];
        const itemTotal = qty * wine.price;
        return `- ${wine.name}: ${qty} x ${wine.price} RSD = ${itemTotal} RSD`;
      })
      .join("\n");

    const body = `
Nova porudžbina sa stranice vina

Kupac:
Ime: ${formData.firstName}
Prezime: ${formData.lastName}
Adresa: ${formData.address}
Telefon: ${formData.phone}
Email: ${formData.email}

Porudžbina:
${orderLines}

Ukupan broj flaša: ${totalBottles}
Ukupno: ${totalPrice} RSD

Napomena:
${formData.note || "Nema napomene"}
    `.trim();

    const subject = encodeURIComponent("Nova porudžbina sa stranice vina");
    const mailBody = encodeURIComponent(body);

    window.location.href = `mailto:info@vinarija-milosavljevic.com?subject=${subject}&body=${mailBody}`;
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

          <section className="wine-order-section">
            <div className="wine-order-container">
              <div className="order-header">
                <span className="order-badge">Online porudžbina</span>
                <h2>Naručite vina direktno sa stranice vina</h2>
                <p>
                  Izaberite vina, unesite svoje podatke i klikom na dugme
                  pripremite porudžbinu za slanje na email vinarije.
                </p>
                <p className="order-min-note">
                  Minimalna porudžbina je 6 flaša.
                </p>
              </div>

              <div className="order-layout">
                <div className="order-products-card">
                  <h3>Izaberite vina</h3>

                  <div className="order-products-list">
                    {visibleOrderWines.map((wine) => (
                      <div key={wine.id} className="order-product-item">
                        <div className="order-product-info">
                          <h4>{wine.name}</h4>
                          <p>{wine.price} RSD</p>
                        </div>

                        <div className="order-quantity-controls">
                          <button
                            type="button"
                            onClick={() =>
                              handleQuantityChange(wine.id, "decrease")
                            }
                            className="qty-btn"
                          >
                            −
                          </button>

                          <span className="qty-value">
                            {quantities[wine.id]}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              handleQuantityChange(wine.id, "increase")
                            }
                            className="qty-btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {totalOrderPages > 1 && (
                    <div
                      style={{
                        marginTop: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                      }}
                    >
                      <button
                        type="button"
                        onClick={prevOrderPage}
                        className="qty-btn"
                      >
                        ←
                      </button>

                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "700",
                          color: "#ffffff",
                        }}
                      >
                        {orderPage + 1} / {totalOrderPages}
                      </span>

                      <button
                        type="button"
                        onClick={nextOrderPage}
                        className="qty-btn"
                      >
                        →
                      </button>
                    </div>
                  )}

                  <div className="order-summary">
                    <h4>Pregled porudžbine</h4>

                    {selectedItems.length > 0 ? (
                      <>
                        <ul className="order-summary-list">
                          {selectedItems.map((wine) => (
                            <li key={wine.id}>
                              <span>
                                {wine.name} x {quantities[wine.id]}
                              </span>
                              <strong>
                                {wine.price * quantities[wine.id]} RSD
                              </strong>
                            </li>
                          ))}
                        </ul>

                        <div className="order-total">
                          <span>Ukupno flaša</span>
                          <strong>{totalBottles}</strong>
                        </div>

                        <div className="order-total">
                          <span>Ukupno</span>
                          <strong>{totalPrice} RSD</strong>
                        </div>
                      </>
                    ) : (
                      <p className="order-empty">
                        Još niste dodali nijedno vino.
                      </p>
                    )}
                  </div>
                </div>

                <form className="order-form-card" onSubmit={handleSubmit}>
                  <h3>Podaci za porudžbinu</h3>

                  <div className="order-form-grid">
                    <div className="order-field">
                      <label htmlFor="firstName">Ime</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Unesite ime"
                      />
                    </div>

                    <div className="order-field">
                      <label htmlFor="lastName">Prezime</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Unesite prezime"
                      />
                    </div>

                    <div className="order-field order-field-full">
                      <label htmlFor="address">Adresa</label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Unesite adresu"
                      />
                    </div>

                    <div className="order-field">
                      <label htmlFor="phone">Telefon</label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Unesite telefon"
                      />
                    </div>

                    <div className="order-field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Unesite email"
                      />
                    </div>

                    <div className="order-field order-field-full">
                      <label htmlFor="note">Napomena</label>
                      <textarea
                        id="note"
                        name="note"
                        rows="5"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder="Dodajte napomenu uz porudžbinu"
                      />
                    </div>
                  </div>

                  <button type="submit" className="order-submit-btn">
                    Pošalji porudžbinu
                  </button>
                </form>
              </div>
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