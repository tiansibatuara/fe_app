import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-items-center h-full">
      {posts.map((post) => (
        <div key={post.id} className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.body}</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
