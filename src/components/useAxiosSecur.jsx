import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: "https://assignment-11-larning-language-server.vercel.app",
    withCredentials: true
})

const useAxiosSecur = () => {

   const { logOut } = useAuth();
   const navigate = useNavigate()

    useEffect(()=> {
        axiosInstance.interceptors.response.use(response =>{
            return response
        }, error => {
            console.log("error caught in interceptor", error);

            if(error.status === 401 || error.status === 403){
                console.log("need to logout the user")
                logOut()
                .then(() =>{
                    console.log("logout user")
                    navigate("/login");
                })
                .catch(error => console.log(error))
            }
            return Promise.reject(error)
        })
    })

   return axiosInstance;
};

export default useAxiosSecur;
