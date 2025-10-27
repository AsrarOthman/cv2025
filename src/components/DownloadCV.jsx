import React from "react";

const DownloadCV = () => {
  const handleDownload = () => {
    // Letakkan URL fail (boleh juga relative path dari public folder)
    const fileUrl = "/files/CV- AsrarOthman (2025).pdf"; // contoh: fail disimpan dalam folder public/files/
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "AsrarOthman (2025).pdf"; // nama fail semasa dimuat turun
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Download CV
    </button>
  );
};

export default DownloadCV;
