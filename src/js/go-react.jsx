import React from "react";
import ReactDOM from "react-dom";
import Mori from "./Mori"
// import ToDoApp from "./ToDoApp"

import InputComponent from "./InputComponent"
import FilterComponent from "./FilterComponent"
import ListComponent from "./ListComponent"


class Layout extends React.Component {
  render() {
    return (
      <div>
        <InputComponent/>
        <FilterComponent/>
        <ListComponent/>
      </div>
    );
  }
}


const app = document.getElementById('output');
ReactDOM.render(<Layout/>, app);