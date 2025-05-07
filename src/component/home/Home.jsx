import React from 'react'
import './home.scss'
import folderIcon from '../../assets/images/folderIcon.png'
import LanguageIcon from '@mui/icons-material/Language';

const Home = () => {
  return (
    <div className="home">
        <p className="homeTitle">Hwang HyoJin's <br/> Portfolio</p>
        <div className="homeBox1">
          <p className="homeBoxTitle">Hello World!</p>
        </div>
        <div className="homeBox2">
          <img src={folderIcon} alt="" className="folderIcon"/>
        </div>
        <div className="homeBox3">
          <LanguageIcon className="languageIcon"/>
        </div>
    </div>
  )
}

export default Home