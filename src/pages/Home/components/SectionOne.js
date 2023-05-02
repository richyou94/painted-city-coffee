import React from "react";
import { BsPersonHeart } from "react-icons/bs";
import { SiCoffeescript } from "react-icons/si";
import { TbHeartHandshake } from "react-icons/tb";


const SectionOne = () => {
  return (
    
      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>Mission</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
              eleifend
              <br />
              fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
              ullamcorper.
            </p>
          </header>
          <ul className="icons major">
            <li>
              <span className="icon major style1">
                <BsPersonHeart />
                <span className="label">Lorem</span>
              </span>
            </li>
            <li>
              <span className="icon major style2">
                <SiCoffeescript />
                <span className="label">Ipsum</span>
              </span>
            </li>
            <li>
              <span className="icon major style1">
                <TbHeartHandshake />
                <span className="label">Lorem</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    
  );
};

export default SectionOne;
