import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    // Function to update the number of items to show
    const updateItemsToShow = () => {
      if (typeof window !== 'undefined') {
        setItemsToShow(window.innerWidth <= 768 ? 1 : 3);
      }
    };

    // Initially set itemsToShow based on the current window width
    updateItemsToShow();

    // Set up the resize listener, if window is defined
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateItemsToShow);
    }

    // Clean up the listener when the component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateItemsToShow);
      }
    };
  }, []);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      if(itemsToShow > items.length) return;
      setCurrentIndex(items.length - itemsToShow);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  
  const handleNextClick = () => {
    if(itemsToShow > items.length) return;
    if (currentIndex === items.length - itemsToShow) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const itemWidth = 100 / itemsToShow;
  const offset = -currentIndex * itemWidth;

  return (
    <div className="custom-carousel-outer">
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

      <div className="custom-carousel-container">
        <div
          className="custom-carousel-wrapper"
          style={{ transform: `translateX(${offset-1}%)` }}>
          {items.map((item, index) => (
            <div className="custom-carousel-item" key={index}>
              <iframe
                src={item.url}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
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

export default Carousel;
