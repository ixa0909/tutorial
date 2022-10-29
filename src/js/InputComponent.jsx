import React,{useState} from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputComponent(props) {

    const [t,setT] = useState('')

    const changeT =(e)=>{
        setT(e.target.value)
    }
    const save =(e)=>{
        e.preventDefault()
        props.add(t)
        setT('')
    }
    return (
        <form>
            <TextField id="outlined-search" label="Search field" type="search" />
            <input type="text" placeholder="タイトル" value={t} onChange={changeT} />
            <button onClick={save}>保存</button>
        </form>
    )
}