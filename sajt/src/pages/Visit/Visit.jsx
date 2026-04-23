import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Visit.css";

import visit1 from "../../img/Posnas1.jpeg";
import visit2 from "../../img/Posnas2.jpeg";
import visit3 from "../../img/Posnas3.jpeg";

const Visit = () => {
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=Vila+Vina+Bu%C4%8Dje+Trstenik+Srbija";

  const mapsEmbed =
    "https://www.google.com/maps?q=Vila%20Vina%20Bu%C4%8Dje%20Trstenik%20Srbija&output=embed";

  return (
    <>
      <Navbar />

      <div className="visit-page">
        <section className="visit-hero">
          <div className="visit-hero-overlay" />
          <div className="visit-container visit-hero-content">
            <span className="visit-hero-subtitle">Posetite nas</span>
            <h1>Doživite Vila Vina iz prve ruke</h1>
            <p>
              Ovde vino ne počinje u čaši, već u vinogradu i strasti koja ga oblikuje. Svaka poseta otkriva priču koja se živi i deli.
            </p>
          </div>
        </section>

        <section className="visit-contact-section">
          <div className="visit-container">
            <div className="visit-contact-grid">
              <a href="tel:+38169733169" className="visit-contact-card">
                <span className="visit-contact-label">Rezervacije</span>
                <h3>+381 69 733 169</h3>
                <p>Direktan poziv sa mobilnog telefona i vaša rezervacija je spremna.</p>
              </a>

              <a href="tel:+381641766103" className="visit-contact-card">
                <span className="visit-contact-label">Kontakt</span>
                <h3>+381 64 17 66 103</h3>
                <p>Dostupni za pitanja, rezervacije i dodatne informacije.</p>
              </a>

              <a
                href="mailto:info@vinarija-milosavljevic.com"
                className="visit-contact-card"
              >
                <span className="visit-contact-label">Email</span>
                <h3>info@vinarija-milosavljevic.com</h3>
                <p>Pošaljite nam poruku i javićemo vam se u najkraćem roku.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="visit-story-section">
          <div className="visit-container">
            <div className="visit-story-row">
              <div className="visit-text-box">
                <span className="visit-section-tag">Ambijent</span>
                <h2>Doživite spoj prirode, tradicije i vrhunskog vina</h2>
                <p>
                  Na blagim padinama Bučja, okružena vinogradima i netaknutom prirodom, vinarija Milosavljević pruža autentičan ambijent za uživanje u vinu. Tradicija duga vekovima i pažljivo negovani zasadi stvaraju jedinstvenu atmosferu mira i elegancije.
                </p>
                <p>
                  Poseta vinariji je više od degustacije. To je doživljaj koji spaja vino, prirodu i porodičnu priču. Uz pogled na vinograde i čašu vrhunskog vina, gosti upoznaju strast i posvećenost utkane u svaku bocu.
                </p>
              </div>

              <div className="visit-image-box">
                <img src={visit1} alt="Poseta vinariji" className="visit-image" />
              </div>
            </div>

            <div className="visit-story-row visit-story-row-reverse">
              <div className="visit-text-box">
                <span className="visit-section-tag">Degustacija</span>
                <h2>Uživajte u čarima naših vina uz:</h2>
                <p>
                  Obilazak vinograda i podruma: Saznajte više o našoj filozofiji proizvodnje, tradiciji i savremenim inovacijama dok istražujete svaki kutak naše vinarije.
                </p>
                <p>
                  Kušajte naša vrhunska vina i otkrijte njihove bogate arome i ukuse. Iskusite spoj naših vina s pažljivo odabranim specijalitetima kako biste u potpunosti uživali u bogatstvu ukusa.
                </p>
              </div>

              <div className="visit-image-box">
                <img src={visit2} alt="Degustacija vina" className="visit-image" />
              </div>
            </div>

            <div className="visit-story-row">
              <div className="visit-text-box">
                <span className="visit-section-tag">Doživljaj</span>
                <h2>Iskustvo gostoprimstva i vrhunskog kvaliteta</h2>
                <p>
                  U vinariji Milosavljević svaki gost dočekan je sa pažnjom i iskrenim gostoprimstvom koje se neguje generacijama. Poseta donosi opušten i prijatan ambijent u kome se kvalitet vina i posvećenost detaljima osećaju na svakom koraku.
                </p>
                <p>
                  Uz vrhunska vina i toplu atmosferu, gosti imaju priliku da uživaju u autentičnom vinskom iskustvu. Vila Vina spaja tradiciju, kvalitet i gostoprimstvo u jedinstven doživljaj koji se pamti.
                </p>
              </div>

              <div className="visit-image-box">
                <img src={visit3} alt="Ambijent vinarije" className="visit-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="visit-map-section">
          <div className="visit-container">
            <div className="visit-map-header">
              <span className="visit-section-tag">Lokacija</span>
              <h2>Pronađite nas lako</h2>
              <p>
               Do nas možete lako stići, a vrata su vam uvek otvorena za nezaboravno vinsko iskustvo. 
              </p>
            </div>

            <div className="visit-map-card">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-map-link-layer"
                aria-label="Otvori lokaciju na Google Maps"
              />

              <iframe
                src={mapsEmbed}
                title="Mapa lokacije Vila Vina"
                className="visit-map-frame"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="visit-map-overlay-card">
                <span className="visit-map-badge">Google Maps</span>
                <h3>Vila Vina</h3>
                <p>Selo Bučje, opština Trstenik, Srbija</p>

                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-map-button"
                >
                  Otvori u mapama
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Visit;