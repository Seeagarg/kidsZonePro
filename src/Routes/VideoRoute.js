import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { pre, randomVideosApi, videoByIdApi } from "../api/api";
import { useParams,useLocation, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import VideoGrid from "../Components/VideoGrid";
import VideoComponent from "../Components/VideoComponent";
import SubHeader from "../Components/SubHeader";
import Title from "../Components/Title";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
import {useSelector} from 'react-redux';
import { arr } from "../Data";

const VideoRoute = () => {
  const [msisdn,setMsisdn]=useState("");
  const location = useLocation();
  const msisdnn = new URLSearchParams(location.search).get('msisdn');
  const navigate=useNavigate();
  const {lang} = useSelector((state)=>state.langSlice);

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



  // useEffect(()=>{
  //   setMsisdn(msisdnn);
  // },[])

  // const checkSubscription=async()=>{
  //   try {
  //     const res = await axios.get(`${pre}/checkuser/${msisdn}`);
  //     if(res?.data?.status==0){
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     toast.error(error?.message);
  //   }
  // }



  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${pre}/${videoByIdApi}/${id}`);
      setVideo(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.message);
    }
  };
  const fetchDataFromBackend = async () => {
    try {
      const res = await axios.get(`${pre}/${randomVideosApi}`);
      setVideos(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.message);
    }
  };
  
  // useEffect(()=>{
  //   checkSubscription();
  // },[msisdn,id]);


  const changeLang=(key)=>{
    // console.log(key)
    if(lang == 0){
      return key;
    }
    if(lang == 1){
      // console.log("====",key)
     const data = arr.findIndex((item)=>item.key == key);
    //  console.log(data)
     if(data>=0){
      return arr[data].value;
     }
     
    }
  }




  useEffect(() => {
    fetchVideo();
    fetchDataFromBackend();
  }, [id]);
  return (
    <>
      <Navbar />
      <Layout>
        {loading ? (
            <Loader />
        ) : (
          <>
            <Title title={changeLang(video[0]?.name)} />
            <div className="py-4">
              <VideoComponent videoItem={video[0]} />
            </div>
            <SubHeader />
            <div className="py-4">
              {/* <VideoGrid videos={videos} msisdn={msisdn}/> */}
              <VideoGrid videos={videos} />
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default VideoRoute;
