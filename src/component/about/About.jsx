import React from 'react'
import './about.scss'
import photo from '../../assets/images/photo.jpeg'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const About = () => {
  return (
    <section className="about" aria-label="Portfolio about">

      <div className="infoBox">
        <div className="photo">
          <img src={photo} alt="프로필 사진" />
        </div>
        <div className="info">
          <div className="eduBox">
            <p className="infoDesc"><SubdirectoryArrowRightIcon className="infoIcon"/>황효진</p>
          </div>
        </div>
        <div className="info">
          <div className="eduBox">
            <p className="infoDesc"><SubdirectoryArrowRightIcon className="infoIcon"/>1994. 05</p>
          </div>
        </div>
        <div className="info">
          <div className="eduBox">
            <p className="infoDesc"><SubdirectoryArrowRightIcon className="infoIcon"/>010 2513 4154</p>
          </div>
        </div>
        <div className="info">
          <div className="eduBox">
            <p className="infoDesc"><SubdirectoryArrowRightIcon className="infoIcon"/>hyoooooojin@daum.net</p>
          </div>
        </div>
      </div>


      <div className="edu">
        <div className="edu">
          <p className="eduTitle">EDUCATION</p>
          <div className="eduBox">
            <p className="school">서인천고등학교</p>
            <p className="date">2012.02 졸업</p>
          </div>
        </div>
        <div className="edu">
          <p className="eduTitle">LICENSE</p>
          <div className="eduBox">
            <p className="school">웹디자인기능사</p>
            <p className="date">2020.09.25 취득</p>
          </div>
        </div>
        <div className="edu">
          <p className="eduTitle">Skills</p>
          <div className="skills">
            <span>FIGMA</span>
            <span>VITE</span>
            <span>REACT</span>
            <span>SCSS</span>
            <span>TAILWIND</span> 
          </div>
          <div className="skills">
            <span>REACT ROUTER DOM</span> 
            <span>RECOIL</span> 
          </div>
          <div className="skills">
            <span>GIT</span>
            <span>GITHUB</span> 
            <span>GITHUB-PAGES</span>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About