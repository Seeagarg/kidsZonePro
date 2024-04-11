import React from 'react'
import classes from './Title.module.css';

const Title = ({title}) => {
  return (
    <div className={classes.title_container}>
        <div className={classes.title}>
            {title}
        </div>
    </div>
  )
}

export default Title