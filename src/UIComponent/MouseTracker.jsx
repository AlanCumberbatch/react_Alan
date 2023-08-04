import React, { useState } from 'react';

const MouseTracker = ({className, children, text, onClick}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState(false);

  const className_ = className ? className : "w-[200px] h-[200px] bg-grey-500";

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setDisplayText(true);
  };

  const handleMouseLeave = () => {
    setDisplayText(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className_}
      onClick={onClick}
    >
      <div style={{ position: 'fixed', top: mousePosition.y, left: mousePosition.x+10, fontWeight:'600', color:'blue' }}>
        {displayText && text}
      </div>
      {children}
    </div>
  );
};

export default MouseTracker;
