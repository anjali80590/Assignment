import React, { useState } from 'react'
import Comments from './Comments';

function PostItem({posts,username}) {
    let[showComments,setShowComments]=useState(false);
  return (
   <div className="posts">
    <h3 className="post-title">{posts.title}</h3>
    <p className="post-body">{posts.body}</p>
    <div className="post-footer">
        <div className="user-info">
            <div className="avatar">
                {username?.charAt(0).toUpperCase}
            </div>
            <span>{username ||'Unknown user'}</span>
        </div>
        <button className="comment-btn" onClick={()=>setShowComments(prev=>!prev)}>
            comments
        </button>
    </div>
    {showComments && <Comments postId={posts.id}/>}
   </div>
  )
}

export default PostItem