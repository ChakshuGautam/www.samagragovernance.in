import React, { useEffect, useRef } from 'react';

const LinkDrawingOnScrollLR = () => {
  const svgRef = useRef(null);

  const handleScroll = () => {
    const path = svgRef.current.querySelector('#second-svg-path');
    const pathLength = path.getTotalLength();

    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    // Offset the dashes so that it appears hidden entirely
    path.style.strokeDashoffset = pathLength;

    const boundingBox = svgRef.current.getBoundingClientRect();
    let newScrollPercentage =
      boundingBox.top / (boundingBox.height - window.innerHeight);

    if (newScrollPercentage > -1) newScrollPercentage = -1;
    
    // Length to offset the dashes
    const drawLength = pathLength * newScrollPercentage*1.15;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
    // When complete, remove the dash array, otherwise, the shape isn't quite sharp
    // Accounts for fuzzy math
    if (newScrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none';
    } else {
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }
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
    <div style={{ height: 'fit-content' }} ref={svgRef}>
      <svg
        width="350"
        height="350"
        viewBox="0 0 763 1138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: '44%' }}>
        <path
          id="second-svg-path"
          d="M92.8427 3C1678.09 539.993 -69.1783 758.863 5.33168 1137"
          stroke="#F7CA86"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default LinkDrawingOnScrollLR;
