
import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {
  Routes,
  Route,
} from "react-router-dom";

import './scss/app.scss'
import Cart from './pages/Cart';


function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home searchValue={searchValue}/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          {/* <NotFound /> */}
        </Routes>
      </div>
    </div>

  );
}

export default App;
