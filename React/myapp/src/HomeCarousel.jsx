import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

const HomeCrousle = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img src='https://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg'text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src='https://th.bing.com/th/id/OIP.DBbaU-VxQA6Y8X8wG71QlQAAAA?pid=ImgDet&rs=1' text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src='https://th.bing.com/th/id/OIP.dbw5TeRTHcUDkp0HLqMzhwHaE7?pid=ImgDet&rs=1' text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default HomeCrousle
