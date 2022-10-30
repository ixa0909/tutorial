import React from "react";
import Button from '@mui/material/Button';

export default function ListComponent(props) {
    return (
        <div>
            <ul>

                {props.todoItems.map(todoItem => {
                    if (props.filterStatus === 1 && todoItem.c === false) {
                        return false
                    }
                    if (props.filterStatus === 2 && todoItem.c === true) {
                        return false
                    }
                    return (
                        <li key={todoItem.id}>
                            <span>{todoItem.t}</span>
                            <span>
                                <input type="checkbox"
                                    checked={todoItem.c}
                                    onChange={e => {
                                        props.upd(todoItem.id)
                                    }}
                                />
                            </span>
                            <span>
                                <button onClick={e => {
                                    e.preventDefault()
                                    props.remove(todoItem.id)
                                }}>
                                    削除
                                </button>
                                <Button variant="outlined" color="error" onClick={e => {
                                    e.preventDefault()
                                    props.remove(todoItem.id)
                                }}>
                                    削除
                                </Button>

                            </span>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}