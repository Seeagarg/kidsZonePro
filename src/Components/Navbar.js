import React from "react";
import classes from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import { changeLanguage } from "../Slices/langSlice";

const Navbar = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch(); 

    const {lang} = useSelector((state)=>state.langSlice)
    console.log(lang)

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo_container}>
        <Link>
          <img src="/assets/images/toonflix.png" alt="Logo" className={classes.image} onClick={()=>navigate("/")}/>
        </Link>
        <div className={classes.buttons}>
        <button className={lang == 0 && classes.active} onClick={()=>{dispatch(changeLanguage(0))}}>
        English
        </button>
        <button className={lang == 1 && classes.active} onClick={()=>{dispatch(changeLanguage(1))}}>
        Swahilli
        </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;