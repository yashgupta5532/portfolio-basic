import React from "react";
import Navbar from "./components/layout/navbar";
import Text from "./components/Text";
import Slide from "./components/layout/Slide";
import Card from "./components/layout/card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/utils/About";
import Home from './components/layout/Home'
function App() {
  return (
    <>
      <Router>
        <Navbar
          title={"task"}
          about={"About us"}
          home={"Home"}
          // choose={"Select"}
          />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            {/* Render nested routes for the "About" page */}
            <Route path="/slide" element={<Slide />} />
            <Route path="/card" element={<Card />} />
            <Route path="/text" element={<Text />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
