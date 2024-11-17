import React, { useState } from 'react';
import Spring from './pages/Spring';
import Topbar from './pages/Topbar';
import NavbarAndHero from './pages/NavbarAndHero';
import Services from './pages/Services';
import Destination from './pages/Destination';
import ExploreTour from './pages/ExploreTour';
import Packages from './pages/Packages';
import About from './pages/About';
import Gallery from './pages/Gallery';
import TourBooking from './pages/TourBooking';
import TravelGuide from './pages/TravelGuide';
import Blog from './pages/Blog';
import Testimonial from './pages/Testimonial';
import Subscribe from './pages/Subscribe';
import Footer from './pages/Footer';
import Copyright from './pages/Copyright';
import BackToTop from './pages/BackToTop';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404Page from './pages/Error404Page';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="App">
      <>
        {/* <Spring/> */}
        <Topbar />
        <NavbarAndHero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/exploretour' element={<ExploreTour />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/booking' element={<TourBooking />} />
          <Route path='/guides' element={<TravelGuide />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/404' element={<Error404Page />} />
        </Routes>
        <Subscribe />
        <Footer />
        <Copyright />
        <BackToTop />
      </>
    </div>
  )
}
export default App

