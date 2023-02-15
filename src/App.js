
import React from 'react';
import './scss/app.scss'
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import CoinBlock from './components/CoinBlock';


function App() {
  const [coins, setCoins]=React.useState([])
  React.useEffect(()=>{
    fetch("https://63ed0891f1ec53805dd7d64a.mockapi.io/coins")
    .then((res)=>res.json())
    .then((res)=>setCoins(res))
  },[])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All coins</h2>
          <div className="content__items">
            {coins.map((coin, index) => (
              <CoinBlock key={index} {...coin} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
