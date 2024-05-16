import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Explore from './pages/Explore';


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

//I am trying to commit changes
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/explore" element={<Explore />}/>
    </Routes>
    
      
    
    
  );
};

export default App;