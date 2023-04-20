import React from 'react';
import {soups,grains,fruits,tea,snack,katogo,drinks,wines,desserts,appetizers} from '../data';
import '../styles/amazon.css';
import Cards from './Cards';


//breakfast

export const Tea = ({handleClick}) => {
  return (
    <section>
        {
            tea.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
      
    </section>
  )
}

export const Snacks = ({handleClick}) => {
  return (
    <section>
        {
            snack.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
      
    </section>
  )
}

export const Katogo= ({handleClick}) => {
  return (
    <section>
        {
            katogo.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
      
    </section>
  )
}

export const Drinks= ({handleClick}) => {
  return (
    <section>
        {
            drinks.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
      
    </section>
  )
}

//lunch
export const Grain = ({handleClick}) => {
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


export const Soups = ({handleClick}) => {
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


export const Fruit = ({handleClick}) => {
  return (
    <section>
        {
            fruits.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
        
        
    </section>
  )
}



