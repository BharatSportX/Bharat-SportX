import { useState } from "react";
import NavContext from "./NavContext";

const NavState = (props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const closeSearch = () => {
    if (isSearchOpen) {
      toggleSearch();
    }
  };
  return (
    <>
      <NavContext.Provider value={{isSearchOpen,closeSearch, toggleSearch }}>
        {props.children}
      </NavContext.Provider>
    </>
  );
};

export default NavState;
