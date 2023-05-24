import { FocusEvent, useState } from "react"
import { Input } from "./Input";
import s from './Todolist.module.css'

type PropsType = {
    text: string
    callback: (e: string) => void
}
export const EditableSpan = ({ text, callback }: PropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [inpSt, setInpSt] = useState<string>(text);
    const [errorSt, setErrorSt] = useState<string>('');
    const ERROR_MESSAGE = 'wrong string, should not contain only spaces or to be empty';
    const onBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
        const value = inpSt.trim();
        if (value) {
            callback(value);
            setErrorSt('');
            setEditMode(false);
        } else {
            setErrorSt(ERROR_MESSAGE)
            setEditMode(true);
        }
    }
    return (
        <>
            {!editMode ? <span onDoubleClick={() => {
                setEditMode(!editMode)
            }}>{text}</span> :
                <>
                    <Input
                        value={inpSt}
                        className={''}
                        autoFocus={true}
                        onBlur={onBlur}
                        onChange={e => setInpSt(e.currentTarget.value)}
                        onKeyDown={() => { }}
                    />
                    {errorSt && <div className={s.errorMessage}>{errorSt}</div>}
                </>
            }
        </>
    )
}