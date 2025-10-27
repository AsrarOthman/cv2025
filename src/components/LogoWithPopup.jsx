import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Components.css";

export default function LogoWithPopupCentered({ logo, title, dataInfo }) {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState(null);

  // Fetch JSON
  useEffect(() => {
    fetch(dataInfo)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Gagal fetch JSON:", err));
  }, []);

  if (!data) return <p>Loading data ...</p>;

  return (
    <>
      {/* 🖼️ Logo utama */}
      <div style={{ textAlign: "center" }}>
        <img
          src={logo}
          alt="Logo Projek"
          style={{
            height: "auto",
            maxHeight: "200px",
            width: "100%",
            minWidth: "250px",
            cursor: "pointer",
          }}
          onClick={() => setShowPopup(true)}
        />
      </div>

      {/* 💬 Popup (Portal) */}
      {showPopup &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "20px",
            }}
            onClick={() => setShowPopup(false)} // klik luar tutup
          >
            <div 
         
              className="tablepopup"
              onClick={(e) => e.stopPropagation()} // elak popup tertutup bila klik dalam
            >
              {/* ❌ Butang tutup */}
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#d90429",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                ✕
              </button>

              {/* 📘 Kandungan Popup */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto", // ✅ scroll kalau isi panjang
                  paddingRight: "10px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#023e8a",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  📊 Project Information: {title}
                </h2>
                  <img
                    src={logo}
                    alt="Logo Projek"
                    style={{
                      height: "auto",
                      maxHeight: "300px",
                      width: "100%",
                      minWidth: "200px",
                      marginBottom: "10px",
                      border:"1px solid #47474733",
                    
                    }}
                  />
                </div>

                

                {/* 📋 Table Data */}
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "2px solid #0077b6",
                    borderRadius:"20px",
                    fontSize: "15px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          background: "#0077b6",
                          color: "white",
                          width: "30%",
                        
                        }}
                      >
                        Subject
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          background: "#0077b6",
                          color: "white",
                   
                        }}
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(data).map(([key, value]) => (
                      <tr
                        key={key}
                        style={{
                          borderBottom: "1px solid #eee",
                          verticalAlign: "top",
                        }}
                      >
                        <td
                          style={{
                            fontWeight: "bold",
                            padding: "8px",
                            background: "#f8f9fa",
                            width: "30%",
                          }}
                        >
                          {key}
                        </td>
                        <td style={{ padding: "8px" }}>
                          {Array.isArray(value) ? (
                            <ul style={{ margin: 0, paddingLeft: "20px" }}>
                              {value.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          ) : typeof value === "object" ? (
                            <ul style={{ margin: 0, paddingLeft: "20px" }}>
                              {Object.entries(value).map(
                                ([subKey, subValue]) => (
                                  <li key={subKey}>
                                    <strong>{subKey}:</strong> {subValue}
                                  </li>
                                )
                              )}
                            </ul>
                          ) : key === "Live Link" ? (
                            <a
                              href={value}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "#0077b6", textDecoration: "none" }}
                            >
                              🔗 {value}
                            </a>
                          ) : (
                            value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

      
              </div>

         
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
