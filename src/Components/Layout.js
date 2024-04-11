import React from 'react'
import classes from './Navbar.module.css';

const Layout = ({children}) => {
  return (
    <div className={classes.layout}>
        {children}
    </div>
  )
}

export default Layout;