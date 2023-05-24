import { Input } from "./Input";
import { Button } from './Button'
import { useState } from "react";
import { KeyboardEvent, ChangeEvent } from "react";
import s from './Todolist.module.css'

type ContainerComponentProps = {
    itemTitle: string
    addTask: (value: string) => void
}

export const AddItem = ({
    itemTitle,
    addTask
}: ContainerComponentProps) => {

    const [inpSt, setInpSt] = useState<string>('');
    const [errorSt, setErrorSt] = useState<string>('');
    const ERROR_MESSAGE = 'wrong string, should not contain only spaces or to be empty';

    const checkValue = () => {
        const value = inpSt.trim();
        if (value) {
            addTask(value);
            setErrorSt('')
        } else {
            setErrorSt(ERROR_MESSAGE)
        }
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorSt('');
        setInpSt(e.currentTarget.value);
    }

    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            checkValue()
        }
    }

    const onButtonClick = () => checkValue()

    return (
        <div>
            {itemTitle}
            <Input
                value={inpSt}
                onChange={onInputChange}
                onKeyDown={onInputKeyDown}
                className={(errorSt && s.error) + ''}
                onBlur={()=>{}}
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