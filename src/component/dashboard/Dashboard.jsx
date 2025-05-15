import React, { useState } from 'react'
import './dashboard.scss'
import Navbar from '../navbar/Navbar'
import Content from '../content/Content'
import Home from '../home/Home'
import About from '../about/About'
import Works from '../works/Works'



const Dashboard = () => {

  const [selected, setSelected] = useState("home");

  const components = {
    home: <Home />,
    about: <About />,
    works: <Works />
  };

  return (
    <div className="dashboardContainer">
        <div className="navbarContainer"><Navbar setSelected={setSelected} /></div>
        <div className={`contentContainer ${selected === 'home' ? 'centered' : ''}`}><Content selected={selected} components={components} /></div>  
    </div>
  )
}

export default Dashboard