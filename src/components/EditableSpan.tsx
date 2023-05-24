import { useState } from "react"
import { Input } from "./Input";

type PropsType = {
    text: string
}
export const EditableSpan = ({ text }: PropsType) => {
    const [editMode,setEditMode]=useState<boolean>(false);
    const [s,setS]=useState<string>(text)
    return (
        <>
            {!editMode ? <span onDoubleClick={() => {
                setEditMode(!editMode)
            }}>{text}</span>:
            <Input value={s} className={''} onBlur={()=>setEditMode(!editMode)} onChange={e=>setS(e.currentTarget.value)} onKeyDown={()=>{}}/>
            }
        </>
    )
}