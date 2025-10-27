import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../components/Components.css";
import Footer from "../components/Footer";
import InfoBox from "../components/InfoBox";
import Hero from "../components/Hero";
import axios from "axios";
import Terima from "../components/Terima";
import DownloadCV from "../components/DownloadCV";
import logo from "/src/assets/kpi25.png";
import logo1 from "/src/assets/salinje.png";
import logo2 from "/src/assets/cm.png";
import LogoWithPopup from "../components/LogoWithPopup";
import VerticalTabs from "../components/VerticalTabs";
import HorizontalImageScroll from "../components/HorizontalImageScroll";

const Dashboard = () => {
  // ------------------ TOKEN SETIAP PAGE ------------------
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      console.log("Token dari localStorage:", token);

      if (!token) {
        // navigate("/login");
        navigate("/home");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Data profil:", response.data);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("role0", response.data.role0);
      } catch (error) {
        console.error("Error fetch profile:", error);

        // Hanya remove token jika Unauthorized (401)
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("role0");
          navigate("/login");
        }
      }
    };

    fetchProfile();
  }, [navigate]);
  // ------------------ END TOKEN ------------------
const gambarList = [
  "/src/assets/gps1.jpg",
  "/src/assets/gps2.jpg",
 "/src/assets/gps3.jpg",
 "/src/assets/gps4.jpg",
 "/src/assets/gps5.jpeg",
];
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        // backgroundColor: "#70c682ff",
        backgroundImage:
          "linear-gradient(rgba(202, 217, 202, 0.5), rgba(204, 186, 186, 0.5))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />

      {/* Isi kandungan */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Pendidikan / Pensijilan : */}
        <div
          style={{
            position: "sticky",
            top: "50px",
            background: "rgba(244, 244, 244, 1)", // penting supaya tak nampak tembus
            padding: "20px",
            margin: "0",
            height: "30px",
            zIndex: 99, // pastikan dia atas elemen lain
            borderBottom: "1px solid #ddd",
          }}
        >
          <a style={{ fontSize: "18px", fontWeight: "600" }}>
            Experience & Education:
          </a>
        </div>

        <VerticalTabs />

        {/* Projek / Portfolio Section : */}
        <div
          style={{
            position: "sticky",
            top: "50px",
            background: "rgba(199, 199, 199, 1)", // penting supaya tak nampak tembus
            padding: "20px",
            margin: "0",
            height: "30px",
            zIndex: 999, // pastikan dia atas elemen lain
            borderBottom: "1px solid #ddd",
          }}
        >
          <a style={{ fontSize: "18px", fontWeight: "600" }}>
          Portfolio Section :
          </a>
        </div>

        <a style={{ margin: "20px" }}></a>
        <h3 style={{ marginLeft: "20px" }}>🌐 1. Live Web Production</h3>


        <div
          className=""
          style={{
            display: "flex",

            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
        
          <div className="">
            <InfoBox
              title="KPI2025"
              boxContent={
                <LogoWithPopup
                  logo={logo}
                  title={"KPI2025"}
                  dataInfo={"/files/data/KPI2025.json"}
                />
              }
              height="auto"
              width="auto"
            />
          </div>
          <div className="">
            <InfoBox
              title="SalinJe.com"
              boxContent={
                <LogoWithPopup
                  logo={logo1}
                  title={"SalinJe.com"}
                  dataInfo={"/files/data/Salinje.json"}
                />
              }
              height="auto"
              width="auto"
            />
          </div>
          <div className="">
            <InfoBox
              title="Captain Mobile"
              boxContent={
                <LogoWithPopup
                  logo={logo2}
                  title={"Captain Mobile"}
                  dataInfo={"/files/data/cmweb.json"}
                />
              }
              height="auto"
            />
          </div>
          <div className="">
            <InfoBox
              title="Sensori Web App"
              boxContent={<LogoWithPopup
                  logo={logo2}
                  title={"Captain Mobile"}
                  dataInfo={"/files/data/Salinje.json"}
                />}
              height="auto"
            />
          </div>
        </div>

        <div
          className=""
          style={{
            display: "flex",

            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >

        </div>
        <h3 style={{ marginLeft: "20px" }}>⚙️ 2. Hardware Prototype</h3>

        

      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
