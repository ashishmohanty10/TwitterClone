import React, { useState } from "react";
import twitter from "../../public/twitter.png";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/Constant";
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import {useDispatch} from 'react-redux'
import { getUser } from "../redux/userSlice";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch=useDispatch()

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
       // login
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          dispatch(getUser(res?.data.user))
        
        if(res.data.success){
          navigate("/")
          toast.success(res.data.message)
        }
        
      } catch (err) {
        toast.success(err.response.data.message);
        console.log(err);
      }
    } else {
      // singup
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          { name, username, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          
          if(res.data.success){
            setIsLogin(true)
            toast.success(res.data.message)
          }
        console.log(res);
      } catch (err) {
        toast.success(err.response.data.message);
        console.log(err);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className="ml-5"
            width={"300px"}
            src={twitter}
            alt="Twitter logo"
          />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl">Happening now.</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col w-[55%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <button
              type="submit"
              className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>
          <h1
            className="font-bold text-blue-600 cursor-pointer"
            onClick={loginSignupHandler}
          >
            {isLogin
              ? "Do not have an account? Signup"
              : "Already have an account? Login"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
