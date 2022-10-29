import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Mori from "./Mori"
// import ToDoApp from "./ToDoApp"

// import "../css/styleConverted.css"

import InputComponent from "./InputComponent"
import FilterComponent from "./FilterComponent"
import ListComponent from "./ListComponent"


import Button from '@mui/material/Button';
import * as MUI from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';

import Calender from "./Calender";

function Push() {
  return <Button variant="contained">Hello World</Button>;
}

function Layout() {

  const [todoItems, setTodoItems] = useState([])

  useEffect(() => {
    (async () => {
      setTodoItems([
        { id: 1, t: "眠る", c: true },
        { id: 2, t: "食べる", c: true },
        { id: 3, t: "運動する", c: true },
        { id: 4, t: "研究する", c: true },
        { id: 5, t: "遊ぶ", c: true },
      ])
    })()
  }, [])

  const plan = "gargaga"
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
      <Push />
      <MUI.FormGroup>
        <MUI.FormControlLabel control={<MUI.Checkbox defaultChecked />} label="Label" />
        <MUI.FormControlLabel control={<MUI.Checkbox />} label="Disabled" />
      </MUI.FormGroup>
      <MUI.Fab color="primary" aria-label="add">
        <AddIcon />
      </MUI.Fab>
      
      <Calender plan={plan}></Calender>
      
      <InputComponent add={add} />
      <FilterComponent />
      <ListComponent todoItems={todoItems} upd={upd} remove={remove} />
    </div>
  );
}



const app = document.getElementById('output');
ReactDOM.render(<Layout />, app);