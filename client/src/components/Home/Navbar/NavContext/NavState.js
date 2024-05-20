import { useState } from "react";
import NavContext from "./NavContext";

const NavState = (props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <>
      <NavContext.Provider value={{isSearchOpen, toggleSearch }}>
        {props.children}
      </NavContext.Provider>
    </>
  );
};

export default NavState;
