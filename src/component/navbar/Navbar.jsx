import React, { useState } from 'react'
import './navbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import img from '../../assets/images/profileImg.png'

const Navbar = ({ setSelected }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (icon) => {
    setHovered(icon);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="navbar">
      <p className="navTitle">
        <span className="navText">portfolio</span>
      </p>
      <div className="navList">
        <span 
          className="list"
          onClick={() => setSelected('home')}
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}>
            <HomeIcon className="listIcon" style={{ opacity: hovered && hovered !== 'home' ? 0.6 : 1,}}/>
            <span className="listText" style={{ opacity: hovered && hovered !== 'home' ? 0.6 : 1 }}>Home</span>
        </span>
        <span 
          className="list"
          onClick={() => setSelected('about')}
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}>
          <PersonIcon className="listIcon" style={{ opacity: hovered && hovered !== 'about' ? 0.6 : 1 }}/>
          <span className="listText" style={{ opacity: hovered && hovered !== 'about' ? 0.6 : 1 }}>About</span>
        </span>
        <span
          className="list"
          onClick={() => setSelected('works')}
          onMouseEnter={() => handleMouseEnter('works')}
          onMouseLeave={handleMouseLeave}>
            <FolderIcon className="listIcon" style={{ opacity: hovered && hovered !== 'works' ? 0.6 : 1 }}/>
            <span className="listText" style={{ opacity: hovered && hovered !== 'works' ? 0.6 : 1 }}>Works</span>
        </span>
      </div>
      <div className="profile">
        <div className="profileImg"><img src={img} alt="" /></div>
        <div className="profileInfo">
          <p>Hwang hyojin</p>
          <p>admin</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
