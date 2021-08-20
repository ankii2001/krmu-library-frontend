import React from 'react';
import '../../../App.css';
import CardItem from "../../CardItem"
import "../../Cards.css"

export default function Book2() {
  return (
    <>
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmustardadvisers.com%2Fwp-content%2Fuploads%2F2015%2F12%2Frich_dad.jpg&f=1&nofb=1'
              text="You don't need to earn a high income to be rich. Rich people make money work for them."
              label='Buy / Rent'
              path='/RichDadPoorDad'
            />
          </ul>
          </div>
      </div>
    </div>
  </>
  );
};