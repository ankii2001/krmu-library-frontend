import React from 'react';
import '../../../App.css';
import CardItem from "../../CardItem"
import "../../Cards.css"

export default function Book1() {
  return (
    <>
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstoriesflistgv2.azureedge.net%2Fstories%2F2018%2F05%2Fshiv_mainbanner-1.jpg&f=1&nofb=1'
              text="Self help book that aims at encouraging the potential within you!"
              label='Buy / Rent'
              path="/RichDadPoorDad"
            />
          </ul>
          </div>
      </div>
    </div>
  </>
  );
};