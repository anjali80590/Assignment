import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, users }) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} username={users[post.userId]} />
      ))}
    </div>
  );
}

export default PostList;
