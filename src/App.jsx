import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Explore from './pages/Explore';
import './index.css';

import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import Home from './pages/Home';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Nav setShowLogin={setShowLogin} />
      <main className='mt-[50px]'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order" element={<PlaceOrder />} />
        </Routes>
      </main>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </>
  );
};

export default App;
