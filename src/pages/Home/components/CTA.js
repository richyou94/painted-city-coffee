import React from "react";
import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Painted City Coffee</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <NavLink to="/get-a-quote" className="button fit primary">
              Get a Quote
            </NavLink>
          </li>
          <li>
            <NavLink to="/current-menu" className="button fit">Current menu</NavLink>
            
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CTA;
