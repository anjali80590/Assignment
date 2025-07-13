import React, { useMemo } from "react";

let Post = React.memo(({ post, toggleVerify }) => {
  let colors = ["red", "green", "blue", "pink"];
  let bgColor = colors[post.id % colors.length];

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Status: {post.verifyPost ? "Verified" : "Unverified"}</p>
      <button onClick={() => toggleVerify(post.id)}>
        {post.verifyPost ? "Unverify" : "Verify"}
      </button>
    </div>
  );
});

export default Post;


// const bgColor = useMemo(() => {
//   const colors = ["red", "green", "blue", "pink"];
//   const randIndex = Math.floor(Math.random() * colors.length);
//   return colors[randIndex];
// }, []);
