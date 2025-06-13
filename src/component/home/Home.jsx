import React from 'react'
import './home.scss'
import folderIcon from '../../assets/images/folderIcon.png'
import LanguageIcon from '@mui/icons-material/Language';

const Home = () => {
  return (
    <section className="home" aria-label="Portfolio home">

        <h1 className="homeTitle">Hwang HyoJin's <br/> Portfolio</h1>

        <div className="homeBox1" aria-hidden="true">
          <p className="homeBoxTitle">Hello World!</p>
        </div>

        <div className="homeBox2" aria-hidden="true">
          <img src={folderIcon} className="folderIcon"/>
        </div>

        <div className="homeBox3" aria-hidden="true">
          <LanguageIcon className="languageIcon"/>
        </div>
        
    </section>
  )
}

export default Home