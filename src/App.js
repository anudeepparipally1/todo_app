// import logo from './logo.svg';
import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Todos from "./componets/Todos";
import AddTodo from "./componets/AddTodo";
import { useState, useEffect } from "react";
import {Routes , Route} from "react-router-dom";
import About from "./componets/About";

function App() {
  let initTodo;
  if (localStorage.getItem("toodos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("toodos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // Deleting this way in React does not work
    // let index=todos.indexOf(todo);
    // todo.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log(" I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="ToDo App 😉" searchBar={false} />
      <Routes>
        <Route path="/" element={<>  
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        </>} />
        <Route path="/about" element ={<About/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
