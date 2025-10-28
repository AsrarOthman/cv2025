import React from "react";

const HorizontalImageScroll = () => {
  const images = [
    "/src/assets/h1.png",
    "/src/assets/h2.png",
    "/src/assets/h3.png",
    "/src/assets/h4.png",
    "/src/assets/h5.png",
    "/src/assets/h6.png",
    "/src/assets/h7.png",
    "/src/assets/h8.png",
    "/src/assets/h9.png",
    "/src/assets/h10.png",
    "/src/assets/h11.png",
    "/src/assets/h12.png",
  ];

  const containerStyle = {
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
    gap: "10px",
    width: "100%",
    maxWidth: "1000px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    background: "#fafafa",
    scrollBehavior: "smooth",
  };

  const imageStyle = {
    height: "200px",
    borderRadius: "6px",
    objectFit: "cover",
    flexShrink: 0,
    transition: "transform 0.3s",
  };

  const handleHover = (e, scale) => {
    e.target.style.transform = `scale(${scale})`;
  };

  return (
    <div style={containerStyle}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`img-${i}`}
          style={imageStyle}
          onMouseEnter={(e) => handleHover(e, 1.05)}
          onMouseLeave={(e) => handleHover(e, 1.0)}
        />
      ))}
    </div>
  );
};

export default HorizontalImageScroll;
