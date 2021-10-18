import React from 'react';
import '../../../App.css';
import CardItem from "../../CardItem"
import "../../Cards.css"

export default function Book4() {
  return (
    <>
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kUgo5J8PYInGS1sA_A_HUwHaEK%26pid%3DApi&f=1'
              text="An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power"
              label='Buy / Issue'
              path='/AtomicHabits'
            />
          </ul>
          </div>
      </div>
    </div>
  </>
  );
};