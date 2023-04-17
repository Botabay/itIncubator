import { v4 as uuid } from 'uuid'
import { useState } from 'react';
import { Input } from "./Input";
import { Button } from './Button'

type FilterType = 'all' | 'active' | 'completed' | 'three';

type PropsType = {
    title: string
    body?: string
}

export type DataType = {
    title: string
    tasks: TasksType[]
    students: string[]
}
type TasksType = {
    taskId: string
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {

    const tasks = [
        { taskId: uuid(), title: "HTML&CSS1", isDone: true },
        { taskId: uuid(), title: "JS1", isDone: true },
        { taskId: uuid(), title: "TS1", isDone: false },
        { taskId: uuid(), title: "HTML&CSS2", isDone: true },
        { taskId: uuid(), title: "JS2", isDone: true },
        { taskId: uuid(), title: "TS2", isDone: false }
    ];
    let [tasksSt, setTasksSt] = useState(tasks)
    let filteredTasks = tasksSt;
    
    let [filterSt, setFilterSt] = useState<FilterType>('all')

    if (filterSt === 'active') {
        filteredTasks = tasksSt.filter(el => !el.isDone)
    }

    if (filterSt === 'completed') {
        filteredTasks = tasksSt.filter(el => el.isDone)
    }

    if (filterSt === 'three') {
        filteredTasks = tasksSt.filter((el, ind) => ind < 3)
    }

    const changeFilter = (filter: FilterType) => {
        setFilterSt(filter)
    }

    const removeTask = (taskId: string) => {
        const newTasks = tasksSt.filter(el => el.taskId !== taskId);
        setTasksSt(newTasks)
    }
    const removeAllTasks = () => {
        setTasksSt([])
    }

    const onClickHandler = (taskId: string) => {
        removeTask(taskId)
    }
    const removeAllButtononClickHandler = () => {        
        removeAllTasks()
    }

    //------
    const [inpSt,setInpSt]=useState('');
    const addTask = () => {
        setTasksSt([{taskId:uuid(), title:inpSt,isDone:false},...tasksSt])
        filteredTasks = tasks;
        setInpSt('')
    }
    //-----    
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div>
                <Input setInpSt={setInpSt} value={inpSt} callback={addTask}/>
                <Button name={'+'} callback={addTask}/>
                {/* <input />
                <button>+</button> */}
            </div>
            <ul>
                {filteredTasks.map( el => {
                    return (
                        <li key={el.taskId}>
                            <button onClick={() => { onClickHandler(el.taskId) }}>x</button>
                            <input type="checkbox" checked={el.isDone} onChange={() => { }} />
                            <span>{el.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={() => { changeFilter('all') }}>All</button>
                <button onClick={() => { changeFilter('active') }}>Active</button>
                <button onClick={() => { changeFilter('completed') }}>Completed</button>
                <button onClick={() => { changeFilter('three') }}>Three</button>
            </div>
            <div>
                <button onClick={removeAllButtononClickHandler}>remove all tasks</button>
            </div>
        </div>
    )
}

/**
 * export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone} /> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone} /> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone} /> <span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
 */