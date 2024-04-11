import React from 'react'
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center mt-20">
        <div className={classes.loader}></div>
    </div>
  )
}

export default Loader