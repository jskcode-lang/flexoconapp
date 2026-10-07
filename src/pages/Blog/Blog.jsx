import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1>Our Blog</h1>
        <p>Welcome to our latest insights, company news, and updates.</p>

        {/* Placeholder Post */}
        <div className="blog-grid">
          <div className="blog-card">
            <h2>Coming Soon</h2>
            <p>We are currently writing exciting new posts. Check back soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
