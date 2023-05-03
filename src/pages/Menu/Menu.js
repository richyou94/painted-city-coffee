import React from "react";
import Main from "../../components/shared/layouts/Main";
import Header from "../../components/shared/components/Header";

const Menu = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="background-photo-2"></div>
        <header>
          <h2>current menu</h2>
        </header>
        <section class="wrapper menu-background style2">
          <div class="inner">
            <div class="row menu">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="card">
                  <h2>Classic</h2>
                  <ul>
                    <li>Americano</li>
                    <li>Cappuccino</li>
                    <li>Flat White</li>
                    <li>Latte</li>
                    <li>Macchiato</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="card">
                  <h2>Sweets</h2>
                  <ul>
                    <li>Hazelnut</li>
                    <li>Lavender</li>
                    <li>Mocha</li>
                    <li>Vanilla</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="card">
                  <h2>Decaf</h2>
                  <ul>
                    <li>Drip</li>
                    <li>Hot Chocolate</li>
                    <li>Tea</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Menu;
