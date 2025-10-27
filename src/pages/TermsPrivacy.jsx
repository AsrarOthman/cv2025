import { Download } from "lucide-react";
import React from "react";
import DownloadCV from "../components/DownloadCV";
import "../components/Components.css";

export default function TermsPrivacy() {
  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#222" }}>
        💾 Resume /CV <DownloadCV />
      </h1>
      <p style={{ textAlign: "center", color: "#666" }}>
        console.log("Code. Debug. Repeat. Every day is Hello World 🌍");
      </p>

      <hr
        style={{
          margin: "30px 0",
          border: "none",
          borderTop: "1px solid #ddd",
        }}
      />

      {/* TERMA */}
      <section>
        <h2 style={{ color: "#333" }}>
    
        </h2>
        <ol style={{ lineHeight: "1.8", color: "#444" }}>
          <img src="/src/assets/ao1.jpg" className="imgcv" />
          <img src="/src/assets/ao2.jpg" className="imgcv" />
          <img src="/src/assets/ao3.jpg" className="imgcv" />
          <img src="/src/assets/ao4.jpg" className="imgcv2" />
          <img src="/src/assets/ao5.jpg" className="imgcv2" />
          <img src="/src/assets/ao6.jpg" className="imgcv2" />
          <img src="/src/assets/ao7.jpg" className="imgcv2" />
          <img src="/src/assets/ao8.jpg" className="imgcv" />
          <img src="/src/assets/ao9.jpg" className="imgcv" />
          <img src="/src/assets/ao10.jpg" className="imgcv2" />
          <img src="/src/assets/ao11.jpg" className="imgcv2" />
          <img src="/src/assets/ao12.jpg" className="imgcv" />
          <img src="/src/assets/ao13.jpg" className="imgcv2" />
          <img src="/src/assets/ao14.jpg" className="imgcv" />
          <img src="/src/assets/ao15.jpg" className="imgcv" />
          <img src="/src/assets/ao16.jpg" className="imgcv2" />
          <img src="/src/assets/ao17.jpg" className="imgcv" />
     
 

        </ol>
      </section>
    </div>
  );
}
