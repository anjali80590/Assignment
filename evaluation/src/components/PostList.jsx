import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, users }) {
  console.log(users[posts.userId]);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>User Id : {post.userId}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
