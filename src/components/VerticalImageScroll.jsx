import React from "react";
import "./VerticalImageScroll.css";

const VerticalImageScroll = () => {
  // contoh senarai gambar
  const images = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
    "https://picsum.photos/300/200?random=5",
    "https://picsum.photos/300/200?random=6",
  ];

  return (
    <div className="image-scroll-container">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`img-${i}`} className="scroll-image" />
      ))}
    </div>
  );
};

export default VerticalImageScroll;
