import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SideDrawer.css";
import NavItem from "../Navbar/NavItem";

const SideDrawer = (props) => {
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.show}
      timeout={500}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
    >
      <aside ref={nodeRef} onClick={props.onClick} id="menu">
        <ul>
          <NavItem path="" name="Home" />
          <NavItem path="about-us" name="About Us" />
          <NavItem path="our-story" name="Our Story" />
          <NavItem path="current-menu" name="Current Menu" />
          <NavItem path="get-a-quote" name="get a quote" />
        </ul>
        <a onClick={props.onClick} className="close"></a>
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
