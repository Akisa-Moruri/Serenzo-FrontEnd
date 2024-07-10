import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Book from './Components/Book';
import Gallery from './Components/Gallery';
import About from './Components/About';
import Contact from './Components/Contact';
import Search from './Components/Search';
import Footer from './Components/Footer';
import Login from './Components/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book" element={<Book />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App;