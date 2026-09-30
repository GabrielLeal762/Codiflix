

import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { useState } from "react";



const axiosRequest=axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/`
    
})



export const RequestPost=<T,P>(endpoint:string)=>{

    const [data,setData]=useState < T |null>(null)

    const [loading,setLoading]=useState <boolean>( false)
 const [success, setSuccess] = useState(false);
const [error, setError] = useState<number | null>(null);

    const Usepost= async( value:P ,config?:AxiosRequestConfig)=>{

        setData(null)
        setLoading(true)
        setSuccess(false)
        setError(null)

        try {
            const response= await axiosRequest({
                ...config,
                data:value,
                url:endpoint,
                method:"POST",
            headers:{"Content-Type":"application/json",...config?.headers}
            }
           
            )
            
            setData(response.data)
            setSuccess(true);

            console.log('Token::',response.data)
            return{
                success:true,
                data:response.data,
                error:null
            }
          
        } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
        console.log("Error:::",e.response?.status)
        setError(e.response?.status ?? 500);
        setSuccess(false);
    } else {
        setError(500);
    }
}
        finally{
            setLoading(false)
        }
    }
    return {data,loading,Usepost,error,success}
}





