import { useState } from 'react';
import { Input } from "./Input";
import { Button } from './Button'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Checkbox } from "./Checkbox";
import s from './Todolist.module.css'
import { TaskType, FilterType } from './../state/state'

type PropsType = {
    todolistId: string
    title: string
    filter: FilterType
    filteredTasks: TaskType[]

    removeTask: (taskId: string, todolistId: string) => void
    removeAllTasks: (todolistId: string) => void
    addTask: (value: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, e: boolean, todolistId: string) => void

    changeTodolistFilter: (filter: FilterType, todolistId: string) => void
    removeTodolist: (todolistId: string) => void
}


export const Todolist = ({
    todolistId,
    title,
    filter,
    filteredTasks,

    removeTask,
    removeAllTasks,
    addTask,
    changeTaskStatus,

    changeTodolistFilter,
    removeTodolist
}: PropsType) => {
    const [listRef] = useAutoAnimate<HTMLUListElement>()
    const [inpSt, setInpSt] = useState<string>('');
    const [errorSt, setErrorSt] = useState<string>('')
    const f = (v: FilterType) => changeTodolistFilter(v, todolistId)

    const secAddTask=(e)=>{
        addTask(e,todolistId);
    }

    return (
        <div>
            <h3>{title} <button onClick={() => removeTodolist(todolistId)}>remove todolist</button></h3>
            <div>
                <Input 
                value={inpSt} 
                onChange={(e:) => secAddTask(e)} 
                className={(errorSt && s.error) + ''} 
                />
                <Button className={''} name={'+'} callback={() => addTask(inpSt, todolistId)} />
            </div>
            {errorSt && <div className={s.errorMessage}>{errorSt}</div>}
            <ul ref={listRef}>

                {filteredTasks.map(el => {
                    return (
                        <li key={el.taskId}>
                            <ContainerComponent />
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button className={(filter === 'all' && s.filter) + ''}
                    name={'All'} callback={() => { f('all') }} />
                <Button className={(filter === 'active' && s.filter) + ''}
                    name={'Active'} callback={() => { f('active') }} />
                <Button className={(filter === 'completed' && s.filter) + ''}
                    name={'Completed'} callback={() => { f('completed') }} />
                <Button className={(filter === 'three' && s.filter) + ''}
                    name={'Three'} callback={() => { f('three') }} />
            </div>
            <div>
                <button onClick={() => removeAllTasks(todolistId)}>remove all tasks</button>
            </div>
        </div>
    )
}