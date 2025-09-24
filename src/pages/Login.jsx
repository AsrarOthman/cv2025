import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "adminict") {
      localStorage.setItem("admin", "ICT");
      navigate("/home");
    } else {
      setError("Password salah. Sila cuba lagi.");
    }
  };

  const sharedInputStyle = {
    width: "100%",
    padding: "0.75rem 1rem", // <-- Konsisten kiri & kanan
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
        fontFamily: "sans-serif",
        padding: "1rem",
    
      }}
    >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem",marginTop:"-100px" }}>
          Sensori 2025 - Admin Page
        </h2>
      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Log Masuk Admin
        </h2>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: ".5rem" }}>
            Nama Pengguna
          </label>
          <input
            type="text"
            value="Admin"
            disabled
            style={{
              ...sharedInputStyle,
              backgroundColor: "#f0f0f0",
              color: "#666",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: ".5rem" }}>
            Kata Laluan
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Masukkan password"
            style={sharedInputStyle}
          />
        </div>

        {error && (
          <p style={{ color: "red", fontSize: "0.9rem", marginBottom: "1rem" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "#1d4ed8",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Log Masuk
        </button>
      </form>
    </div>
  );
};

export default Login;
