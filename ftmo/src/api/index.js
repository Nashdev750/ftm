
import axios from "axios";
export const baseUrl = 'https://fundmefx.com/api/'

const config = ()=>{
    return {
            authorization: 'Bearer '+window.localStorage.getItem('token')
        }
    
}

export const postData = (end,data={},conf={})=> (axios.post(baseUrl+end,data,{headers:{...config(),...conf}}))
export const getData = (end)=> (axios.get(baseUrl+end,{headers:config()}))
export const getServer = (end,conf)=> (axios.get(baseUrl+end,{headers:conf}))
