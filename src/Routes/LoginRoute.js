import React, { useState,useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { pre } from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";
import {useSelector} from 'react-redux'
import Lottie from 'lottie-react';
import front from '../Animation/front.json'


const LoginRoute = () => {
  const navigate=useNavigate();
  const {lang} = useSelector((state)=>state.langSlice)

  const [number, setNumber] = useState("");
  const [loading,setLoading]=useState(false);


  // const Localnumber = localStorage.getItem('number')


  // const checkSubscriber=async()=>{
  //   const res = await axios.get(`${pre}/checkuser/${Localnumber}`);
  //   if(res?.data?.status == 1){
  //     navigate('/')
  //   }
  // }


  // useEffect(()=>{
  //   checkSubscriber();
  // },[])




  const submitHandler = async (e) => {
    e.preventDefault();
    if (number.trim().length > 0) {
      try {
        setLoading(true);
        const res = await axios.get(`${pre}/checkuser/${number}`);
        if(res?.data?.status==1){
            setLoading(false);
            localStorage.setItem('number',number);
            // window.location.href = `/redirect?msisdn=${number}`;
            navigate('/')
        }
        else{
            setLoading(false);
            toast.error("You are not subscribed!");
        }
      } catch (error) {
        setLoading(false);
        toast.error(error?.message);
      }
    } else {
      toast.error("Number cannot be empty!");
    }
  };
  return (
    <>
      <Navbar />
      <div className="mt-12 w-full  flex justify-center items-center">
        <div className="p-10 bg-[black]  shadow-inner shadow-[#fff]  w-2/4 flex  flex-col items-center gap-4 sm:flex-row sm:gap-0   rounded-lg max-[800px]:w-3/4">
        <div className="w-[40%] h-full flex justify-center">
          <Lottie
            animationData={front}
            className="w-[90%]"
          />
        </div>
          <form className=" sm:w-[40%] max-w-sm mx-auto flex flex-col justify-center " onSubmit={submitHandler}>
            <div className="mb-5">
              <label
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                {lang == 0 ?"Your Number":"Namba yako"}
              </label>
              <input
                type="number"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="********83"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {lang == 0 ?"Login":"Ingia"}
            </button>
          </form>
          <div>
            {loading && <Loader />}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRoute;
