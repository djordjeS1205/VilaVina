import Navbar from "../../components/Navbar";
import "./Home.css";
import heroImage from "../../img/Slika1.jpeg"; // import slike

const Home = () => {
  return (
    <>
      <Navbar />

    
      <div className="hero">
        <div className="hero-overlay">
          <h1>
            
          </h1>
        </div>
      </div>
    

      <div style={{ padding: "50px" }}>
        {

            function Hero() {
  return (
    <div>
      <img src={heroImage} alt="Hero" />
    </div>
  );
}


        }
      </div>
    </>
  );
};

export default Home;