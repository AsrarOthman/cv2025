import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../components/Card.css";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null); // simpan card yang diklik

  // useEffect(() => {
  //   const admin = localStorage.getItem("admin");
  //   if (admin !== "ICT") {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem("admin");
  //   navigate("/login");
  // };

  const cards = [
    {
      id: 1,
      title: "Trade In",
      text: "Nak Tahu Harga Trade In Gadget Korang ?!",
      image: "/src/assets/repair2.jpeg",
    },
    {
      id: 2,
      title: "Beli Gadget",
      text: "Nak Beli iPhone / Andriod / iPad / Laptop dan Lain Gadget ?",
      image: "/src/assets/kedai2.jpeg",
    },
    {
      id: 3,
      title: "Jualan Urgent",
      text: "Ingin menjual Phone anda kepada kami",
      image: "/src/assets/kedai3.jpeg",
    },
    {
      id: 4,
      title: "Tanya Repair",
      text: "Tanya Untuk Repair Gadget Android atau iPhone",
      image: "/src/assets/repair.jpeg",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Header */}
      <Header />

      {/* Isi kandungan */}
      <main style={{  backgroundColor: "#686868ff" }}>
        {/* Hero Section */}
        <div
          style={{
            minHeight: "300px",
            height:"100%",
            width: "100%",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/kedai1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
            height:"100%",
          }}
        >
          <div style={{ width: "100%", maxWidth:"700px",  }}>
            <h2
              style={{
                marginBottom: "0.5rem",
                color: "white",
                fontSize: "2.5rem",
                padding:"20px",
                marginTop: "-4px",
              }}
            >
              Captain Mobile - Service
            </h2>
            <div style={{padding:"20px"}}><a
              style={{
                color: "white",
                lineHeight: "1.6",
                background: "rgba(0, 0, 0, 0.5)",
                textAlign: "justify",
              }}
            >
              Di Captain Mobile, kami menggabungkan kepakaran teknikal dengan
              servis mesra pelanggan untuk memberikan penyelesaian telefon
              pintar yang unggul. Sama ada anda perlukan servis pantas, aksesori
              premium, atau nasihat pakar — kami ada untuk anda. Kualiti,
              kepercayaan dan kepuasan anda adalah keutamaan kami.
            </a>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="card-container" style={{ marginBottom: "40px" }}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => setSelectedCard(card)} // buka popup bila klik
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // penting untuk bagi p duduk paling bawah
                  minWidth: "100px",
                  width:"100%",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0",
                    marginBottom: "12px",
                  }}
                />
                <h3 style={{ fontSize: "18px", margin: "8px 0" }}>
                  {card.title}
                </h3>
                <p
                  style={{ fontSize: "14px", color: "#555", lineHeight: "1.4" }}
                >
                  {card.text}
                </p>{" "}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Popup */}
      {selectedCard && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedCard(null)} // klik luar untuk tutup
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "400px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onClick={(e) => e.stopPropagation()} // supaya klik dalam modal tak close
          >
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.text}</p>
            <button
              onClick={() => window.open("https://kuantan.captainmobile.my/", "_blank")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#868686ff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Captain Mobile Kuantan
            </button>

            <button
              onClick={() => window.open("https://kemaman.captainmobile.my/", "_blank")}
              style={{
                marginTop: "1rem",
                padding: "10px 20px",
                backgroundColor: "#868686ff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Captain Mobile Kemaman
            </button>

            <button
              onClick={() => setSelectedCard(null)}
              style={{
                marginTop: "1rem",
                padding: "8px 16px",
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Home;
