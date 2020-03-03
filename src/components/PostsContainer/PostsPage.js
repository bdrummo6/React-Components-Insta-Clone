//Complete the necessary code in this file
// import useState
import React, { useState } from "react"; // imported useState
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data"; // imported dummyData

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map((post) => (
         <Post postImg={post.imageUrl} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;

