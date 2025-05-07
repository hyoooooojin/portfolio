import React, { useEffect, useState, useRef } from 'react';
import './works.scss';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import evian from '../../assets/images/evian.jpg';
import thenorthface from '../../assets/images/thenorthface.jpg';
import abib from '../../assets/images/abib.jpg';

const slides = [
  {
    title: 'EVIAN',
    link: 'https://hyoooooojin.github.io/evian/',
    topKeyword: 'redesign',
    image: evian,
    keywordsFirst: ['figma', 'vite', 'react', 'scss', 'mui'],
    keywordsSecond: ['git', 'github', 'github-pages'],
    direction: 'y',
    imgStyle: { width: '100%', transition: 'transform 4s ease' },
    codeLink: 'https://github.com/hyoooooojin/evian.git'
  },
  {
    title: 'THENORTHFACE',
    link: 'https://hyoooooojin.github.io/thenorthface',
    topKeyword: 'redesign',
    image: thenorthface,
    keywordsFirst: ['figma', 'vite', 'react', 'tailwind', 'mui'],
    keywordsSecond: ['git', 'github', 'github-pages'],
    direction: 'x',
    imgStyle: { width: '100%', transition: 'transform 8s ease' },
    codeLink: 'https://github.com/hyoooooojin/thenorthface.git',
  },
  {
    title: 'ABIB',
    link: 'https://hyoooooojin.github.io/abib/',
    topKeyword: 'design',
    image: abib,
    keywordsFirst: ['html', 'css', 'javascript','jquery'],
    keywordsSecond: ['git', 'github', 'github-pages'],
    direction: 'y',
    imgStyle: { height: '100%', transition: 'transform 10s ease' },
    codeLink: 'https://github.com/hyoooooojin/abib.git',
   },
  // {
  //   title: 'LOG',
  //   link: 'Go to website',
  //   topKeyword: 'design',
  //   image: evian,
  //   keywordsFirst: ['figma', 'react', 'tailwind', 'restfulAPI'],
  //   keywordsSecond: ['github', 'github-pages', 'firebase'],
  //   direction: '',
  //   imgStyle: { width: '100%', transition: 'transform 4s ease' },
  // }
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);
  const isTransitioning = useRef(false);
  const transitionDuration = 500;
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    if (slideContainerRef.current && slides.length > 0) {
      const slideElement = slideContainerRef.current.querySelector('.slide');
      if (slideElement) {
        const slideWidth = slideElement.offsetWidth; // 슬라이드 너비 먼저 계산
        const GAP = 12; // 슬라이드 사이 gap
        const totalSlideWidth = slideWidth + GAP; // gap 포함 전체 너비 계산
  
        slideContainerRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        slideContainerRef.current.style.transform = `translateX(-${currentIndex * totalSlideWidth}px)`;
      }
    }
  }, [currentIndex]);
  

  const handleTransitionEnd = () => {
    isTransitioning.current = false;
  };

  const nextSlide = () => {
    if (!isTransitioning.current && slides.length > 3) {
      isTransitioning.current = true;
      setCurrentIndex((prev) => (prev + 1) % (slides.length - 2));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning.current && slides.length > 3) {
      isTransitioning.current = true;
      setCurrentIndex((prev) => (prev - 1 + (slides.length - 2)) % (slides.length - 2));
    }
  };

  useEffect(() => {
    const workCenters = document.querySelectorAll('.workCenter');

    workCenters.forEach((center) => {
      const img = center.querySelector('img');
      if (!img) return;

      const handleEnter = () => {
        const imgHeight = img.offsetHeight;
        const imgWidth = img.offsetWidth;
        const workCenterHeight = center.offsetHeight;
        const workCenterWidth = center.offsetWidth;

        if (direction === 'x') {
          const moveX = imgWidth - workCenterWidth;
          if (moveX > 0) {
            img.style.transform = `translateX(-${moveX}px)`;
          }
        } else {
          const moveY = imgHeight - workCenterHeight;
          if (moveY > 0) {
            img.style.transform = `translateY(-${moveY}px)`;
          }
        }
      };

      const handleLeave = () => {
        img.style.transform = 'translate(0)';
      };

      center.addEventListener('mouseenter', handleEnter);
      center.addEventListener('mouseleave', handleLeave);

      return () => {
        center.removeEventListener('mouseenter', handleEnter);
        center.removeEventListener('mouseleave', handleLeave);
      };
    });
  }, [direction]);

  const isPrevDisabled = currentIndex === 0;
const isNextDisabled = currentIndex >= slides.length - 3;


  return (
    <div className="works">
      <div className="sliderContainer">
      <KeyboardDoubleArrowLeftIcon 
        onClick={slides.length > 3 && !isPrevDisabled ? prevSlide : null}
        className="sliderButton"
        style={{
          opacity: slides.length <= 3 ? 0 : isPrevDisabled ? 0.3 : 1,
          pointerEvents: slides.length <= 3 || isPrevDisabled ? 'none' : 'auto',
          transition: 'opacity 0.3s ease'
        }}
      />
        <div className="slider">
          <div 
            ref={slideContainerRef}
            className="slideContainer"
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((slide, index) => (
              <div className="work slide" key={index}>
                <div className="workTop">
                  <p className="workTitle">{slide.title}</p>
                  <p className="pageLink"><a href={slide.link} target="_blank">Go to website</a></p>
                  <span className="topkeyword">{slide.topKeyword}</span>
                </div>
                <div
                  className="workCenter"
                  onMouseEnter={() => setDirection(slide.direction)}
                >
                  <img src={slide.image} alt={slide.title} style={slide.imgStyle} />
                </div>
                <div className="workBottom">
                  <div className="keywordBox">
                    <div className="keywordFirst">
                      {slide.keywordsFirst.map((keyword, i) => (
                        <span className="workKeyword" key={i}>{keyword}</span>
                      ))}
                    </div>
                    <div className="keywordSecond">
                      {slide.keywordsSecond.map((keyword, i) => (
                        <span className="workKeyword" key={i}>{keyword}</span>
                      ))}
                    </div>
                  </div>
                  <div className="actionLink">
                    <span><a href={slide.codeLink} target="_blank">View code</a></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <KeyboardDoubleArrowRightIcon 
          onClick={slides.length > 3 ? nextSlide : null}
          className={`sliderButton ${slides.length <= 3 ? 'lessSlides' : ''}`} 
        /> */}
        <KeyboardDoubleArrowRightIcon 
          onClick={slides.length > 3 && !isNextDisabled ? nextSlide : null}
          className="sliderButton"
          style={{
            opacity: slides.length <= 3 ? 0 : isNextDisabled ? 0.3 : 1,
            pointerEvents: slides.length <= 3 || isNextDisabled ? 'none' : 'auto',
            transition: 'opacity 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};


export default Works;