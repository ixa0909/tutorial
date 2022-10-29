import React from "react";

export default function ListComponent(props) {
    return (
        <div>
            <ul>
                {props.todoItems.map(todoItem =>
                <li>
                    <span>タイトル</span>
                    <span><input type="checkbox"/></span>
                    <span><button>削除</button></span> 
                </li>
                )}    
            </ul>
        </div>
    )
}