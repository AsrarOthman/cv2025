import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../components/Card.css";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
      title: "SERVICE",
      text: "",
      image: "/src/assets/repair2.jpeg",
    },
    {
      id: 2,
      title: "SOCIAL MEDIA",
      text: "",
      image: "/src/assets/kedai2.jpeg",
    },
    {
      id: 3,
      title: "CONTACT US",
      text: "",
      image: "/src/assets/kedai3.jpeg",
    },
  ];

  const [cells, setCells] = useState("");

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vR-TuhjZDDsf3dkx4hp1gCxQsx9DwDYAKydg9YzA1lBHthqZS4wDnzhyO6RYRk1rdfdf7cbFyV0xmiY/pub?output=csv&gid=0";

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        // parse CSV → array of rows
        const rows = text.split("\n").map((r) => r.split(","));

        const C7 = rows[6][2]; // ROW-1 , A(2)-1
        const C10 = rows[9][2];
        const C13 = rows[12][2];

        const H7 = rows[6][7]; // ROW-1 , A(2)-1
        const H10 = rows[9][7];
        const H13 = rows[12][7];

        const M7 = rows[6][12]; // ROW-1 , A(2)-1
        const M10 = rows[9][12];
        const M13 = rows[12][12];

        setCells({ C7, C10, C13, H7, H10, H13, M7, M10, M13 });
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

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
      <main style={{ backgroundColor: "#686868ff" }}>
        {/* Hero Section */}
        <div
          style={{
       
            minHeight: "300px",
            width: "100%",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/kedai1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            height: "100%",
            // marginTop:"-50px"
          }}
        >
          <div style={{ width: "100%", maxWidth: "700px" }}>
            <h2
              style={{
                marginBottom: "0.5rem",
                color: "white",
                fontSize: "2.5rem",
                padding: "20px",
                marginTop: "-4px",
              }}
            >
             Welcome to Captain Mobile 2
            </h2>
            <div style={{ padding: "20px" }}>
              <a
                style={{
                  color: "white",
                  lineHeight: "1.6",
                  background: "rgba(0, 0, 0, 0.5)",
                  textAlign: "justify",
                }}
              >
                – your trusted destination for smartphone repairs, premium accessories, and reliable mobile solutions. We combine technical expertise with friendly service to ensure your devices are always in top condition.
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
           
            width: "100%",
            // backgroundImage:
            //   "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/kedai2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
            height:"100%"
       
          }}
        >
          <div
            style={{
              height: "auto",
              display: "flex",
              flexWrap: "wrap", // penting ✅
              alignItems: "start",
              justifyContent: "center",
              gap: "1.5rem",
              padding: "2rem",
            }}
          >
            {/* edit 1 */}
            <div
              style={{
                // border: "blue 1px solid",
                height: "auto",
                flex: "1 1 300px", // auto shrink/grow tapi min 300px
                minWidth: "300px",
              }}
            >
              <div
                style={{
                  minWidth: "200px",
                  width: "90%",
                  maxWidth: "400px",
                  height: "100%",
                  margin: "30px auto",
                  padding: "20px",
                  borderRadius: "12px",
                  backgroundColor: "#464545ff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // shadow lembut
                  border: "3px solid #ddd", // border halus
                  textAlign: "center",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <h3
                  style={{
                    margin: "10px 0",
                    color: "#ffffffff",
                    fontSize: "20px",
                  }}
                >
                  {cells.C7}
                </h3>
                <img
                  src={cells.C10}
                  alt="Sample"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0",
                    marginBottom: "12px",
                    boder: "red solid 1px",
                  }}
                />

                <p style={{ color: "#ffffffff", fontSize: "14px" }}>
                  {cells.C13}
                </p>
                <button
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#007bff",
                    color: "white",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/contactus")}
                >
                  Contact Us
                </button>
              </div>
            </div>
            {/* edit 2 */}
            <div
              style={{
                // border: "blue 1px solid",
                height: "auto",
                flex: "1 1 300px", // auto shrink/grow tapi min 300px
                minWidth: "300px",
              }}
            >
              <div
                style={{
                  minWidth: "200px",
                  width: "90%",
                  maxWidth: "400px",
                  height: "auto",
                  margin: "30px auto",
                  padding: "20px",
                  borderRadius: "12px",
                  backgroundColor: "#464545ff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // shadow lembut
                  border: "3px solid #ddd", // border halus
                  textAlign: "center",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <h3
                  style={{
                    margin: "10px 0",
                    color: "#ffffffff",
                    fontSize: "20px",
                  }}
                >
                  {cells.H7}
                </h3>
                <img
                  src={cells.H10}
                  alt="Sample"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0",
                    marginBottom: "12px",
                    boder: "red solid 1px",
                  }}
                />

                <p style={{ color: "#ffffffff", fontSize: "14px" }}>
                  {cells.H13}
                </p>
                <button
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#007bff",
                    color: "white",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/contactus")}
                >
                  Contact Us
                </button>
              </div>
            </div>
            {/* edit 3 */}
            <div
              style={{
                // border: "blue 1px solid",
                height: "auto",
                flex: "1 1 300px", // auto shrink/grow tapi min 300px
                minWidth: "300px",
              }}
            >
              <div
                style={{
                  minWidth: "200px",
                  width: "90%",
                  maxWidth: "400px",
                  height: "auto",
                  margin: "30px auto",
                  padding: "20px",
                  borderRadius: "12px",
                  backgroundColor: "#464545ff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // shadow lembut
                  border: "3px solid #ddd", // border halus
                  textAlign: "center",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <h3
                  style={{
                    margin: "10px 0",
                    color: "#ffffffff",
                    fontSize: "20px",
                  }}
                >
                  {cells.M7}
                </h3>
                <img
                  src={cells.M10}
                  alt="Sample"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0",
                    marginBottom: "12px",
                    boder: "red solid 1px",
                  }}
                />

                <p style={{ color: "#ffffffff", fontSize: "14px" }}>
                  {cells.M13}
                </p>
                <button
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#007bff",
                    color: "white",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/contactus")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="card-container" style={{ marginBottom: "40px" }}>
          {cards.map((card) => {
            // tentukan route ikut id
            let route = "/";
            if (card.id === 1) route = "/service";
            if (card.id === 2) route = "/media";
            if (card.id === 3) route = "/contactus";

            return (
              
              <NavLink
                key={card.id}
                to={route}
                style={{ textDecoration: "none" }}
              >
                <div className="card" style={{ cursor: "pointer" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      minWidth: "100px",
                      width: "100%",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: "100%",
                        height: "130px",
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                        marginBottom: "12px",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "18px",
                        margin: "8px 0",
                        color: "#000",
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </main>

      {/* Popup */}
      {/* {selectedCard && (
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
              onClick={() => window.open("https://www.google.com", "_blank")}
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
              onClick={() => window.open("https://www.google.com", "_blank")}
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
      )} */}
      <Footer />
    </div>
  );
};

export default Home;
