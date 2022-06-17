import React from "react";
import { Form, Button } from "react-bootstrap";
import '../styles.css'

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
<div class="split left">    
<div className="container">
  <div className="row">
    <div className="text-center text-md-left">
     <Form>
     <p className="text-start">Add Employee Record</p>  
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Email address</Form.Label>
           <Form.Control type="name" name="name" placeholder="Enter your email" />
            <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter your Email" />
       </Form.Group>

       <Button variant="primary" onClick={handleOnSubmit} type="submit">
         Click To Add Record
       </Button>
      </Form>
   </div> 
 </div>
</div>
</div>
  );
};

export default AddUser