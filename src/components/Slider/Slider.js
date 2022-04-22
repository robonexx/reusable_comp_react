import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from '../../styles/Slider.module.css';
import { Carousel } from 'react-responsive-carousel';

const data = [
  {
    name: 'item1',
    details: 'some details',
    id: 1,
    image: 'https://source.unsplash.com/random/300×300',
  },
  {
    name: 'item2',
    details: 'n2 some details',
    id: 1,
    image: 'https://source.unsplash.com/random/?city,night',
  },
  {
    name: 'item3',
    details: 'nr 3 some details',
    id: 1,
    image: 'https://source.unsplash.com/random/900×700/?fruit',
  },
];

export default function Slider() {
  return (
    <>
      <Carousel className={styled.wrapperDos} infiniteLoop autoPlay>
        {data.map(({ name, id, image, details }) => (
          <div className='image' key={id}>
            <h1 className={styled.title}>{name}</h1>
            <img src={image} alt='mobile' className={styled.image} />
            <p className={styled.details}>{details}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
}
