import React from 'react';
import {soups} from '../data';
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({handleClick}) => {
  return (
    <section>
        {
            soups.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
        
        
    </section>
  )
}

export default Amazon