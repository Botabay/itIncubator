import { Dispatch, useState } from "react";
type PropsType={
    callback:any
    value:string
}
export const Input=(props:PropsType)=>{
    
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        props.callback(e.currentTarget.value);    
    }
    return(
        <input type="text" onChange={onChangeHandler} value={props.value}/>
    )
}