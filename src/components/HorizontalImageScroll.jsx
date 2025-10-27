import React from "react";

const HorizontalImageScroll = ({ images }) => {
  const styles = {
    container: {
      display: "flex",
      overflowX: "auto",
      gap: "10px",
      padding: "10px",
      scrollBehavior: "smooth",
    },
    image: {
      height: "200px",
      borderRadius: "10px",
      objectFit: "cover",
      flexShrink: 0, // supaya gambar tak mengecil
    },
  };

  return (
    <>
      <style>{`
        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 10px;
        }
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background-color: #888;
        }
      `}</style>

      <div style={{border:"solid #90909033 1px", padding:"20px", backgroundColor:"white", margin:"10px",}}>
        <div className="scroll-container" style={styles.container}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img-${index}`}
              style={styles.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizontalImageScroll;
