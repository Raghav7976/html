import React, { useState} from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Cardimage = (props) => {

    const[Count, setCount] = useState(0);
    const HandleClick = () =>{
      setCount(Count+1);
    console.log("Button Clicked",Count);
  }
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.imgsrca}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.desc}
      </Card.Text>
      <Button onClick={HandleClick}>Go somewhere</Button>
      {Count}
    </Card.Body>
  </Card>
    </div>
  )
}

export default Cardimage
