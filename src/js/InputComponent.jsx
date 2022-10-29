import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function InputComponent(props) {

    const [t, setT] = useState('')

    const changeT = (e) => {
        setT(e.target.value)
    }
    const save = (e) => {
        e.preventDefault()
        props.add(t)
        setT('')
    }
    return (
        <form>
            <TextField id="outlined-search"
                label="to do を入力" value={t}
                type="search" onChange={changeT}
                color="secondary" size="medium" />

            <Button variant="contained" endIcon={<SendIcon />} onClick={save} size="large">
                登録
            </Button>


        </form>
    )
}