import { useState } from "react";

const useFetch = (endpoint,postData = false) => {

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    if(!postData){
        setLoading(true)
        fetch(endpoint)
            .then(res => res.json())
            .then(fetchedData => setData(fetchedData))
            .catch(err => setError(err))
            .finally(setLoading(false))
    }
    if(postData){
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