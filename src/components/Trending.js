import React from "react";

const Trending = () => {
  return (
    <aside style={styles.trendingContainer}>
      <h3 style={styles.title}>Trending Feeds</h3>
      <div style={styles.imageGrid}>
        <img
          src="https://storage.googleapis.com/a1aa/image/BAZP1BlEu90Je6RV4cb92Dfevo5liVaX1G5q3ysn2WE.jpg"
          alt="Trending feed 1"
          style={styles.image}
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/6YAMRqdmbR8BYt0EkYcV5bSyW01ncrv1NvXiAOBTe3k.jpg"
          alt="Trending feed 2"
          style={styles.image}
        />
      </div>
    </aside>
  );
};

// Inline Styles for Flexibility
const styles = {
  trendingContainer: {
    flex: 0.2, // Reduced width to 20%
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    height: "fit-content",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
  },
  image: {
    height: "80px",
    width: "80px",
    borderRadius: "12px",
    objectFit: "cover",
  },
};

export default Trending;
