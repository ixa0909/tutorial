import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


import InputComponent from "./InputComponent"
import FilterComponent from "./FilterComponent"
import ListComponent from "./ListComponent"
// import Footer from "./Footer";



function Layout() {

  const [filterStatus, setFilterStatus] = useState(0)

  const [todoItems, setTodoItems] = useState([])

  // useEffect(() => {
  //   (async () => {
  //     setTodoItems([
  //       { id: 1, t: "眠る", c: false },
  //       { id: 2, t: "食べる", c: true },
  //       { id: 3, t: "運動する", c: true },
  //       { id: 4, t: "研究する", c: true },
  //       { id: 5, t: "遊ぶ", c: true },
  //     ])
  //   })()
  // }, [])

  useEffect(() => {
    (async () => {
      setTodoItems(JSON.parse(localStorage.getItem('todos')))
    })()
  }, [])


  const add = (t) => {
    setTodoItems([...todoItems, { id: todoItems.length + 1, t: t, c: false }])
  }

  const upd = (id) => {
    setTodoItems(todoItems.map(todoItem => {
      if (todoItem.id === id) {
        todoItem.c = !todoItem.c
      }
      return todoItem
    }))
  }

  const remove = (id) => {
    setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
  }


  return (
    <div>
      
      <InputComponent add={add} />
      <FilterComponent setFilterStatus={setFilterStatus} />
      <ListComponent todoItems={todoItems} upd={upd} remove={remove} filterStatus={filterStatus} setTodoItems={setTodoItems}/>
      
    </div>
  );
}



const app = document.getElementById('output');
ReactDOM.render(<Layout />, app);