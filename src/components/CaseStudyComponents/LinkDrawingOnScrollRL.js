import React, { useEffect, useState, useRef } from 'react';

const LinkDrawingOnScrollLR = ({id}) => {
  // console.log("log:", id)
  // const [scrollPercentage, setScrollPercentage] = useState(0);
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
      boundingBox.top / (boundingBox.height - window.innerHeight) + 1.15;
      // console.log("log:", newScrollPercentage);
    if (newScrollPercentage >= 1){
      document.getElementById(id).style.display = 'block';
      newScrollPercentage = 100;
    }else{
      document.getElementById(id).style.display = 'none';
    }

    // Length to offset the dashes
    const drawLength = pathLength * newScrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
    // When complete, remove the dash array, otherwise, the shape isn't quite sharp
    // Accounts for fuzzy math
    if (newScrollPercentage >= 0.99) {
      path.style.strokeDasharray = 'none';
    } else {
      path.style.strokeDasharray = pathLength;
    }

    // setScrollPercentage(newScrollPercentage);
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
      <svg
        width="250"
        height="250"
        viewBox="0 0 335 585"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '75px',transform: 'scaleX(-1)' }}>
        <path
          ref={pathRef}
          d="M57.9108 3C709.181 261.552 -8.65268 366.934 21.9584 549"
          stroke="#A97F2B"
          stroke-width="5"
        />
        <g clip-path="url(#clip0_1021_29996)" id={id}>
          <path
            d="M23.116 557.559L35.5159 548.935L29.6481 583.258L8.10331 555.903L23.116 557.559ZM23.116 557.559L25.7289 567.839"
            stroke="#A97F2B"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1021_29996">
            <rect
              width="35"
              height="35"
              fill="white"
              transform="translate(47.9731 554.889) rotate(120.739)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LinkDrawingOnScrollLR;
