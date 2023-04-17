import { KeyboardEvent, ChangeEvent } from "react";
type PropsType={
    setInpSt:any
    value:string
    callback:()=>void
}
export const Input=(props:PropsType)=>{
    
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        props.setInpSt(e.currentTarget.value);    
    }
    const onKeyDownHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.key==="Enter"){
            props.callback();
        }
    }
    return(
        <input type="text" 
            onChange={onChangeHandler}
            value={props.value}
            onKeyDown={onKeyDownHandler}
        />
    )
}