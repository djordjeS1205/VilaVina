import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Order.css";

const winesData = [
  { id: 1, name: "Tamjanika", price: 900, category: "authentic" },
  { id: 2, name: "Cabernet Sauvignon Barrique", price: 1300, category: "premium" },
  { id: 3, name: "Merlot", price: 1300, category: "classic" },
  { id: 4, name: "Prokupac", price: 1000, category: "authentic" },
  { id: 5, name: "Jefimija", price: 1300, category: "premium" },
  { id: 6, name: "Rose", price: 800, category: "classic" },
  { id: 7, name: "Shiraz", price: 1300, category: "classic" },
  { id: 8, name: "Sauvignon Blanc", price: 900, category: "classic" },
  { id: 9, name: "Cabernet Sauvignon", price: 1000, category: "classic" },
];

const ITEMS_PER_PAGE = 5;
const ALLOWED_CATEGORIES = ["all", "classic", "premium", "authentic"];

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

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

  const activeCategory = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get("category") || "all";

    return ALLOWED_CATEGORIES.includes(categoryFromUrl)
      ? categoryFromUrl
      : "all";
  }, [location.search]);

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

  const handleCategoryChange = (category) => {
    setCurrentPage(0);

    if (category === "all") {
      navigate("/order");
      return;
    }

    navigate(`/order?category=${category}`);
  };

  const filteredWines = useMemo(() => {
    if (activeCategory === "all") {
      return winesData;
    }

    return winesData.filter((wine) => wine.category === activeCategory);
  }, [activeCategory]);

  const paginatedWines = useMemo(() => {
    if (activeCategory !== "all") {
      return filteredWines;
    }

    const start = currentPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredWines.slice(start, end);
  }, [filteredWines, activeCategory, currentPage]);

  const totalPages = Math.ceil(winesData.length / ITEMS_PER_PAGE);

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
Nova porudžbina sa sajta Vila Vina

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

    const subject = encodeURIComponent("Nova porudžbina sa sajta Vila Vina");
    const mailBody = encodeURIComponent(body);

    window.location.href = `mailto:info@vinarija-milosavljevic.com?subject=${subject}&body=${mailBody}`;
  };

  return (
    <>
      <Navbar />

      <section className="order-page">
        <div className="container fade-in">
          <div className="order-header">
            <span className="order-badge">Online porudžbina</span>
            <h1>Naručite vina direktno sa sajta</h1>
            <p>
              Izaberite vina, unesite svoje podatke i klikom na dugme pripremite
              porudžbinu za slanje na email vinarije.
            </p>
            <p className="order-min-note">Minimalna porudžbina je 6 flaša.</p>
          </div>

          <div className="order-layout">
            <div className="order-products-card">
              <h3>Izaberite vina</h3>

              <div className="order-filters">
                <button
                  type="button"
                  className={`order-filter-btn ${activeCategory === "all" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("all")}
                >
                  Sva
                </button>

                <button
                  type="button"
                  className={`order-filter-btn ${activeCategory === "classic" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("classic")}
                >
                  Classic
                </button>

                <button
                  type="button"
                  className={`order-filter-btn ${activeCategory === "premium" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("premium")}
                >
                  Premium
                </button>

                <button
                  type="button"
                  className={`order-filter-btn ${activeCategory === "authentic" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("authentic")}
                >
                  Authentic
                </button>
              </div>

              <div className="order-products-list">
                {paginatedWines.map((wine) => (
                  <div key={wine.id} className="order-product-item">
                    <div className="order-product-info">
                      <h4>{wine.name}</h4>
                      <p>{wine.price} RSD</p>
                    </div>

                    <div className="order-quantity-controls">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(wine.id, "decrease")}
                        className="qty-btn"
                      >
                        −
                      </button>

                      <span className="qty-value">{quantities[wine.id]}</span>

                      <button
                        type="button"
                        onClick={() => handleQuantityChange(wine.id, "increase")}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {activeCategory === "all" && totalPages > 1 && (
                <div className="order-pagination">
                  <button
                    type="button"
                    className="order-arrow-btn"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                  >
                    ←
                  </button>

                  <span className="order-page-indicator">
                    {currentPage + 1} / {totalPages}
                  </span>

                  <button
                    type="button"
                    className="order-arrow-btn"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
                    }
                    disabled={currentPage === totalPages - 1}
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
                          <strong>{wine.price * quantities[wine.id]} RSD</strong>
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
                  <p className="order-empty">Još niste dodali nijedno vino.</p>
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

      <Footer />
    </>
  );
};

export default Order;