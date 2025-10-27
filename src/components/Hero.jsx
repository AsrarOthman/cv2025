import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "300px",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.09)), url('/src/assets/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%",  display:"flex", flexWrap:"wrap",padding:"20px" }}>
        <div
          style={{
            color: "white",
            margin: "20px",
            display: "flex",
            flexDirection: "row",
             display:"flex", flexWrap:"wrap",justifyContent: "center",
             width:"100%",
             fontSize:"24px"
          }}
        >
          <h2 style={{ color: "white", margin:"0px" }}>MUHAMMAD</h2>
          <h2 style={{ color: "black", margin:"0px" }}>ASRAR</h2>
          <h2 style={{ color: "red", margin:"0px"  }}> OTHMAN</h2>
        </div>

        <div
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // ✅ ganti alignItems
    alignItems: "center",             // ✅ supaya item tengah menegak
    flexWrap:"wrap-reverse",                 // ✅ lebih biasa dari wrap-reverse
    width: "100%",
  }}
>
          <div style={{  }}>
            <span
              style={{
                color: "white",
                lineHeight: "1.6",
                background: "rgba(0, 0, 0, 0.5)",
                textAlign: "justify",
                fontSize: "20px",
                fontWeight: "bold",
                display: "inline-block",
                padding: "5px 10px",
                width: "auto",
                maxWidth:"600px"
                
              }}
            >
              Salam and hi! I’m passionate about coding — it’s more than just a job, it’s a part of my daily life. I live and work with my MacBook by my side, always exploring new ideas and building creative solutions.I’m 33 years old and currently based in D’Marina, Kuantan. In my free time, I enjoy experimenting with new technologies.
            </span>
          </div>
          <div
            style={{
            
              height: "auto",
              width: "330px",

            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/src/assets/as4.jpg"
                alt="JPNP Logo"
                style={{ height: "200px", cursor: "pointer", border:"1px #00000033 solid" }}
                onClick={() => navigate("/home")} // klik gambar balik ke Home
              />
            </div>
          </div>
        </div>

        <div style={{ padding: "20px" }}>
          {/* <span
            style={{
              color: "white",
              lineHeight: "1.6",
              background: "rgba(0, 0, 0, 0.5)",
              textAlign: "justify",
              fontSize: "20px",
              display: "inline-block",
              padding: "5px 10px",
            }}
          >
            Setiap perkongsian boleh dilindungi dengan kata laluan dan tempoh data disimpan sementara di pelayan kami  (maksimum selama 30 minit) bagi memastikan maklumat anda kekal peribadi, selamat, dan terlindung sepenuhnya.
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
