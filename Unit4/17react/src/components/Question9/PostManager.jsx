import React, { useState, useCallback } from "react";
import TimerInputForm from "./TimerInputForm";
import PostList from "./PostList";

function PostsManager() {
  const [posts, setPosts] = useState([]);

  const addPost = useCallback((post) => {
    setPosts((prev) => [...prev, post]);
  }, []);

  const toggleVerify = useCallback((id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div>
      <h1>Posts App</h1>
      <TimerInputForm onAddPost={addPost} />
      <PostList posts={posts} toggleVerify={toggleVerify} />
    </div>
  );
}

export default PostsManager;



