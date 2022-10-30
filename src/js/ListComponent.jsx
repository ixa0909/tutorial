import React from "react";
import Button from "@mui/material/Button";
import "./style.css";

export default function ListComponent(props) {
  return (
    <div>
      
        {props.todoItems.map((todoItem) => {
          if (props.filterStatus === 1 && todoItem.c === false) {
            return false;
          }
          if (props.filterStatus === 2 && todoItem.c === true) {
            return false;
          }
          return (
            <div className="todo" >
            {/* <li key={todoItem.id}> */}
              <span>{todoItem.t}</span>
              <span>
                <input
                  type="checkbox"
                  checked={todoItem.c}
                  onChange={(e) => {
                    props.upd(todoItem.id);
                  }}
                />
              </span>
              <span>
                <Button
                  variant="contained"
                  color="error"
                  onClick={(e) => {
                    e.preventDefault();
                    props.remove(todoItem.id);
                  }}
                >
                  削除
                </Button>
              </span>
            {/* </li> */}
            </div>
          );
        })}
      
    </div>
  );
}
