import React from "react";
import ReactDOM from "react-dom";
import Mori from "./Mori"
// import ToDoApp from "./ToDoApp"

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Fuga</h1>
        <Mori/>
        {/* <ToDoApp/> */}
      </div>
      
    );
  }
}


const app = document.getElementById('output');
ReactDOM.render(<Layout/>, app);