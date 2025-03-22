import React from "react";
import profilePic from '/Users/joemarian/Desktop/community-app/src/components/pic.png';

const Header = () => {
  const headerStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "10px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
  };

  const logoSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ddd",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "15px",
    fontSize: "1rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#555",
    padding: "8px 12px",
    borderRadius: "8px",
    transition: "background-color 0.3s, color 0.3s",
    fontWeight: "500",
  };

  const hoverStyle = {
    backgroundColor: "#f4f4f4",
    color: "#333",
  };

  return (
    <header style={headerStyle}>
      <div style={logoSectionStyle}>
        <img src={profilePic} alt="Logo" style={logoStyle} />
        <h2 style={titleStyle}>Krignal Research</h2>
      </div>
      <nav style={navLinksStyle}>
        <a
          href="#feeds"
          style={linkStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
        >
          🏠 Feeds
        </a>
        <a
          href="#network"
          style={linkStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
        >
          🔗 My Network
        </a>
        <a
          href="#analytics"
          style={linkStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
        >
          📊 Market Analysis
        </a>
        <a
          href="#opportunities"
          style={linkStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
        >
          💼 Opportunities
        </a>
        <a
          href="#resources"
          style={linkStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
        >
          ❓ Resources
        </a>
      </nav>
    </header>
  );
};

export default Header;
