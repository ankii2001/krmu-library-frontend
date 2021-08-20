import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Books!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstoriesflistgv2.azureedge.net%2Fstories%2F2018%2F05%2Fshiv_mainbanner-1.jpg&f=1&nofb=1'
              text="Self help book that aims at encouraging the potential within you!"
              label='Premium'
              path='/YouCanAchieveMore'
            />
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmustardadvisers.com%2Fwp-content%2Fuploads%2F2015%2F12%2Frich_dad.jpg&f=1&nofb=1'
              text="You don't need to earn a high income to be rich. Rich people make money work for them."
              label='Premium'
              path='/RichDadPoorDad'
            />
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-klqKK_IMemE%2FTqWgKvg3ufI%2FAAAAAAAAAes%2Fqbsp-LWkFTA%2Fs1600%2FSteveJobsBook.jpg&f=1&nofb=1'
              text="The authorized self-titled biography of American business magnate and Apple Inc. founder Steve Jobs."
              label='Premium'
              path='/SteveJobs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kUgo5J8PYInGS1sA_A_HUwHaEK%26pid%3DApi&f=1'
              text="An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power"
              label='Premium'
              path='/AtomicHabits'
            />
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rajthoughts.com%2Fwp-content%2Fuploads%2F2020%2F02%2F20190704_122546-scaled.jpg&f=1&nofb=1'
              text="The book's narrator, recalls his graduation from Brandeis University in the spring of 1979."
              label='Free !'
              path='/TuesdaysWithMorrie'
            />
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Faplus-media%2Fvc%2F1ce6a75d-6446-4700-bda7-4c9c74c35cbb.__CR0%2C81%2C2720%2C1682_PT0_SX970_V1___.png&f=1&nofb=1'
              text="This book is a collection of Swami Vivekananda's explanation of Meditation."
              label='Free !'
              path='/SwamiVikekananda-Meditation'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;