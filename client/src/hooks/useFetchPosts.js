import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchPosts(url, initialState) {

    const [posts, setPosts] = useState(initialState);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getPosts() {
            try {
                const res = await axios.get(url);
                const posts = res.data;
                setPosts(posts);
            } catch(err) {
                setError(err.message);
            }
        } getPosts();
    }, [url]);
    return { posts, error };
}