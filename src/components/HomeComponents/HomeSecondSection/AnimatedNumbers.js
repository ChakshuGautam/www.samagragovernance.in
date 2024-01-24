import React, { useEffect, useState } from 'react';

const AnimatedNumber = ({ value, startAnimation }) => {
  const [displayedValue, setDisplayedValue] = useState(0);
  const animationDuration = 2500; // Adjust the duration of the animation in milliseconds

  useEffect(() => {
    if (startAnimation) {
      let startTime;
      let animationFrame;

      const animateValue = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
      
        if (progress < animationDuration) {
          const initialValue = 0; // Start counting from 0
          const diff = value - initialValue;
          const incrementalStep = (diff * (progress / animationDuration)) | 0;
          const nextValue = initialValue + incrementalStep;
          setDisplayedValue(nextValue);
          animationFrame = requestAnimationFrame(animateValue);
        } else {
          setDisplayedValue(value);
        }
      };      

      animationFrame = requestAnimationFrame(animateValue);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [value, startAnimation]);

  return <span className="animated-number">{displayedValue}</span>;
};

export default AnimatedNumber;
