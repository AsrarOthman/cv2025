import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import ScrollNavLink from "./ScrollNavLink";

const Header = ({ handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#c0bebeff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo + Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Captain Mobile Logo"
          style={{ height: "40px", cursor: "pointer" }}
          onClick={() => navigate("/home")} // klik gambar balik ke Home
        />

        {/* Hamburger menu (phone only) */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            cursor: "pointer",
            marginLeft: "auto",
          }}
          className="menu-btn"
        >
          <span
            style={{ width: "25px", height: "3px", background: "#333" }}
          ></span>
          <span
            style={{ width: "25px", height: "3px", background: "#333" }}
          ></span>
          <span
            style={{ width: "25px", height: "3px", background: "#333" }}
          ></span>
        </div>

        {/* Menu links */}
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ScrollNavLink to="/home" label="Home" />
          <ScrollNavLink to="/service" label="Service" />
          <ScrollNavLink to="/media" label="SocialMedia" />
          <ScrollNavLink to="/contactus" label="ContactUs" />
        
        </nav>
      </div>

      {/* Butang keluar */}
      {/* <button
        onClick={handleLogout}
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Keluar
      </button> */}

      {/* CSS Responsive */}
      <style>
        {`
          @media (max-width: 768px) {
            .menu-btn {
              display: flex !important;
            }
            .menu {
              display: ${menuOpen ? "flex" : "none"};
              flex-direction: column;
              position: absolute;
              top: 70px;
              right: 0px;
              background: #dadadaff;
              padding: 10px 20px;
              // border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              z-index: 999;
            }
            .menu a {
              margin: 10px 0;
            }
          }
          @media (min-width: 769px) {
            .menu {
              display: flex !important;
              gap: 1.5rem;
            }
          }
        `}
      </style>
    </header>
  );
};

// Komponen NavLink khas
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    style={{
      color: "#1f2937",
      textDecoration: "none",
      fontWeight: "700",
      padding: "0.5rem 0.75rem",
      borderRadius: "6px",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5e0e0")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
  >
    {label}
  </Link>
);

export default Header;
