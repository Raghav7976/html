import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardEditor = () => {
  const[Count, setCount] = useState(100);
  const HandleClick = () =>{
    setCount(Count+1);
  console.log("Button Clicked",Count);}

  const DelClick = () =>{
    setCount(Count-1);
  console.log("Button Clicked",Count);
  if(Count<=0){
    alert("count is not in negative")
  }
    else {
      console.log("Button Clicked",Count);
    
  }
}
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card dom start</Card.Title>
      <Card.Text>
      count-{Count}
      </Card.Text>
      <Button onClick={HandleClick} variant="primary">+</Button>
      <Button onClick={DelClick} variant="danger">-</Button>
     
    </Card.Body>
  </Card>
    </div>
  )
}

export default CardEditor

