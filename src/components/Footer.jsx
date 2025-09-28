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
        <h2 style={{ padding: "40px", marginTop: "-40px" }}><a href="https://captainmobile.my/" class="custom-link">CAPTAIN MOBILE</a></h2>
        <div style={{ paddingLeft: "40px", color: "#333232ff" }}>
          <h3>
            <a href="https://captainmobile.my/service" class="custom-link">Service</a>
          </h3>
     
          <a href="https://captainmobile.my/contactus" class="custom-link">Trade In</a>
          <br />
        
          <a href="https://captainmobile.my/contactus" class="custom-link">Beli Gadget</a>
          <br />
          <a></a>
          <a href="https://captainmobile.my/contactus" class="custom-link">Jualan Urgent</a>
          <br />
          <a></a>
          <a href="https://captainmobile.my/contactus" class="custom-link">Tanya Repair</a>

          <h3>
            <a href="https://captainmobile.my/media" class="custom-link">Media Social</a>
          </h3>
     
          <a href="https://www.tiktok.com/@captainmobilekuantan" class="custom-link">TikTok Kuantan</a> <a href="https://www.tiktok.com/@captainmobilekemaman___" class="custom-link">| TikTok Kemaman</a>
          <br />
        
          <a href="https://www.instagram.com/captainmobilekuantan" class="custom-link">Instagram Kuantan</a> <a href="https://www.instagram.com/captainmobilekemaman" class="custom-link">| Instagram Kemaman</a>
          <br />
        
          <a href="https://www.facebook.com/captainmobile.kuantan" class="custom-link">Facebook Kuantan</a> <a href="https://www.facebook.com/captainmobile.my" class="custom-link">| Facebook Kemaman</a>

          <h3>
            <a href="https://captainmobile.my/contactus" class="custom-link">Contact Us</a>
          </h3>
        
          <a href="https://kuantan.captainmobile.my/" class="custom-link">Cawangan Kuantan</a>
          <br />
          
          <a href="https://kemaman.captainmobile.my/" class="custom-link">Cawangan Kemaman</a>
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
