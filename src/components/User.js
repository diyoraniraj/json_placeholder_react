import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const User = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

return (
<div>
{isEdit ? (
<div className="contain">
 <div className="row">
  <div className="text-center text-md-left">
   <Form>
   <p className="text-starting">Update Employee Record</p>  
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Email address</Form.Label>
         <Form.Control type="name" name="name" placeholder="Enter your name" />
          <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter your Email" />
     </Form.Group>

     <Button variant="primary" onClick={handleOnEditSubmit} type="submit">
       Click To Save Record
     </Button>
    </Form>
 </div>
</div>
</div>
      ) : (
      <>  
        <div className="user">
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
          <div>
            <Button variant="secondary" onClick={handleEdit}>Edit</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </div>
        </div>
        </> 
      )}
    </div>
  );
};

export default User