import React, { useState } from 'react';
import './CaseStudyCarousel.css';

const CaseStudyCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 1;

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  
  const handleNextClick = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const itemWidth = 100 / itemsToShow;
  const offset = -currentIndex * itemWidth;

  return (
    <div className="casestudy-carousel-outer">
      <button id="custom-prevBtn" onClick={handlePrevClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          fill="grey"
          class="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </button>

      <div className="casestudy-carousel-container">
        <div
          className="casestudy-carousel-wrapper"
          style={{ transform: `translateX(${offset-2}%)` }}>
          {items.map((item, index) => (
            <div className="casestudy-carousel-item" key={index}>
              <h5 className="main-text">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <button id="custom-nextBtn" onClick={handleNextClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          fill="grey"
          class="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </button>
    </div>
  );
};

export default CaseStudyCarousel;
