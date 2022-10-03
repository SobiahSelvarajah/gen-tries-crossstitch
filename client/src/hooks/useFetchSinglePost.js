import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchSinglePost(url) {

    const location = useLocation();
    const locationID = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [error, setError] = useState('');
    
    useEffect(() => {
        async function getSinglePost() {
            try {
                const res = await axios.get(url + locationID);
                const post = res.data;
                setPost(post);
            } catch(err) {
                setError(err.message);
            }
        } getSinglePost();
    }, [url]);
    return { post, error };
}