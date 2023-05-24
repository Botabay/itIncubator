import { Input } from "./Input";
import { Button } from './Button'
import { useState } from "react";
import { KeyboardEvent, ChangeEvent } from "react";
import s from './Todolist.module.css'

type ContainerComponentProps = {
    todolistId: string
    addTask: (value: string, todolistId: string) => void
}
export const ContainerComponent = ({ addTask, todolistId }: ContainerComponentProps) => {
    const [inpSt, setInpSt] = useState<string>('');
    const [errorSt, setErrorSt] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) =>
        setInpSt(e.currentTarget.value);
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>
        e.key === 'Enter' && addTask(inpSt, todolistId)
    return (
        <div>
            <Input
                value={inpSt}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className={(errorSt && s.error) + ''}
            />
            <Button className={''} name={'+'} onClick={() => addTask(inpSt, todolistId)} />
            {errorSt && <div className={s.errorMessage}>{errorSt}</div>}
        </div>
    )
}