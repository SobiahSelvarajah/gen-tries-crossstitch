import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchCategories(url, initialState) {

    const [categories, setCategories] = useState(initialState);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getCategories() {
            try {
                const res = await axios.get(url);
                const categories = res.data;
                setCategories(categories);
            } catch(err) {
                setError(err.message);
            }
        } getCategories();
    }, [url]);
    return { categories, error };
}