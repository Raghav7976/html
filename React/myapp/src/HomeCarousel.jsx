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
      <img src='https://th.bing.com/th/id/R.1561587aef2154176057c566903f1abe?rik=62JUQIXxRe0wmQ&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2016%2f05%2f28%2fcloudy-weather-beautiful-landscape-wallpaper.jpeg&ehk=m8inrles9xW4ihDzBAmV2YQxK9ImmesFSYnuux%2fOqNY%3d&risl=&pid=ImgRaw&r=0' text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text="Third slide" />
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
