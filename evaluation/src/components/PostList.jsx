import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, users }) {
  console.log(users[posts.userId]);
  console.log(posts);
  return (
    <div>
      {posts.map(post=>(
        <PostItem key={post.id} post={post} username={users[post.userId]}/>
      ))}
    </div>
  );
}

export default PostList;
