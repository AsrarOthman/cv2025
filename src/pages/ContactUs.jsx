import { ImportIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
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
               “Get in Touch – Quick Deals, Quick Response"
              </a>
            </div>
          </div>
        </div>
        <div className="card-container" style={{ marginBottom: "40px" }}>
          <div className="card" style={{margin:"5px",backgroundColor:"#818181ff", border:"2px solid white"}}>
            <div style={{ minWidth: "100px", width: "100%" }}>
              {/* <img
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
              /> */}
              <h3 style={{ fontSize: "24px", margin: "8px 0", width: "100%",color: "#ffffffff" }}>
                CONTACT US - CAWANGAN KUANTAN
              </h3>
              <p style={{ fontSize: "18px", color: "#ffffffff", lineHeight: "1.4" }}>
                Singgah la ke cawangan kami di Kuantan — kami sedia bantu anda
                dengan senyuman 😊
              </p>
              <button
                onClick={() =>
                  window.open("https://kuantan.captainmobile.my/", "_blank")
                }
                style={{
                  marginTop: "1rem",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginBottom: "40px",
                }}
              >
                Hubungi Kami
              </button>
               <div
                style={{
                  width: "100%",
                  height: "500px", // parent kena ada height
                  position: "relative",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18888.70776257232!2d103.304187!3d3.824076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c8bb7359e55845%3A0xa025edb704ea97ea!2sCaptain%20Mobile%20Kuantan%20-%20Kedai%20iPhone%20dan%20Android%20%2C%20Gadget%20%26%20Repair%20Phone%20%2C%20LCD%20%2C%20Screen%20%2C%20Battery!5e1!3m2!1sen!2smy!4v1758621249622!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18888.70776257232!2d103.304187!3d3.824076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c8bb7359e55845%3A0xa025edb704ea97ea!2sCaptain%20Mobile%20Kuantan%20-%20Kedai%20iPhone%20dan%20Android%20%2C%20Gadget%20%26%20Repair%20Phone%20%2C%20LCD%20%2C%20Screen%20%2C%20Battery!5e1!3m2!1sen!2smy!4v1758621249622!5m2!1sen!2smy"
                width="600"
                height="450"
                style={{ border: 0 }} // style dalam object
                allowFullScreen // betul: camelCase
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // betul: camelCase
              ></iframe> */}
            </div>
          </div>
          <div className="card" style={{margin:"5px",backgroundColor:"#818181ff", border:"2px solid white"}}>
            <div style={{ minWidth: "100px", width: "100%" }}>
              {/* <img
                src="/src/assets/kedai4.jpeg"
                alt="Sample"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                  marginBottom: "12px",
                }}
              /> */}
               <h3 style={{ fontSize: "24px", margin: "8px 0", width: "100%",color: "#ffffffff" }}>
                CONTACT US - CAWANGAN KEMAMAN
              </h3>

              <p style={{ fontSize: "18px", color: "#ffffffff", lineHeight: "1.4" }}>
                Mari singgah ke cawangan kitorang di Kemaman, dok jauh pun — hok
                molek ado belako!
              </p>
              <button
                onClick={() =>
                  window.open("https://kemaman.captainmobile.my/", "_blank")
                }
                style={{
                  marginTop: "1rem",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginBottom: "40px",
                }}
              >
                Hubungi Kami
              </button>

              <div
                style={{
                  width: "100%",
                  height: "500px", // parent kena ada height
                  position: "relative",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38530.070738242444!2d103.42079808848732!3d4.2226009079388165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c88748979946a1%3A0x403e2a7d08b7ac90!2sCaptain%20Mobile%20Kemaman!5e1!3m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
