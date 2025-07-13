import React from "react";
import Post from "./Post";

function PostList({ posts, toggleVerify }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} toggleVerify={toggleVerify} />
      ))}
    </div>
  );
}

export default PostList;
