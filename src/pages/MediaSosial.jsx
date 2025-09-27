import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";

const MediaSosial = () => {
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

  return (
    <div
      // style={{
      //   fontFamily: "sans-serif",
      //   minHeight: "100vh",
      //   backgroundColor: "#f9fafb",
      // }}
      style={{
        fontFamily: "sans-serif",
        minHeight: "400px",
        backgroundImage: "url('/src/assets/.jpeg')",
        backgroundSize: "cover", // supaya penuh
        backgroundPosition: "start ", // fokus tengah
        backgroundRepeat: "no-repeat", // tak ulang
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Header */}

      <Header />

      {/* Isi kandungan */}
      <main style={{ backgroundColor: "#686868ff" }}>
        <div
          style={{
            height: "300px",
            width: "100%",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/kedai1.jpeg')",
            backgroundSize: "cover", // supaya penuh
            backgroundPosition: "center ", // fokus tengah
            backgroundRepeat: "no-repeat", // tak ulang
            // backgroundColor: "#f9fafb",
            minHeight: "300px",
            height: "100%",
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
              Captain Mobile 
            </h2>
          </div>
          <div style={{ paddingLeft: "20px" }}>
              <a
                style={{
                  color: "white",
                  lineHeight: "1.6",
                  background: "rgba(0, 0, 0, 0.5)",
                  textAlign: "justify",
                  fontSize:"30px",
                  fontWeight:"bold"
             
                }}
              >
               Connect With Us on Social Media
              </a>
            </div>
        </div>
        <div className="card-container" style={{ marginBottom: "40px" }}>
          <div className="card">
            <div style={{ minWidth: "100px", width: "100%" }}>
              <h3 style={{ fontSize: "24px", margin: "8px 0" }}>
                MEDIA SOCIAL - CAWANGAN KUANTAN
              </h3>
              <img
                src="/src/assets/kuantan.jpeg"
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
              
              <p
                style={{ fontSize: "14px", color: "#555", lineHeight: "1.4" }}
              ></p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>TikTok</h4>
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@captainmobilekuantan"
                  data-unique-id="captainmobilekuantan"
                  data-embed-type="creator"
                  style={{
                    maxWidth: "100%",
                    minWidth: "320px",
                    maxHeight: "100%",
                    minWidth: "320px",
                  }}
                  id="v52259989530870680"
                >
                  <iframe
                    title="tiktok-captainmobile"
                    name="__tt_embed__v52259989530870680"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
                    src="https://www.tiktok.com/embed/@captainmobilekuantan?lang=en-GB&amp;referrer=https%3A%2F%2Fcapweb-mueh.onrender.com%2F"
                    style={{
                      width: "100%",
                      height: "494px",
                      display: "block",
                      visibility: "unset",
                      maxHeight: "494px",
                    }}
                  ></iframe>
                </blockquote>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>Instagram</h4>
                <div
                  className="ig-section"
                  style={{ marginTop: "2rem", width: "100%" }}
                >
                  <iframe
                    src="https://www.instagram.com/captainmobilekuantan/embed"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    title="Instagram Profile"
                  ></iframe>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>Face Book</h4>
                <img
                  src="/src/assets/FB KTN.png"
                  alt="FB"
                  style={{ width: "100%", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/captainmobile.kuantan",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div style={{ minWidth: "100px", width: "100%" }}>
              <h3 style={{ fontSize: "24px", margin: "8px 0" }}>
                MEDIA SOCIAL - CAWANGAN KEMAMAN
              </h3>
              <img
                src="/src/assets/kedai4.jpeg"
                alt="Sample"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                  marginBottom: "12px",
                }}
              />
              
              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.4" }}>
                {" "}
              </p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>TikTok </h4>
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@captainmobilekemaman___"
                  data-unique-id="captainmobilekuantan"
                  data-embed-type="creator"
                  style={{
                    maxWidth: "100%",
                    minWidth: "320px",
                    maxHeight: "100%",
                    minWidth: "320px",
                  }}
                  id="v52259989530870680"
                >
                  <iframe
                    title="tiktok-captainmobile"
                    name="__tt_embed__v52259989530870680"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
                    src="https://www.tiktok.com/embed/@captainmobilekemaman___?lang=en-GB&amp;referrer=https%3A%2F%2Fcapweb-mueh.onrender.com%2F"
                    style={{
                      width: "100%",
                      height: "494px",
                      display: "block",
                      visibility: "unset",
                      maxHeight: "494px",
                    }}
                  ></iframe>
                </blockquote>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>Instagram</h4>
                <div
                  className="ig-section"
                  style={{ marginTop: "2rem", width: "100%" }}
                >
                  <iframe
                    src="https://www.instagram.com/captainmobilekemaman___/embed"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    title="Instagram Profile"
                  ></iframe>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>Face Book</h4>
                <img
                  src="/src/assets/FB KMM.png"
                  alt="FB"
                  style={{ width: "100%", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/captainmobile.my",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MediaSosial;
