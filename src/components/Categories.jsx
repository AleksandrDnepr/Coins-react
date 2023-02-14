import React from 'react';

function Categories(props) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const categories = ['All','Gold','Silver','Classic','Charity','Banknotes']

  const setActiveClass =(index)=>{
setActiveIndex(index)
  }
    return (
        <div className="categories">
<ul>
  {categories.map((item,index)=>{
    return <li key ={index} onClick={()=>{setActiveClass(index)}} className={(activeIndex===index)?"active":""}>{item}</li>
  })}</ul> 
</div>
    );
}

export default Categories;