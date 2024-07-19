import React, {useEffect, useState} from "react";
import{useFirebase} from '../context/Firebase';
import BookCard from "../components/Cards";
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; // Import Row from react-bootstrap
import Col from 'react-bootstrap/Col'; // Import Col from react-bootstrap
const HomePage=()=>{
    const firebase=useFirebase();
    const[books, setBooks]=useState([]);
    useEffect(()=>{
        firebase.listAllBooks().then((books)=>setBooks(books.docs));
    },[]);
    return (
        // <div >
        //     <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '36px', marginTop: '20px', marginBottom: '20px', padding: '10px', color: 'green' }}>वृक्षारोपण का विवरण</h1>
        //     <CardGroup>{
        //     books.map((book)=>(
        //         <BookCard key={book.id} id={book.id} {...book.data()}/>
        //     ))
        // }
        // </CardGroup>
        // </div>
        <Container >
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '36px', marginTop: '20px', marginBottom: '20px', padding: '10px', color: 'green' }}>वृक्षारोपण का विवरण</h1>
            <Row xs={1} md={4} className="justify-content-center">
                {books.map((book) => (
                    <Col key={book.id} className="mb-4" >
                        <BookCard id={book.id} {...book.data()} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default HomePage;