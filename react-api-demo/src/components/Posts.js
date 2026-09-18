import React, { useEffect, useState } from 'react';
import { getPosts, deletePost, updatePost } from '../services/postService';
import PostForm from './PostForm';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);

    useEffect(() => {
        getPosts()
            .then(result => {
                setPosts(result.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, []);

    const handleDelete = (id) => {
        // Here we can rely on our post being always deleted, so we remove it from the UI BEFORE THE DELETE.
        // In other cases, you would want to remove it from the UI in the then() statement.
        // That way we are sure it is truly deleted from the backend before updating the UI.
        // It really depends on your application and how it is designed.
        setPosts(posts.filter(post => post.id !== id));

        deletePost(id)
            .then(result => {
                console.log(result)
                // setPosts(posts.filter(post => post.id !== id));
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const startEditing = (post) => {
        setEditingPost(post);
    }

    return (
        <div>
            <h1>Posts</h1>
            <PostForm posts={posts} setPosts={setPosts} editingPost={editingPost} setEditingPost={setEditingPost}></PostForm>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <button onClick={() => startEditing(post)}>Edit</button>
                            <button onClick={() => handleDelete(post.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
