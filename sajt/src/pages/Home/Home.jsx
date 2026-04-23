import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";
import heroImage from "../../img/Slika1.jpeg";
import imageTwo from "../../img/Slika2.jpeg";
import imageThree from "../../img/Slika3.jpeg";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import classicImage from "../../img/classic-placeholder.jpg";
import premiumImage from "../../img/premium-placeholder.jpg";
import authenticImage from "../../img/authentic-placeholder.jpg";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <section className="cover">
        <img src={heroImage} alt="Vinarija" />
      </section>

      <section className="content">
        <h1 className="fade-in">Naša priča</h1>

        <div className="container fade-in">
          <div className="row story-row">
            <div className="col-md-6 story-text">
              <p>
                Pre više od tri decenije, Milomir Milosavljević napustio je rodno selo
                Bučje, smešteno na desnoj obali Zapadne Morave. Odlazak od vinograda,
                čiji koreni sežu još iz vremena Rimljana i koji su prolazili kroz
                istoriju manastira Pantelejmona, bio je emotivan trenutak. Ipak, vinova
                loza je i dalje bila deo porodice Milosavljević, sve dok nije postala
                njihovo nasledstvo pre dva veka.
              </p>
            </div>

            <div className="col-md-6 story-text right">
              <p>
                Dvadeset osam godina kasnije, Milomir je svoju porodičnu tradiciju,
                dugu gotovo 200 godina, nastavio u vinariji Rebbaugenossenschaft Spiez
                u švajcarskom Kantonu Bern. Tu je upoznao nemačku preciznost i francusku
                delikatnost, veštine koje su oblikovale njegov pogled na vinogradarstvo.
                Nakon toga, poželeo je da stečeno znanje prenese na svog sina Dragana i
                unuka Branka, te se vratio u rodnu Srbiju.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container fade-in">
          <div className="row gallery-row">
            <div className="col-md-6 gallery-image-wrapper">
              <img src={imageTwo} alt="Vinarija slika 2" className="gallery-image" />
            </div>

            <div className="col-md-6 gallery-image-wrapper">
              <img src={imageThree} alt="Vinarija slika 3" className="gallery-image" />
            </div>
          </div>
        </div>
      </section>

      <div className="content extra-content">
        <h1 className="fade-in">Vizionar iza Vila Vina</h1>

        <div className="container fade-in">
          <div className="row story-row">
            <div className="col-12 story-text">
              <p>
                Milomir Milosavljević je kroz decenije iskustva u vinskoj industriji
                stekao neprocenjivo znanje, prvo kao radnik u vinogradima Švajcarske, a
                zatim kao osnivač brenda Vila Vina. Njegova strast prema vinogradarstvu
                počela je još u rodnom Bučju, na desnoj obali Zapadne Morave, gde su
                vinogradi porodice Milosavljević prostirali kroz vekovnu tradiciju.
                Nakon što je proveo više od 35 godina u Švajcarskoj, gde je učio od
                najboljih, Milomir je odlučio da se vrati u Srbiju i oživi porodičnu
                tradiciju stvaranja vrhunskih vina. Osnovao je brend Vila Vina kao
                sintezu švajcarske preciznosti, francuske elegancije i bogate srpske
                tradicije. Danas, Vila Vina nije samo brend – to je priča o porodičnom
                nasleđu, ljubavi prema vinu i posvećenosti u svakom detalju. Uticaj naše
                vinarije nadilazi samo proizvodnju vina, Milomirova vizionarska ideja o
                promociji vinskog turizma donela je i našem brendu zlatnu medalju sa
                Novosadskog sajma za doprinos razvoju ove oblasti.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="home-collections-section">
        <div className="container fade-in">
          <div className="home-collections-grid">
            <div className="home-collection-card">
              <span className="home-collection-label">Classic</span>
              <img
                src={classicImage}
                alt="Classic kolekcija"
                className="home-collection-image"
              />
              <div className="home-collection-content">
                <p>
                  Vina koja se ne dokazuju, ona se otvaraju. Pitka, iskrena i uvek na pravom mestu, bilo da je ručak u dvorištu ili veče sa prijateljima. Ovo su boce koje se ne čuvaju za posebne prilike, one ih stvaraju.
                </p>
                <Link to="/order?category=classic" className="home-collection-btn">
                  Naruči
                </Link>
              </div>
            </div>

            <div className="home-collection-card">
              <span className="home-collection-label">Premium</span>
              <img
                src={premiumImage}
                alt="Premium kolekcija"
                className="home-collection-image"
              />
              <div className="home-collection-content">
                <p>
                  Dublji gutljaj, sporije vreme. Bogate arome, slojevi koji se otkrivaju i trenutak koji traži pažnju. Kada želiš da usporiš, nazdraviš i zapamtiš. Ovde počinje priča.
                </p>
                <Link to="/order?category=premium" className="home-collection-btn">
                  Naruči
                </Link>
              </div>
            </div>

            <div className="home-collection-card">
              <span className="home-collection-label">Authentic</span>
              <img
                src={authenticImage}
                alt="Authentic kolekcija"
                className="home-collection-image"
              />
              <div className="home-collection-content">
                <p>
                  Iz zemlje koja ih je rodila, Tamjanika i Prokupac u svom punom izrazu. Mirisno, živo i svojski. Vina koja nose sunce, zemlju i karakter Srbije u svakoj kapi. Za one koji traže nešto svoje, autentično i neponovljivo.
                </p>
                <Link to="/order?category=authentic" className="home-collection-btn">
                  Naruči
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-buttons-section">
        <Link to="/about" className="home-action-btn">
          O nama
        </Link>
        <Link to="/blog" className="home-action-btn">
          Posetite naš blog
        </Link>
        <Link to="/visit" className="home-action-btn">
          Poseta vinariji
        </Link>
        <Link to="/order" className="home-action-btn">
          Poruči vino
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Home;