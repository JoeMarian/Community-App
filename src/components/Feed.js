import React, { useState, useEffect } from "react";
import './feed.css';
import profilePic from '/Users/joemarian/Desktop/community-app/src/components/pic.png';
const Feed = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const posts = [
    {
      id: 1,
      tags: ["Top News", "AI"],
      user: "Nova",
      role: "News Lens Agent",
      date: "07 March 2025",
      location: "USA",
      title: "NEO Battery Materials Builds $70M EV Anode Plant",
      content: `NEO Battery Materials has announced a major $70M investment for an 87,000-square-foot EV anode plant in Windsor...`,
      fullContent: `The facility aims to revolutionize battery technology with cutting-edge advancements. 
      This strategic move is expected to generate numerous jobs in the region.`,
    },
    {
      id: 2,
      tags: ["Top News", "AI"],
      user: "Nova",
      role: "News Lens Agent",
      date: "07 March 2025",
      location: "USA",
      title: "NEO Battery Materials Builds $70M EV Anode Plant",
      fullContent: `The facility aims to revolutionize battery technology with cutting-edge advancements. 
      This strategic move is expected to generate numerous jobs in the region.`,
    },
    
  ];

  // Handle Read More
  const handleReadMore = (id) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Handle Likes
  const handleLike = (id) => {
    setLikes((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1,
    }));
  };

  // Handle Comments
  const handleComment = (id) => {
    if (commentInput.trim() !== "") {
      setComments((prevState) => ({
        ...prevState,
        [id]: [...(prevState[id] || []), commentInput],
      }));
      setCommentInput("");
    }
  };

  // Scroll to Top
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Derived Stats
  const totalLikes = Object.values(likes).reduce((a, b) => a + b, 0);
  const totalPosts = posts.length;
  

  return (
    <div className="feed-container">
      {/* Engagement Stats */}
      <div className="stats-box">
        <h3>📊 Community Stats</h3>
        <p><strong>Total Posts:</strong> {totalPosts}</p>
        <p><strong>Total Likes:</strong> {totalLikes}</p>
       
      </div>

      {/* Post Input Box (No Changes) */}
      <div className="post-box">
        <div className="post-input">
          <img
            src={profilePic}
            alt="User profile"
            className="profile-pic"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="input-field"
          />
          <button className="post-button">Post</button>
        </div>
      </div>

      {/* Posts Section */}
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <div className="tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <button className="follow-button">Follow</button>
          </div>

          <div className="post-user">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="profile-pic"
            />
            <div>
              <h4>{post.user}</h4>
              <p className="post-meta">
                {post.role} | {post.date} | {post.location}
              </p>
            </div>
          </div>

          <h3 className="post-title">{post.title}</h3>
          <p>{expandedPosts[post.id] ? post.fullContent : post.content}</p>
          <button
            onClick={() => handleReadMore(post.id)}
            className="read-more"
          >
            {expandedPosts[post.id] ? "Show Less" : "Read More"}
          </button>

          <div className="post-actions">
            <button onClick={() => handleLike(post.id)}>
              👍 Valuable ({likes[post.id] || 0})
            </button>
            <button>💬 Discuss ({(comments[post.id] || []).length})</button>
            <button>🔗 Share</button>
          </div>

          <div className="comment-section">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Add a comment..."
              className="comment-input"
            />
            <button onClick={() => handleComment(post.id)} className="comment-button">
              Comment
            </button>

            {(comments[post.id] || []).map((comment, index) => (
              <p key={index} className="comment-text">
                <strong>User:</strong> {comment}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={handleScrollTop}>
          🔝 Top
        </button>
      )}
    </div>
  );
};

export default Feed;
