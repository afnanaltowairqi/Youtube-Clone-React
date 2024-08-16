import React, { useState } from 'react'
import '../App.css'
import Side from '../component/Side'
import Feed from '../component/Feed'


const Home = ({side}) => {
  const [category, setCategory]=useState(0);
  return (
    <> 
    <Side side={side} category={category} setCategory={setCategory} />
    <div className={`container ${side?"":'large-container'}`}>
      <Feed category={category}/>
    </div>
    </>
      
  )
}

export default Home