import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import classes from "./Carousel.module.css";
import Layout from "./Layout";

const Carousel = ({ images}) => {
  //Owl Carousel Settings
  const options = {
    loop: true,
    items: 3,
    margin: 0,
    margin: 20,
    center: true, // Center the active item
    // autoWidth: true, // Adjust item width automatically
    nav: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000, // Autoplay interval in milliseconds
    autoplayHoverPause: true,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <OwlCarousel className="owl-theme" {...options}>
          {images.map((data, i) => {
            return (
              // <Link key={i} to={`/videos/${data?.id}?msisdn=${msisdn}`}>
              //   <div
              //     className={`${classes["image-container"]} item object-cover cursor-pointer`}
              //   >
              //     <img
              //       className="object-cover rounded-2xl"
              //       src={data?.imageFiveUrl}
              //       alt={data?.id}
              //     />
              //     <div className={classes["play-button"]}>&#9654;</div>
              //   </div>
              // </Link>
               <Link key={i} to={`/videos/${data?.id}`}>
               <div
                 className={`${classes["image-container"]} item object-cover cursor-pointer`}
               >
                 <img
                   className="object-cover rounded-2xl"
                   src={data?.imageFiveUrl}
                   alt={data?.id}
                 />
                 <div className={classes["play-button"]}>&#9654;</div>
               </div>
             </Link>
            );
          })}
        </OwlCarousel>
      </div>
    </Layout>
  );
};

export default Carousel;
