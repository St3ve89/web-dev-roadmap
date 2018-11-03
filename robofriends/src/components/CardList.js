import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if(true) {
    throw new Error('NOOO!')
  }
  return (
    <div>
      {
        robots.map((elem, i) => {
          return (
            <Card 
              key={i} 
              id={elem.id} 
              name={elem.name} 
              email={elem.email}
            />
          )
        })
      }
    </div>
  )
}

export default CardList