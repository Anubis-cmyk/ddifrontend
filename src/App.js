import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import HomeScreen from './screens/Home-screen';
import FlavorScreen from './screens/Flavors-screen';
import AboutScreen from './screens/About-screen';
import ContactUsScreen from './screens/ContactUs-screen';
import ShopScreen from './screens/Shop-screen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <main className="App"> 
       <Routes>
              <Route path="/" element={<HomeScreen/>}/>
              <Route path="/flavors" element={<FlavorScreen/>}/>
              <Route path="/about" element={<AboutScreen/>}/> 
              <Route path="/contact" element={<ContactUsScreen/>}/> 
              <Route path="/shop" element={<ShopScreen/>}/> 
       </Routes>
    </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
