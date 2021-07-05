import React from 'react';
import './OurServices.css';
import ServiceItems from './ServiceItems';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ServiceItems
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Tuesday, 20 Oct 2020'
              path='/services'
            />
            <ServiceItems
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Tuesday, 20 Oct 2020'
              path='/products'
            />
            <ServiceItems
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Tuesday, 20 Oct 2020'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <ServiceItems
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Tuesday, 20 Oct 2020'
              path='/services'
            />
            <ServiceItems

              text='Experience Football on Top of the Himilayan Mountains'
              label='Tuesday, 20 Oct 2020'
              path='/products'
            />
            <ServiceItems
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Tuesday, 20 Oct 2020'
              path='/sign-up'
            />
          </ul>
        </div>
        <Button variant="dark">View All</Button>
      </div>
    </div>
  );
}

export default Cards;
