import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: './poster4.jpg',
    title: 'Wheres the Pants?!?!',
    desc: ' "No pants is no bueno, needs some fine tuning" ',
    authImg: './louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: './poster3.jpg',
    title: 'To Much Madness in Mad Max',
    desc: ' "Not many mustaches :( " ',
    authImg: './alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: './poster2.jpg',
    title: 'Meh',
    desc: ' "I could kick Russel Crowes ass" ',
    authImg: './leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: './poster1.jpg',
    title: 'His Heart Will Not Go On',
    desc: ' "OMG he actually dies!!!" ',
    authImg: './pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="Movie Reviews"
                stories={stories} />
      <Stories  storiesTitle="Pop Culture"
                stories={stories} />
      <Footer />
    </div>
  );
}

export default App;
