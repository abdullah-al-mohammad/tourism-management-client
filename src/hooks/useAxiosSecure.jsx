import axios from "axios";
import { useEffect, useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
  })

  useEffect(() => {
    axios.interceptors.response.use(res => {
      return res
    }, err => {
      if (err.response.status(401) || err.response.status(403)) {
        signOutUser()
          .then(() => {
            navigate('/login')
          }).catch((error) => {
            console.error(error);

          })
      }
    })
  }, [])
  return axiosSecure
};

export default useAxiosSecure;