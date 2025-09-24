// src/components/Footer.jsx
const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#ecececff",
          paddingBottom: "40px",
        }}
      >
        <h2 style={{ padding: "40px", marginTop: "-40px" }}>CAPTAIN MOBILE</h2>
        <div style={{ paddingLeft: "40px", color:"#333232ff" }}>
          <h3>Service</h3>
          <a>Trade In</a>
          <br />
          <a>Beli Gadget</a>
          <br />
          <a>Jualan Urgent</a>
          <br />
          <a>Tanya Repair</a>

          <h3>Media Social</h3>
          <a>Kuantan - Kemaman</a>
          <br />
          <a>Tiktok - Tiktok</a>
          <br />
          <a>Instagram - Instagram</a>
          <br />
          <a>Facebook - Facebook</a>

          <h3>Contact Us</h3>
          <a>Cawangan Kuantan</a>
          <br />
          <a>Cawangan Kemaman</a>
          <br />
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          backgroundColor: "#ecececff",
          fontSize: "10px",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        Copyright © 2025 - Captain Mobile. Semua hak cipta dilindungi.
      </div>
    </>
  );
};

export default Footer;
