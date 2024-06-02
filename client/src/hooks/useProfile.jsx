import axios from 'axios'
import { USER_API_END_POINT } from '../utils/Constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMyProfile } from '../redux/userSlice'

const useProfile=(id)=>{

    const dispatch=useDispatch()

    

   useEffect(()=>{
    const fetchMyProfile=async()=>{
        try {
            const res=await axios.get(`${USER_API_END_POINT}/profile/${id}`,{
                withCredentials:true
            })
            dispatch(getMyProfile(res.data.user))
        } catch (err) {
            console.log(err)
        }
    }
    fetchMyProfile()
   },[])
}
export default useProfile