import { useEffect, useRef, useState } from "react";
import NavContext from "./NavContext";

const NavState = (props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [indicatorColor, setIndicatorColor] = useState(
    "bg-[greenyellow] dark:bg-green-900"
  );

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const closeSearch = () => {
    if (isSearchOpen) {
      toggleSearch();
    }
  };
  
  const [activeButtons, setActiveButtons] = useState([true, false, false]);
  const [currentComponent, setCurrentComponent] = useState("LiveMatch");

  const containerRef = useRef(null);

  const handleClick = (index, component) => {
    const newActiveButtons = activeButtons.map((isActive, i) =>
      i === index ? true : false
    );
    setActiveButtons(newActiveButtons);
    setCurrentComponent(component);

    if (index === 0) {
      setIndicatorColor(
        newActiveButtons[0]
          ? "bg-[greenyellow] dark:bg-green-900"
          : "bg-red-600 dark:bg-[greenyellow]"
      );
    } else {
      setIndicatorColor("bg-red-600 dark:bg-[greenyellow]");
    }
  };

  const handleExternalLinkClick = (component) => {
    setActiveButtons([false, false, true]); // Set UpcomingMatch as active
    setCurrentComponent(component);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, [currentComponent]);

  return (
    <>
      <NavContext.Provider value={{isSearchOpen,closeSearch, toggleSearch,handleExternalLinkClick,containerRef,currentComponent,activeButtons,handleClick,indicatorColor }}>
        {props.children}
      </NavContext.Provider>
    </>
  );
};

export default NavState;
