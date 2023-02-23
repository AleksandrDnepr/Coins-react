import React, { Children } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import CoinBlock from '../components/CoinBlock/CoinBlock';
import Sceleton from '../components/CoinBlock/Sceleton';

function Home(props) {
  const [coins, setCoins] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeType, setActiveType] = React.useState({
    name:'popular', sort:'rating'
  });



  React.useEffect(() => {
let addQuery = activeIndex>0 ? `category=${activeIndex}`:''
let ascOrDesc = activeType.sort.includes('-')?'asc':'desc'

let sorting =  `&sortBy=${activeType.sort.replace('-','')}&order=${ascOrDesc}`
    setIsLoading(true);
    fetch(`https://63ed0891f1ec53805dd7d64a.mockapi.io/coins?${addQuery}${sorting}`)
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setCoins(res);
        });
        setIsLoading(false);
      }, 1000);
    // setCoins(res)})
    // setIsLoading(false)
    window.scrollTo(0, 0);
    
  }, [activeIndex,activeType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories activeIndex={activeIndex} onChange={(index) => {
                setActiveIndex(index);
              }}/>
        <Sort activeType={activeType} onChange={(index) => {
                setActiveType(index);
              }} />
      </div>
      <h2 className="content__title">All coins</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => {
              return <Sceleton key={i} />;
            })
          : coins.map((coin, index) => {
              return <CoinBlock key={index} {...coin} />;
            })}
      </div>
    </div>
  );
}

export default Home;
