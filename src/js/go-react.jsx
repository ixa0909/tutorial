import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import Mori from "./Mori"
// import ToDoApp from "./ToDoApp"

import InputComponent from "./InputComponent"
import FilterComponent from "./FilterComponent"
import ListComponent from "./ListComponent"




function Layout (){
  // 初期化はいらない
  const[todoItems,setTodoItems] = useState([])

  useEffect(() =>{
    (async () =>{
      setTodoItems([
        {id:1,t:"1",c:true},
        {id:1,t:"1",c:true},
        {id:1,t:"1",c:true},
        {id:1,t:"1",c:true},
        {id:1,t:"1",c:true},
      ])
    })()
  },[])


  const add=(t)=>{
    setTodoItems([...todoItems,{id:todoItems.length+1,t:t,c:false}])
  }

  
    return (
      <div>
        <InputComponent add={add}/>
        <FilterComponent/>
        <ListComponent todoItems={todoItems}/>
      </div>
    );
  }



const app = document.getElementById('output');
ReactDOM.render(<Layout/>, app);