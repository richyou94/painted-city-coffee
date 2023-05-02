import React from "react";
import "./Wrapper.css";

const Wrapper = (props) => {
  return <div id="page-wrapper">{props.children}</div>;
};

export default Wrapper;
