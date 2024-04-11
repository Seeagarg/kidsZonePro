import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import VideoGrid from "../Components/VideoGrid";
import { imagesApi, pre, videosApi } from "../api/api";
import axios from "axios";
import Layout from "../Components/Layout";
import Loader from "../Components/Loader";
import Carousel from "../Components/Carousel";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {useSelector} from 'react-redux'
import { arr } from "../Data";

const HomeRoute = () => {
  const navigate = useNavigate();
  const [msisdn, setMsisdn] = useState("");
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const {lang} = useSelector((state)=>state.langSlice)

  const number = localStorage.getItem('number')


  const checkSubscriber=async()=>{
    const res = await axios.get(`${pre}/checkuser/${number}`);
    // console.log(res.data.status)
    if(res?.data?.status !== 1){
      localStorage.removeItem('number')
      navigate('/login')
    }
  }


  useEffect(()=>{
    checkSubscriber();
  },[])



  

  // console.log(lang)
  // const location = useLocation();
  // const msisdnn = new URLSearchParams(location.search).get("msisdn");

  // useEffect(() => {
  //   setMsisdn(msisdnn);
  // }, []);

  const fetchDataFromBackend = async () => {
    try {
      const res = await axios.get(`${pre}/${videosApi}`);
      const res2 = await axios.get(`${pre}/${imagesApi}`);
      setImages(res2?.data);
      setVideos(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.message);
    }
  };

  

  // useEffect(()=>{
  //   console.log("Birds");
  //   // changeLang("Birds");
  //   console.log(changeLang("Birds"))
  // },[lang])



  // const checkSubscription = async () => {
  //   try {
  //     const res = await axios.get(`${pre}/checkuser/${msisdn}`);
  //     if (res?.data?.status == 0) {
  //       navigate("/");
  //     } else {
  //       fetchDataFromBackend();
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error(error?.message);
  //   }
  // };

  // useEffect(() => {
  //   checkSubscription();
  // }, [msisdn]);

  useEffect(()=>{
    fetchDataFromBackend();
  },[])

  return (
    <>
      <Navbar />
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="py-4">
              <Carousel images={images} />
              {/* <Carousel images={images} msisdn={msisdn} /> */}
            </div>
            <div className="pb-4">
              {/* <VideoGrid videos={videos} msisdn={msisdn} /> */}
              <VideoGrid videos={videos} />
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default HomeRoute;
