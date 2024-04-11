import React from 'react'
import classes from './SubHeader.module.css';
import {useSelector} from 'react-redux'

const SubHeader = () => {

  const {lang} = useSelector((state)=>state.langSlice)
  return (
    <div className={classes.title_container}>
        <div className={classes.title}>
            {lang == 0 ? 'Similar Videos':'Video Zinazofanana'}
        </div>
    </div>
  )
}

export default SubHeader