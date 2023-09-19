import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank");
        }
        else{
            addTodo(title,desc)
        }
    }

  return (
    <div className="container my-3 ">
        <h3>Add a ToDo</h3>
      <Form onSubmit={submit}>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ToDo Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter ToDo title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description" />
        </Form.Group>

        <Button variant="success btn-small" type="submit">Add Todo</Button>

      </Form>
    </div>
  );
};

export default AddTodo;
