import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../context/Firebase';
const ListingPage=()=>{
    const firebase=useFirebase();
    const [names, setNames]=useState('');
    const [plot, setPlot]=useState('');
    const [tree, setTree]=useState('');
    const [treeNumber, settreeNumber]=useState('');
    const [selectedDate, setSelectedDate] = useState("");
    const [status, setStatus]=useState('');
    const [coverpic, setCoverpic]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await firebase.handleCreateNewListing(names, plot, tree,treeNumber,selectedDate,status,coverpic);
    };
    return(
        <div >
          <div className = "img-fluid"
      style = {{
         backgroundImage:
         'url("https://institute.careerguide.com/wp-content/uploads/2020/03/14728032914.jpg")',
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         height: "100vh",
              width: "100vw",
        display: "flex",
        flexDirection: 'row', 
             
      }}>

          <div style={{marginLeft: '70px'}}>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter UTID</Form.Label>
        <Form.Control onChange={e=>setNames(e.target.value)} 
        value={names}
        type="text" placeholder="UTID" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Plot</Form.Label>
        <Form.Control 
        onChange={e=>setPlot(e.target.value)} 
        value={plot}
        type="text" placeholder="Enter Place" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> वृक्ष प्रजाति</Form.Label>
        <Form.Control onChange={(e)=>setTree(e.target.value)}
        value={tree} type="text" placeholder="वृक्ष प्रजाति" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> पालक नाम</Form.Label>
        <Form.Control onChange={(e)=>settreeNumber(e.target.value)}
        value={treeNumber} type="text" placeholder="पालक नाम" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>दिनांक</Form.Label>
        <Form.Control onChange={(e)=>setSelectedDate(e.target.value)}
        value={selectedDate} type="date" placeholder="दिनांक" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>वर्तमान स्थिति</Form.Label>
        <Form.Control onChange={(e)=>setStatus(e.target.value)}
        value={status} type="text" placeholder="वर्तमान स्थिति" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Photo</Form.Label>
        <Form.Control onChange={(e)=>setCoverpic(e.target.files[0])}
         type="file" placeholder="पालक नाम" />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    </div>
    </div>

        </div>

    )
}
export default ListingPage;


  
