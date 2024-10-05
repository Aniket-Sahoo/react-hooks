// if the data isn't available yet, but is loading
// if we get the data
// if there's an error

import { useState, useEffect } from "react";

export function useFetch(uri) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!uri) return;
        fetch(uri)
            .then((res) => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [uri]);

    return {loading, data, error};
}