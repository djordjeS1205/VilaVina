import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";
import heroImage from "../../img/Slika1.jpeg";

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

      {/* LEVI TEKST */}
      <div className="col-md-6 story-text">
        <p>
          Pre više od tri decenije, Milomir Milosavljević napustio je rodno selo Bučje, smešteno na desnoj obali Zapadne Morave. Odlazak od vinograda, čiji koreni sežu još iz vremena Rimljana i koji su prolazili kroz istoriju manastira Pantelejmona, bio je emotivan trenutak. Ipak, vinova loza je i dalje bila deo porodice Milosavljević, sve dok nije postala njihovo nasledstvo pre dva veka.
        </p>
      </div>

      {/* DESNI TEKST */}
      <div className="col-md-6 story-text right">
        <p>
          Dvadeset osam godina kasnije, Milomir je svoju porodičnu tradiciju, dugu gotovo 200 godina, nastavio u vinariji Rebbaugenossenschaft Spiez u švajcarskom Kantonu Bern. Tu je upoznao nemačku preciznost i francusku delikatnost, veštine koje su oblikovale njegov pogled na vinogradarstvo. Nakon toga, poželeo je da stečeno znanje prenese na svog sina Dragana i unuka Branka, te se vratio u rodnu Srbiju.
        </p>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default Home;