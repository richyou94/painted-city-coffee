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
            Painted City Coffee brings an experience forward coffee brand in the
            Orange County market with an emphasis on service excellence,
            inspiring environment, and quality standards of products that are
            distinct in expression and form.
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
            <span className="icon major style1">
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
