import React from 'react';
import '../../../App.css';
import CardItem from "../../CardItem"
import "../../Cards.css"

export default function Book3() {
  return (
    <>
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-klqKK_IMemE%2FTqWgKvg3ufI%2FAAAAAAAAAes%2Fqbsp-LWkFTA%2Fs1600%2FSteveJobsBook.jpg&f=1&nofb=1'
              text="The authorized self-titled biography of American business magnate and Apple Inc. founder Steve Jobs."
              label='Buy / Rent'
              path='/SteveJobs'
            />
          </ul>
          </div>
      </div>
    </div>
  </>
  );
};