import React, { useEffect } from "react";
import axios from "axios";
const Posts = () => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      console.log(response.data);
    });
  });
  return (
    <div>
      <h1>All Posts</h1>
    </div>
  );
};

export default Posts;
