import React, {useEffect, useState} from "react";
import{useParams} from 'react-router-dom';
import {useFirebase} from '../context/Firebase'
const BookDetailpage=()=>{
    const params=useParams();
    const firebase=useFirebase();
    const [data, setData]=useState(null);
    const [url, setURL]=useState(null);
    console.log(data);
    useEffect(()=>{
        firebase.getBookByID(params.bookId)
        .then((value)=> setData(value.data()));
    },[]);
    useEffect(()=>{
        if(data){
            const imageURL=data.imageURL;
            firebase.getImageURL(imageURL).then((url)=>setURL(url));
        }

    },[data]);
    if(data==null) return <h1>Loading....</h1>;
    return(
        // <div className="container mt-5" style={{color: 'green'}}>
            
        //     <img src={url} width='50%' style={{borderRadius: "10px"}}/>
        //     <h1>पौधे का विवरण: </h1>
        //     <br/>
        //             <h1>{data.displayName}</h1>
        //             <p> UTID :- {data.names}</p>
        //             <p> पौधे का स्थान :- {data.plot}</p>
        //             <p> दिनांक :- {data.selectedDate}</p>
        //             <p> वृक्ष प्रजाति :- {data.tree}</p>
        //             <p> पालक नाम :- {data.treeNumber}</p>
        //             <p> वर्तमान स्थिति :- {data.status}</p>
        //             <p> UserEmail of user is:- {data.userEmai}</p>
        // </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6"> {/* Image column */}
                    <img src={url} className="img-fluid rounded" alt="Plant" />
                </div>
                <div className="col-md-6" style={{color: 'green'}}> {/* Content column */}
                    <h1 style={{marginLeft: '10px', marginTop: '50px' }}>पौधे का विवरण:</h1>
                    <br />
                    <h1>{data.displayName}</h1>
                    <div style={{ fontSize: '25px', marginLeft: '10px' }}>
                    <p >UTID :- {data.names}</p>
                    <p>पौधे का स्थान :- {data.plot}</p>
                    <p>दिनांक :- {data.selectedDate}</p>
                    <p>वृक्ष प्रजाति :- {data.tree}</p>
                    <p>पालक नाम :- {data.treeNumber}</p>
                    <p>वर्तमान स्थिति :- {data.status}</p>
                    <p>UserEmail of user is:- {data.userEmai}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetailpage;
