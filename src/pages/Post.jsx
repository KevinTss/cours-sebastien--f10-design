import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const fetch = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resJson = await response.json();
      setPosts(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Layout>
      <h2>All posts</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index}>{JSON.stringify(post)}</div>
        ))}
      </div>
    </Layout>
  );
};

export default PostsPage;
