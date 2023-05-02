import React from "react";
import NavItem from "./NavItem";

const NavLinks = (props) => {
  return (
    <div ref={props.ref} id="menu">
      <ul>
        <NavItem path="" name="Home" />
        <NavItem path="about-us" name="About Us" />
        <NavItem path="our-story" name="Our Story" />
        <NavItem path="current-menu" name="Current Menu" />
        <NavItem path="get-a-quote" name="get a quote" />
      </ul>
    </div>
  );
};

export default NavLinks;
