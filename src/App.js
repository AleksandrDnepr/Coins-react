
import './scss/app.scss'
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import CoinBlock from './components/CoinBlock';


import coins from './assets/coins.json'


function App() {
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
              <CoinBlock key={index} title={coin.title} price={coin.price} image={coin.imageUrl} nominal={coin.nominal} material={coin.material} types={coin.types} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
