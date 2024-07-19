import React, {useEffect, useState} from "react";
import BookCard from "../components/Card";
import { useFirebase } from '../context/Firebase';


 const HomePage2 = ()=>{
     const firebase=useFirebase();
     const [books, setBooks]=useState([]);
     useEffect(()=>{
         firebase.listAllBooks().then((books) => setBooks(books.docs));
       // eslint-disable-next-line  
     },[])
return (
  <div>
  
  <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '36px', marginTop: '20px', marginBottom: '20px', padding: '10px', color: 'green' }}>वृक्षारोपण का विवरण</h1>
  <div className="container mt-5">
  <div className="row d-flex justify-content-center">
    {books.map((book) => (
      <div key={book.id} className="col-sm-3">
        <BookCard id={book.id} {...book.data()} />
      </div>
    ))}
  </div>
</div>

  
  </div>



  
);
};
 export default HomePage2;