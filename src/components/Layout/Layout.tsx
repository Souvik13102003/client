import React from 'react'
import Navbar from './Navbar.tsx'
import Footer from './Footer.tsx'

function Layout({children}) {
  return (
    <>
    <Navbar/>
    <div className="content">
        {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout
