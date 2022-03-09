import React, { Component, useState, useEffect } from "react";
import api from "../api/api";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();

  const getPosts = async () => {
    try {
      const { data } = await api.get("/posts");
      setPosts(data);
    } catch (error) {
      setError("Could not get posts!");
    }
  };
  useEffect(() => getPosts(), []);

  console.log(posts);

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
