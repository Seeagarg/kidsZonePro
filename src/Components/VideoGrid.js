import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import classes from "./VideoGrid.module.css";
import { arr } from "../Data";
import {useSelector} from 'react-redux';

const VideoGrid = ({ videos }) => {

  const {lang} = useSelector((state)=>state.langSlice)


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



  return (
    <div className="w-full grid grid-cols-4 max-[800px]:grid-cols-2 max-[1000px]:grid-cols-3 gap-4">
      {videos.map((data) => {
        return (
          // <div className={`w-full bg-white ${classes.shadow}`} key={data.id}>
          //   <Link to={`/videos/${data.id}?msisdn=${msisdn}`} className="w-full">
          //     <div className="flex flex-col gap-0">
          //       <div className="px-2 py-3 bg-black text-slate-200">
          //         <div>
          //           <p className={`text-lg font-semibold max-[800px]:text-sm ${classes.truncate}`}>
          //             {data?.name}
          //           </p>
          //         </div>
          //       </div>
          //       <div className="w-full">
          //         <img
          //           src={data?.imageFiveUrl}
          //           alt={data?.name}
          //           className="object-fill w-full"
          //         />
          //       </div>

          //       <div className="px-2 py-2 flex flex-row justify-between items-center">
          //         <div className="flex flex-row justify-start gap-4">
          //           <div className="flex flex-row gap-2 items-center">
          //             <div>
          //               <FaEye />
          //             </div>
          //             <h2>{data?.views}</h2>
          //           </div>
          //           <div className="flex flex-row gap-2 items-center">
          //             <div>
          //               <FaThumbsUp />
          //             </div>
          //             <h2>{data?.likes}</h2>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </Link>
          // </div>

          <div className={`w-full bg-white ${classes.shadow}`} key={data.id}>
            <Link to={`/videos/${data.id}`} className="w-full">
              <div className="flex flex-col gap-0">
                <div className="px-2 py-3 bg-black text-slate-200">
                  <div>
                    <p
                      className={`text-lg font-semibold max-[800px]:text-sm ${classes.truncate}`}
                    >
                      {changeLang(data?.name)}

                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <img
                    src={data?.imageFiveUrl}
                    alt={data?.name}
                    className="object-fill w-full"
                  />
                </div>

                <div className="px-2 py-2 flex flex-row justify-between items-center">
                  <div className="flex flex-row justify-start gap-4">
                    <div className="flex flex-row gap-2 items-center">
                      <div>
                        <FaEye />
                      </div>
                      <h2>{data?.views}</h2>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <div>
                        <FaThumbsUp />
                      </div>
                      <h2>{data?.likes}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoGrid;
