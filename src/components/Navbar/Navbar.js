import React, { useState } from "react";
import BackDrop from "../shared/components/BackDrop";
import SideDrawer from "../SideDrawer/SideDrawer";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks />
      </SideDrawer>

      <nav id="nav" className="">
        <ul>
          <li className="special">
            {!drawerIsOpen && (
              <a onClick={openDrawerHandler} className="menuToggle">
                <span>Menu</span>
              </a>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
