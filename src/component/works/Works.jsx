import React, { useEffect, useState, useRef } from 'react';
import './works.scss';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import devKit from '../../assets/images/dev-kit.png';
import devKitHovered from '../../assets/images/dev-kit-hovered.png';
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
    githubLink: 'https://github.com/hyoooooojin/evian',
    figmaLink:'https://www.figma.com/design/Dh3KWyXGAM1sA2Vqr8LFAz/Untitled?node-id=1-80&t=TU0waQS05QFlKhnD-1'
  },
  {
    title: 'THENORTHFACE',
    link: 'https://hyoooooojin.github.io/thenorthface',
    topKeyword: 'redesign',
    image: thenorthface,
    keywordsFirst: ['figma', 'vite', 'react', 'tailwind', 'mui'],
    keywordsSecond: ['git', 'github', 'github-pages'],
    direction: 'y',
    imgStyle: { width: '100%', transition: 'transform 8s ease' },
    githubLink: 'https://github.com/hyoooooojin/thenorthface',
    figmaLink:'https://www.figma.com/design/Dh3KWyXGAM1sA2Vqr8LFAz/Untitled?node-id=1-437&t=TU0waQS05QFlKhnD-1'
  },
  {
    title: 'ABIB',
    link: 'https://hyoooooojin.github.io/abib/',
    topKeyword: 'design',
    image: abib,
    keywordsFirst: ['html', 'css', 'javascript','jquery'],
    keywordsSecond: ['git', 'github', 'github-pages'],
    direction: 'x',
    imgStyle: { height: '100%', transition: 'transform 10s ease' },
    githubLink: 'https://github.com/hyoooooojin/abib',
    figmaLink:'https://www.figma.com/design/Dh3KWyXGAM1sA2Vqr8LFAz/Untitled?node-id=0-1&t=TU0waQS05QFlKhnD-1'
  },
  {
    title: 'Dev-kit',
    link: 'https://hyoooooojin.github.io/dev-kit/',
    topKeyword: 'design',
    image: devKit,
    imageHovered: devKitHovered,
    keywordsFirst: ['figma', 'vite', 'react', 'scss', 'recoil',],
    keywordsSecond: ['react-router-dom', 'github-pages'],
    direction: 'n',
    imgStyle: { width: '100%', height: '100%', objectPosition: 'center', transition: 'all 0.4s'},
    githubLink: 'https://github.com/hyoooooojin/dev-kit',
    figmaLink:'https://www.figma.com/design/Dh3KWyXGAM1sA2Vqr8LFAz/Untitled?node-id=9-3&t=tFdL2DPPJJDHWqo7-1'
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
  //   githubLink: '',
  //   figmalink:''
  // }
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);
  const isTransitioning = useRef(false);
  const transitionDuration = 500;
  const [hoveredSlides, setHoveredSlides] = useState({});

  useEffect(() => {
    if (slideContainerRef.current && slides.length > 0) {
      const slideElement = slideContainerRef.current.querySelector('.slide');
      if (slideElement) {
        const slideWidth = slideElement.offsetWidth;
        const GAP = 12;
        const totalSlideWidth = slideWidth + GAP;
  
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

  // 이미지 호버 이벤트 처리 함수
  const handleImageHover = (index, isEnter) => {
    const slide = slides[index];
    
    if (slide.direction === 'n' && slide.imageHovered) {
      // n 방향일 때는 이미지만 변경
      setHoveredSlides(prev => ({
        ...prev,
        [index]: isEnter
      }));
    } else if ((slide.direction === 'x' || slide.direction === 'y') && isEnter) {
      // x나 y 방향일 때는 이미지 움직임 효과 적용
      const workCenter = document.querySelector(`.workCenter[data-index="${index}"]`);
      if (!workCenter) return;
      
      const img = workCenter.querySelector('img');
      if (!img) return;

      if (slide.direction === 'x') {
        const imgWidth = img.offsetWidth;
        const workCenterWidth = workCenter.offsetWidth;
        const moveX = imgWidth - workCenterWidth;
        
        if (moveX > 0) {
          img.style.transform = `translateX(-${moveX}px)`;
        }
      } else if (slide.direction === 'y') {
        const imgHeight = img.offsetHeight;
        const workCenterHeight = workCenter.offsetHeight;
        const moveY = imgHeight - workCenterHeight;
        
        if (moveY > 0) {
          img.style.transform = `translateY(-${moveY}px)`;
        }
      }
    } else if (!isEnter) {
      // 마우스가 떠날 때 x나 y 방향의 이미지 원위치
      const workCenter = document.querySelector(`.workCenter[data-index="${index}"]`);
      if (!workCenter) return;
      
      const img = workCenter.querySelector('img');
      if (!img) return;
      
      // n 방향이 아닐 때만 transform 리셋
      if (slide.direction !== 'n') {
        img.style.transform = 'translate(0)';
      }
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= slides.length - 3;

  return (
    <section className="works" aria-label="Portfolio works">
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
              <article className="work slide" key={index}>
                <div className="workTop">
                  <p className="workTitle">{slide.title}</p>
                  {/* <p className="pageLink"><a href={slide.link} target="_blank">Go to website</a></p> */}
                  <span className="topkeyword">{slide.topKeyword}</span>
                  {/* <div className="topActionLink">
                    <span><a href={slide.githubLink} target='_black'>Github</a></span>
                    <span><a href={slide.figmaLink} target='_black'>Figma</a></span>
                  </div> */}
                </div>
                <div
                  className="workCenter"
                  data-index={index}
                  onMouseEnter={() => handleImageHover(index, true)}
                  onMouseLeave={() => handleImageHover(index, false)}
                >
                  {slide.direction === 'n' && slide.imageHovered ? (
                    <img 
                      src={hoveredSlides[index] ? slide.imageHovered : slide.image} 
                      alt={slide.title} 
                      style={slide.imgStyle} 
                    />
                  ) : (
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      style={slide.imgStyle} 
                    />
                  )}
                </div>
                <div className="actionLink">
                  <span className="workKeywords"><a href={slide.link} target='_black'>website</a></span>
                  <span className="workKeywords"><a href={slide.githubLink} target='_black'>github</a></span>
                  <span className="workKeywords"><a href={slide.figmaLink} target='_black'>figma</a></span>
                </div>
              </article>
            ))}
          </div>
        </div>
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
    </section>
  );
};

export default Works;