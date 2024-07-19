import React, {useState, useEffect}from "react";
import{useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useFirebase} from '../context/Firebase';
const BookCard=(props)=>{
    const firebase=useFirebase();
    const navigate=useNavigate();
    const [url, setURL]=useState(null);
    useEffect(()=>{
        firebase.getImageURL(props.imageURL).then(url=>setURL(url));

    },[]);
    console.log(props);
    return(
        <Card style={{ width: '18rem', margin: "20px"}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
      <Card.Title>{props.displayName}</Card.Title>
          <Card.Text>UTID :- {props.names}</Card.Text>
          <Card.Text> पौधे का स्थान :- {props.plot}</Card.Text>
          <Card.Text>दिनांक :- {props.selectedDate}</Card.Text>

          <Card.Text>वृक्ष प्रजाति :- {props.tree}</Card.Text>
          <Card.Text>वर्तमान स्थिति :-{props.status}</Card.Text>
          <Card.Text>पालक नाम:- {props.treeNumber}</Card.Text>
        <Button onClick={e=>navigate(`/book/view/${props.id}`)} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
    )

}
export default BookCard;