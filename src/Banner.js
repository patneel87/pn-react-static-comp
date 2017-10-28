import React from 'react';
import Button from './Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='banner-left'>
        <h2>How the Eagles can turn the season around</h2>
        <p>"Here we are again at the one yard line. DeSean, snatching defeat from the jaws of victory. There you go."</p>
        <div className='button-holder'>
          <Button buttonType='dark'
                  buttonText='Get started' />
          <Button buttonType='light'
                  buttonText='Learn more' />
        </div>
      </div>
      <div className='banner-right'></div>
    </div>
  )
}

export default Banner;
