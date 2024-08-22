 
import axios from "axios"
import { useState } from 'react'


const useFetch = (url) => {
    const [response, setResponse] = useState()
    const [hasError,setHasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(PromiseResponse => {setResponse(PromiseResponse.data)
             setHasError(false)
             })

        .catch(e => { setHasError(true)}
    )
    }
    return [response, getApi, hasError]
  

}

export default useFetch