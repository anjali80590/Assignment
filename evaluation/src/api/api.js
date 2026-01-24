const BASE_URL='https://jsonplaceholder.typicode.com'

const cache={
    posts:null,
    users:null,
    comments:{}
}

export async function fetchPosts(){
    if(cache.posts)return cache.posts;
    let res=await fetch(`${BASE_URL}/posts`)
    if(!res.ok)throw new Error("failed to load posts");
    cache.posts=await res.json();
    return cache.posts;
}

export async function fetchUsers(){
    if(cache.users) return cache.users;
    let res=await fetch(`${BASE_URL}/users`)
    if(!res.ok) throw new Error ("Failed to load users");
    cache.users=await res.json();
    return cache.users;
}
export async function fetchComments(postId){
    if(cache.comments[postId])return cache.comments[postId];
    let res=await fetch(`${BASE_URL}/posts/${postId}/comments`)
    if(!res.ok)throw new Error ("failed to load comments");
    cache.comments[postId]=await res.json();
    return cache.comments[postId];
}