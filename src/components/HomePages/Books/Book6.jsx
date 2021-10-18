import React from 'react';
import '../../../App.css';
import CardItem from "../../CardItem"
import "../../Cards.css"

export default function Book6() {
  return (
    <>
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Faplus-media%2Fvc%2F1ce6a75d-6446-4700-bda7-4c9c74c35cbb.__CR0%2C81%2C2720%2C1682_PT0_SX970_V1___.png&f=1&nofb=1'
              text="This book is a collection of Swami Vivekananda's explanation of Meditation."
              label='Buy / Issue'
              path='/SwamiVikekananda-Meditation'
            />
          </ul>
          </div>
      </div>
    </div>
  </>
  );
};