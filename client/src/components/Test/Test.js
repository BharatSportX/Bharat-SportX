import React, { useRef, useState } from 'react';
import './Test.css'; // Updated CSS file import

const Test = () => {
  const tabsBoxRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleIcons = () => {
    if (!tabsBoxRef.current) return { displayLeftIcon: false, displayRightIcon: false };
    const maxScrollableWidth = tabsBoxRef.current.scrollWidth - tabsBoxRef.current.clientWidth;
    return {
      displayLeftIcon: scrollLeft > 0,
      displayRightIcon: maxScrollableWidth - scrollLeft > 1
    };
  };

  const scrollTabs = (scrollValue) => {
    if (!tabsBoxRef.current) return;
    const newScrollLeft = tabsBoxRef.current.scrollLeft + scrollValue;
    setScrollLeft(newScrollLeft);
  };

  const { displayLeftIcon, displayRightIcon } = handleIcons();

  return (
    <div className="bodymatch">
      <div className="wrapper" ref={tabsBoxRef}>
        {displayLeftIcon && (
          <div className="icon">
            <i id="left" className="fas fa-caret-left" onClick={() => scrollTabs(-340)}></i>
          </div>
        )}
        <ul className="tabs-box">
        
                <li class="tab">Coding</li>
                <li class="tab active">JavaScript</li>
                <li class="tab">Podcasts</li>
                <li class="tab">Databases</li>
                <li class="tab">Web Development</li>
                <li class="tab">Unboxing</li>
                <li class="tab">History</li>
                <li class="tab">Programming</li>
                <li class="tab">Gadgets</li>
                <li class="tab">Algorithms</li>
                <li class="tab">Comedy</li>
                <li class="tab">Gaming</li>
                <li class="tab">Share Market</li>
                <li class="tab">Smartphones</li>
                <li class="tab">Data Structure</li>
            
        </ul>
        {displayRightIcon && (
          <div className="icon">
            <i id="right" className="fas fa-caret-right" onClick={() => scrollTabs(340)}></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
