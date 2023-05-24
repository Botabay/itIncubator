import { Button } from './Button'
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Checkbox } from "./Checkbox";
import s from './Todolist.module.css';
import { TaskType, FilterType } from './../state/state';
import { AddItem } from './AddItem';

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
    const f = (v: FilterType) => changeTodolistFilter(v, todolistId)
    const addTaskWithId=(value:string)=>{
        addTask(value,todolistId)
    }
    return (
        <div>
            <h3>
                {title}
                <Button
                    name={'remove todolist'}
                    onClick={() => removeTodolist(todolistId)}
                    className={''}
                />
            </h3>
            <AddItem
                itemTitle={'add task'}
                addTask={addTaskWithId}
            />

            <ul ref={listRef}>

                {filteredTasks.map(el => {
                    return (
                        <li key={el.taskId}>
                            <Button
                                name={'x'}
                                className={''}
                                onClick={() => { removeTask(el.taskId, todolistId) }}
                            />
                            <Checkbox
                                isDone={el.isDone}
                                callback={(e) => changeTaskStatus(el.taskId, e, todolistId)}
                            />
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button
                    name={'All'}
                    className={(filter === 'all' && s.filter) + ''}
                    onClick={() => { f('all') }}
                />
                <Button
                    name={'Active'}
                    className={(filter === 'active' && s.filter) + ''}
                    onClick={() => { f('active') }}
                />
                <Button
                    name={'Completed'}
                    className={(filter === 'completed' && s.filter) + ''}
                    onClick={() => { f('completed') }}
                />
                <Button
                    name={'Three'}
                    className={(filter === 'three' && s.filter) + ''}
                    onClick={() => { f('three') }}
                />
            </div>
            <div>
                <Button
                    name={'remove all tasks'}
                    onClick={() => removeAllTasks(todolistId)}
                    className={''}
                />
            </div>
        </div>
    )
}