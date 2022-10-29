import React,{useState} from "react";

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
            <input type="text" placeholder="タイトル" value={t} onChange={changeT} />
            <button onClick={save}>保存</button>
        </form>
    )
}