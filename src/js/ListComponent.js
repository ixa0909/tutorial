import React from "react";

export default function ListComponent(props) {
    return (
        <div>
            <ul>
                {props.todoItems.map(todoItem =>
                <li>
                    <span id ="title">{todoItem.t}</span>
                    <span>
                        <input type="checkbox"
                        checked={todoItem.c}
                        onChange={e=>{
                            props.upd(todoItem.id)
                        }}
                        />
                    </span>
                    <span>
                        <button onClick={e=>{
                            e.preventDefault()
                            props.remove(todoItem.id)
                        }}>
                            削除
                        </button>
                    </span> 
                </li>
                )}    
            </ul>
        </div>
    )
}