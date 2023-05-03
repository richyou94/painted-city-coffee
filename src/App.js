import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Wrapper from "./components/shared/layouts/Wrapper";
import Header from "./components/shared/components/Header";
import Footer from "./components/shared/components/Footer";
import Landing from "./pages/Home/Landing";
import AboutUs from "./pages/About/AboutUs";
import Story from "./pages/Story/Story";
import Menu from "./pages/Menu/Menu";
import Quote from "./pages/Quote/Quote";

function App() {
  return (
    <BrowserRouter>
      {/* <Wrapper /> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/our-story" element={<Story />} />
        <Route exact path="/current-menu" element={<Menu />} />
        <Route exact path="/get-a-quote" element={<Quote />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
