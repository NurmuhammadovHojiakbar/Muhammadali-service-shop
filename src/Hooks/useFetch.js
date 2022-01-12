import { useState } from "react";

const useFetch = (endpoint,method,postData) => {

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    if(method === "Get"){
        setLoading(true)
        fetch(endpoint)
            .then(res => res.json())
            .then(fetchedData => setData(fetchedData))
            .catch(err => setError(err))
            .finally(setLoading(false))
    }
    if(method === "POST"){
        setLoading(true)
        fetch(endpoint,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData),
        })
            .then(res => res.json())
            .then(fetchedData => setData(fetchedData))
            .catch(err => setError(err))
            .finally(setLoading(false))
    }
    return {
        data,
        loading,
        error
    };
}
 
export default useFetch;