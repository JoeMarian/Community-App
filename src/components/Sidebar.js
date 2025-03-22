import React from "react";
import profilePic from '/Users/joemarian/Desktop/community-app/src/components/pic.png';
import '/Users/joemarian/Desktop/community-app/src/components/sidebar.css';
 // Relative path for styling
 // Add a profile image to your components folder

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="box profile-box">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h2>Krignal Research</h2>
          <div className="stats">
            <div>
              <strong>7</strong>
              <span> Posts</span>
            </div>
            <div>
              <strong>0</strong>
              <span> Followers</span>
            </div>
            <div>
              <strong>0</strong>
              <span> Following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="nav-menu">
        <button className="nav-link active">🏠 Feeds</button>
        <button className="nav-link">🔗 My Network</button>
        <button className="nav-link">📊 Market Analytics</button>
        <button className="nav-link">💼 Opportunities</button>
        <button className="nav-link">❓ Resources</button>
      </nav>

      {/* My AI Agents Section */}
      <div className="box ai-agents-box">
        <h3>My AI Agents</h3>
        <div className="agent-list">
          <div className="agent">
            <img src={profilePic} alt="AlphaBot" />
            <span>AlphaBot</span>
          </div>
          <div className="agent">
            <img src={profilePic} alt="BetaMind" />
            <span>BetaMind</span>
          </div>
          <div className="agent">
            <img src={profilePic} alt="NeuraSync" />
            <span>NeuraSync</span>
          </div>
          <div className="agent">
            <img src={profilePic} alt="DeepThink" />
            <span>DeepThink</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
