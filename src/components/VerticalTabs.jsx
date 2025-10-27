import React, { useState, useEffect } from "react";
import "./Components.css";
import logo from "/src/assets/logo-ao.svg";
import HorizontalImageScroll from "./HorizontalImageScroll";

export default function VerticalTabsFetch() {
  const orderedTabs = ["Present", "2017 - 2023", "2016", "2015", "2013"];
  const orderedTabs1 = ["Present", "2017 - 2023", "2016", "2015", "2013"];
  const orderedTabs2 = [
    "Software",
    "Hardware",
    "Design",
    "Basic Skill",
    "2010",
  ];

  const [tabData, setTabData] = useState(null);
  const [activePengalaman, setActivePengalaman] = useState("Present");
  const [activePendidikan, setActivePendidikan] = useState("Present");
  const [activeKemahiran, setActiveKemahiran] = useState("Software");
  const skillImages = {
    Software: [
      "/src/assets/sw1.jpg",
      "/src/assets/sw2.jpg",
      "/src/assets/sw3.jpg",
      "/src/assets/sw4.jpg",
      "/src/assets/sw5.jpg",
      "/src/assets/sw6.jpg",
      "/src/assets/sw7.jpg",
      "/src/assets/sw8.jpg",
      "/src/assets/sw9.jpg",
      "/src/assets/sw10.jpg",
    ],
    Hardware: [
      "/src/assets/gps3.jpg",
      "/src/assets/gps1.jpg",
      "/src/assets/gps2.jpg",
      "/src/assets/hw1.jpg",
      "/src/assets/hw2.jpg",
      "/src/assets/hw3.jpg",
      "/src/assets/hw4.jpg",
      "/src/assets/hw5.jpg",
      "/src/assets/hw6.jpg",
      "/src/assets/hw7.jpg",
      "/src/assets/hw8.jpg",
      "/src/assets/hw9.jpg",
      "/src/assets/hw10.jpeg",
      "/src/assets/hw11.jpg",
    ],
    Design: [
      "/src/assets/des1.jpg",
      "/src/assets/des2.jpg",
      "/src/assets/des3.jpg",
      "/src/assets/des4.jpg",
    ],
    "Basic Skill": [
      "/src/assets/bas1.jpg",
      "/src/assets/bas2.jpg",
      "/src/assets/bas3.jpg",
      "/src/assets/bas4.jpg",
       "/src/assets/bas5.jpg",
      "/src/assets/bas6.jpg",
    ],
  };

  // Fetch JSON bila component mount
  useEffect(() => {
    fetch("/files/tabDataPengalaman.json")
      .then((res) => res.json())
      .then((json) => setTabData(json))
      .catch((err) => console.error("Gagal fetch JSON:", err));
  }, []);

  console.log("data", tabData);

  if (!tabData) return <p style={{ padding: 20 }}>Loading data...</p>;

  return (
    <div>
      {/* ========================================================== */}
      {/* 🌐 1. Pengalaman */}
      {/* ========================================================== */}
      <h3 style={{ marginLeft: "20px" }}>🌐 1. Experience</h3>
      <div style={styles.container}>
        <div style={styles.tabList}>
          {orderedTabs
            .filter((index) => tabData["experience"][index])
            .map((index) => (
              <button
                key={index}
                onClick={() => setActivePengalaman(index)}
                style={{
                  ...styles.tabButton,
                  backgroundColor:
                    activePengalaman === index ? "#007bff" : "transparent",
                  color: activePengalaman === index ? "#fff" : "#333",
                }}
              >
                {index}
              </button>
            ))}
        </div>

        <div style={styles.contentBox}>
          <h4>
            {"Experience"} — {activePengalaman}
          </h4>
          <p>{tabData["experience"][activePengalaman].text}</p>
          {/* 🖼️ Papar gambar kalau ada */}
          {tabData["experience"][activePengalaman].pic && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                margin: "15px",
              }}
            >
              {tabData["experience"][activePengalaman].pic.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`Experience ${i}`}
                  style={{}}
                  className="imglogo"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ========================================================== */}
      {/* 🎓 2. Pendidikan */}
      {/* ========================================================== */}
      <h3 style={{ marginLeft: "20px" }}>🎓 2. Education</h3>
      <div style={styles.container}>
        <div style={styles.tabList}>
          {orderedTabs1
            .filter((index) => tabData["education"][index])
            .map((index) => (
              <button
                key={index}
                onClick={() => setActivePendidikan(index)}
                style={{
                  ...styles.tabButton,
                  backgroundColor:
                    activePendidikan === index ? "#007bff" : "transparent",
                  color: activePendidikan === index ? "#fff" : "#333",
                }}
              >
                {index}
              </button>
            ))}
        </div>

        <div style={styles.contentBox}>
          <h4>
            {"Education"} — {activePendidikan}
          </h4>
          <p>{tabData["education"][activePendidikan].text}</p>
          {/* 🖼️ Papar gambar kalau ada */}
          {tabData["education"][activePendidikan].pic && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                margin: "15px",
              }}
            >
              {tabData["education"][activePendidikan].pic.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`education ${i}`}
                  style={{}}
                  className="imglogo"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ========================================================== */}
      {/* 💡 3. Kemahiran */}
      {/* ========================================================== */}
      <h3 style={{ marginLeft: "20px" }}>💡 3. Skills</h3>
      <div style={styles.container}>
        <div style={styles.tabList}>
          {orderedTabs2
            .filter((index) => tabData["skills"][index])
            .map((index) => (
              <button
                key={index}
                onClick={() => setActiveKemahiran(index)}
                style={{
                  ...styles.tabButton,
                  backgroundColor:
                    activeKemahiran === index ? "#007bff" : "transparent",
                  color: activeKemahiran === index ? "#fff" : "#333",
                }}
              >
                {index}
              </button>
            ))}
        </div>
        <div style={styles.contentBox}>
          <h4>
            {"Skills"} — {activeKemahiran}
          </h4>
          <p>{tabData["skills"][activeKemahiran].text}</p>
          {/* 🖼️ Papar gambar kalau ada */}
          {/* {tabData["skills"][activeKemahiran].pic && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                margin: "15px",
              }}
            
            >
               
        
              {tabData["skills"][activeKemahiran].pic.map(
                (imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt={`skills ${i}`}
                    style={{
                    
                    }}
                    className="imglogo"
                  />
                )
              )}
            </div>
          )} */}
        </div>
      </div>
      <HorizontalImageScroll images={skillImages[activeKemahiran] || []} />
    </div>
  );
}

// 🎨 CSS inline styles
const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  tabList: {
    display: "flex",
    flexDirection: "column",
    borderRight: "2px solid #ddd",
    paddingRight: "10px",
    minWidth: "130px",
  },
  tabButton: {
    padding: "10px 15px",
    marginBottom: "5px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "16px",
    transition: "background 0.2s",
  },
  contentBox: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingRight: "20px",
    paddingLeft: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    lineHeight: 1.6,
  },
};
