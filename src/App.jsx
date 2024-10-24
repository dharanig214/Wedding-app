import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Navbar/pages/About";
import Booking from "./Components/Navbar/pages/Booking";
import Carrer from "./Components/Navbar/pages/Carrer";
import Contact from "./Components/Navbar/pages/Contact";
import Gallery from "./Components/Navbar/pages/Gallery";
import Service from "./Components/Navbar/pages/Service";

import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="about" element={<About />} />
        <Route path="booking" element={<Booking />} />
        <Route path="carrer" element={<Carrer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="service" element={<Service />} />
      </Route>
    </Routes>
  );
};

export default App;
