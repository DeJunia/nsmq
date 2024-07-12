import React, { useEffect, useRef, useState, useContext } from 'react'
import './Css/autoscroll.css'
import DataContext from '../context/dataContext'

const AutoScroll = () => {
  const scrollContainerRef = useRef(null);
  const [currentBoxIndex, setCurrentBoxIndex] = useState(0);
  const { images } = useContext(DataContext)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const boxes = scrollContainer.children;

    const scrollToBox = (index) => {
      const box = boxes[index];
      if (box) {
        const boxOffsetLeft = box.offsetLeft;
        scrollContainer.scrollTo({
          left: boxOffsetLeft,
          behavior: 'smooth'
        });
      }
    };

    const scrollInterval = setInterval(() => {
      scrollToBox(currentBoxIndex);
      setCurrentBoxIndex((prevIndex) => (prevIndex + 1) % boxes.length);
    }, 5000);
    return () => clearInterval(scrollInterval); 
  }, [currentBoxIndex]);


  return (
    <div className="auto-scroll-container">
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="box">
          <div className="box-content" >
            {images[0] && images[0].url ? (
              <img src={images[0].url} alt="First" />
              ) : (
              <div>No image available</div>
            )}
          </div>
        </div>
        <div className="box">
          <div className="box-content" >
          {images[0] && images[1].url ? (
              <img src={images[1].url} alt="First" />
              ) : (
              <div>No image available</div>
            )}
          </div>
        </div>
        <div className="box">
          <div className="box-content" >
          {images[0] && images[2].url ? (
              <img src={images[2].url} alt="First" />
              ) : (
              <div>No image available</div>
            )}
          </div>
        </div>
        <div className="box">
          <div className="box-content" >
          {images[0] && images[3].url ? (
              <img src={images[3].url} alt="First" />
              ) : (
              <div>No image available</div>
            )}
          </div>
        </div>
        <div className="box">
          <div className="box-content" >
          {images[0] && images[0].url ? (
              <img src={images[0].url} alt="First" />
              ) : (
              <div>No image available</div>
            )}
          </div>
        </div>
      </div>
      <div className="dots-container">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentBoxIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoScroll;
