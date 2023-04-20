import React from 'react';
import {grains} from '../data';
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({handleClick}) => {
  return (
    <section>
        {
            grains.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
      
    </section>
  )
}

export default Amazon