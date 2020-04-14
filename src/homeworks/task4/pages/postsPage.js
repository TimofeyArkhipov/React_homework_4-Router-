import React, {useState} from 'react';
import useData from '../hooks/data';
import Post from "../components/postItem";

export default function PostsPage() {
    const [posts,  fetchingComplete] = useData('posts', []);

    return(
        <div className='page'>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}




