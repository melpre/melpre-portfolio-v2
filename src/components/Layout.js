import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
// Make sure you pass in the "children" props so that React knows to render any nested
// children elements inside the Layout component
  return (
    <div className="layout">
        <Navbar />
        <div className="content">
            { children }
        </div>
        <footer>
            <p>Copyright 2023 Melissa Preece</p>
        </footer>
    </div>
  )
}
