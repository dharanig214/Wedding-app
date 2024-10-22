import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure no duplicate imports
import About from './Components/Navbar/pages/About'; 
import Booking from './Components/Navbar/pages/Booking';
import Carrer from './Components/Navbar/pages/Carrer';
import Contact from './Components/Navbar/pages/Contact';
import Gallery from './Components/Navbar/pages/Gallery';
import Service from './Components/Navbar/pages/Service';


import Navbar from './Components/Navbar/Navbar'; // Include Navbar if needed

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar if you have one */}
      <Routes>
       
        <Route path='/about' element={<About/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/carrer' element={<Carrer/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </Router>
  );
};

export default App;