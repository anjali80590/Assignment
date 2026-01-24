import React, { useEffect, useState } from 'react'
import { fetchComments } from '../api/api';
import Loading from './Loading';

function Comments({postId}) {
    let[comments,setComments]=useState([]);
    let[loading,setLoading]=useState(true);
    console.log(comments);
    useEffect(()=>{fetchComments(postId).then(data=>{
        setComments(data);
        setLoading(false);
    })
},[postId])
if(loading)return <Loading small/>
  return (
  <div>
    <div className="comments">
        {comments.map(comment=>(
            <div key={comment.id} className='comment'>
                <strong>{comment.email}</strong>
                <p>{comment.body}</p>
                </div>
        ))}
    </div>
  </div>
  )
}

export default Comments