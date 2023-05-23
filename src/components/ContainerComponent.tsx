import { Input } from "./Input";
import { Button } from './Button'
import { useState } from "react";
import { KeyboardEvent, ChangeEvent } from "react";

type ContainerComponentProps = {
    todolistId: string
    addTask: (value: string, todolistId: string) => void
}
export const ContainerComponent = ({ addTask, todolistId }: ContainerComponentProps) => {
    const [inpSt, setInpSt] = useState<string>('');

    const secAddTask = (e) => {
        addTask(e, todolistId);
    }

    return (
        <div>
            <Input
                value={inpSt}
                onChange={(e: ChangeEvent<HTMLInputElement>) => secAddTask(e)}
                className={(errorSt && s.error) + ''}
            />
            <Button className={''} name={'+'} callback={() => addTask(inpSt, todolistId)} />
        </div>
    )
}