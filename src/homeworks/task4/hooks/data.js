import { useEffect, useState } from 'react';
import apiClient from "./apiClient";


export default function useData(path, initialValue, immediateLoading = true) {
    const [data, setData] = useState(initialValue);
    const [fetch, setFething] = useState(false);
    useEffect( () => {
        if (immediateLoading) {
            setFething(true);
            apiClient.get(path)
                .then(response => {
                    setFething(false);
                    setData(response.data)
                })
            }

        }, [path, immediateLoading])

    return [data, fetch]
}
