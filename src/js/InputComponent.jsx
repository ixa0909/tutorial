import React,{useState} from "react";

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
            <TextField id="outlined-search" 
                label="to do を入力" value={t} 
                    type="search" onChange={changeT}
                        color="secondary"/>
            <button onClick={save}>保存</button>
        </form>
    )
}