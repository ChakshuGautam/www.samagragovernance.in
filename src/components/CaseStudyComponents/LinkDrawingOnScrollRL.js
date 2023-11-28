import React, { useEffect, useState, useRef } from 'react';

const ScrollToDraw = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const pathRef = useRef(null);

  const handleScroll = () => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    // Offset the dashes so that it appears hidden entirely
    path.style.strokeDashoffset = pathLength;

    const boundingBox = path.getBoundingClientRect();
    let newScrollPercentage =
      boundingBox.top / (boundingBox.height - window.innerHeight);

    if (newScrollPercentage > -1) newScrollPercentage = -1;

    // Length to offset the dashes
    const drawLength = pathLength * newScrollPercentage*1.2;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
    // When complete, remove the dash array, otherwise, the shape isn't quite sharp
    // Accounts for fuzzy math
    if (newScrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none';
    } else {
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }

    setScrollPercentage(newScrollPercentage);
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Re-run effect when scrollPercentage changes

  return (
    <div style={{ height: 'fit-content' }}>
      {/* Adjust the height value based on your content length */}
      <svg
        width="350"
        height="350"
        viewBox="0 0 800 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: '35%' }}>
        <path
          ref={pathRef}
          id="second-svg-path"
          d="M592.601 3C-808.363 539.993 735.788 758.863 669.939 1137"
          stroke="#F7CA86"
          strokeWidth="5"
          // strokeDasharray="17 17"
        />
      </svg>
    </div>
  );
};

export default ScrollToDraw;
