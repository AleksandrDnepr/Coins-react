
import './scss/app.scss'
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';


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
            {coins.map((coin, index)=>(
              <PizzaBlock key ={index} title={coin.title} price={coin.price} image={coin.imageUrl}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
