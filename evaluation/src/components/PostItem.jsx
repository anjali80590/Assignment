import React, { useState } from 'react'
import Comments from './Comments';

function PostItem({post,username}) {
    let[showComments,setShowComments]=useState(false);
    console.log(showComments);
  return (
   <div className="posts">
    <h3 className="post-title">{post.title}</h3>
    <p className="post-body">{post.body}</p>
    <div className="post-footer">
        <div className="user-info">
            <div className="avatar">
                {username?.charAt(0).toUpperCase}
            </div>
            <span>{username ||'Unknown user'}</span>
        </div>
        <button className="comment-btn" onClick={()=>setShowComments(prev=>!prev)}>
            {showComments?"Hide":"Comments"}
        </button>
    </div>
    {showComments && <Comments postId={post.id}/>}
   </div>
  )
}

export default PostItem