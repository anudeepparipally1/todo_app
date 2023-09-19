import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Todo({todo,onDelete}) {
  return (
    <div>
    <Card  style={{ width: '30rem' }} >
      <Card.Header as="h4" >{todo.title}</Card.Header>
      <Card.Body>
        <Card.Text>
        <p>
            {todo.desc}
        </p>
        </Card.Text>
        <Button onClick={()=> onDelete(todo)}>Done</Button>{' '}
        <Button variant="danger" onClick={()=> onDelete(todo)}>Delete</Button>{' '}
      </Card.Body>
    </Card>   
    </div>
  )
}
