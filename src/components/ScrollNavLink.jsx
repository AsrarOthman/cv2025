import { NavLink } from "react-router-dom";

const ScrollNavLink = ({ to, label }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll smooth ke atas
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
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
    </NavLink>
  );
};

export default ScrollNavLink;
