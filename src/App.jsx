import React from 'react'
import LandingPage from './Pages/LandingPage.jsx'
import Services from "./Pages/Services.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact.jsx';
import Product from './Pages/Product.jsx';
import About from './Pages/About.jsx';

const App = () => {
  return (
<>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
</>
  )
}

export default App
