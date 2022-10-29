import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Mori from "./Mori"
// import ToDoApp from "./ToDoApp"

// import "../css/styleConverted.css"

import InputComponent from "./InputComponent"
import FilterComponent from "./FilterComponent"
import ListComponent from "./ListComponent"

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';


import Button from '@mui/material/Button';
import * as MUI from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';


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
      
      
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale='ja'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}
        events={[
          {title:'eventを', start: '2022-03-14'},
          {title:'こんな感じで追加できます', start: '2022-03-15', end: '2022-03-17'}
        ]}
      />
      <InputComponent add={add} />
      <FilterComponent />
      <ListComponent todoItems={todoItems} upd={upd} remove={remove} />
    </div>
  );
}



const app = document.getElementById('output');
ReactDOM.render(<Layout />, app);