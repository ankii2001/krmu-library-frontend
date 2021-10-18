import React from 'react';
import '../../../App.css';
import CardItem from "../../CardItem"
import "../../Cards.css"

export default function Book5() {
  return (
    <>
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rajthoughts.com%2Fwp-content%2Fuploads%2F2020%2F02%2F20190704_122546-scaled.jpg&f=1&nofb=1'
              text="The book's narrator, recalls his graduation from Brandeis University in the spring of 1979."
              label='Buy / Issue'
              path='/TuesdaysWithMorrie'
            />
          </ul>
          </div>
      </div>
    </div>
  </>
  );
};