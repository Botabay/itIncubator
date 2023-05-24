import { Input } from "./Input";
import { Button } from './Button'
import { useState } from "react";
import { KeyboardEvent, ChangeEvent } from "react";
import s from './Todolist.module.css'

type ContainerComponentProps = {
    todolistId: string
    addTask: (value: string, todolistId: string) => void
}

export const ContainerComponent = ({
    addTask,
    todolistId
}: ContainerComponentProps) => {

    const [inpSt, setInpSt] = useState<string>('');
    const [errorSt, setErrorSt] = useState<string>('');
    const ERROR_MESSAGE = 'wrong string, should not contain only spaces or to be empty';

    const checkValue = () => {
        const value = inpSt.trim();
        if (value) {
            addTask(value, todolistId);
            setErrorSt('')
        } else {
            setErrorSt(ERROR_MESSAGE)
        }
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
        setInpSt(e.currentTarget.value)

    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            checkValue()
        }
    }

    const onButtonClick = () => checkValue()
    
    return (
        <div>
            <Input
                value={inpSt}
                onChange={onInputChange}
                onKeyDown={onInputKeyDown}
                className={(errorSt && s.error) + ''}
            />
            <Button
                className={''}
                name={'+'}
                onClick={onButtonClick}
            />
            {errorSt && <div className={s.errorMessage}>{errorSt}</div>}
        </div>
    )
}