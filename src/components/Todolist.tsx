import { useState } from 'react';
// import { SuperInput } from "./SuperInput";
import { Input } from "./Input";
import { Button } from './Button'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Checkbox } from "./Checkbox";
import s from './Todolist.module.css'
import { TaskType, FilterType } from './Body'

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
    const f=(v:FilterType)=>changeTodolistFilter(v,todolistId)
    // debugger;
    return (
        <div>
            <h3>{title} <button onClick={() => removeTodolist(todolistId)}>remove todolist</button></h3>
            <div>
                <Input setInpSt={setInpSt} value={inpSt} callback={()=>addTask(inpSt,todolistId)} className={(errorSt && s.error) + ''} />
                {/* <SuperInput value={inpSt} setInpSt={setInpSt} /> */}
                <Button className={''} name={'+'} callback={() => addTask(inpSt, todolistId)} />
            </div>
            {errorSt && <div className={s.errorMessage}>{errorSt}</div>}
            <ul ref={listRef}>
               
                {filteredTasks.map(el => {
                    return (
                        <li key={el.taskId}>
                            <Button className={''} name={'x'} callback={() => { removeTask(el.taskId, todolistId) }} />
                            <Checkbox isDone={el.isDone} callback={(e) => changeTaskStatus(el.taskId, e, todolistId)} />
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


/**
 * 01.05.2023
 * import { v4 as uuid } from 'uuid'
import { useState, useEffect } from 'react';
import { Input } from "./Input";
import { Button } from './Button'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { SuperInput } from './SuperInput'

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
type FetchDataType={
    id:number
    title:string|undefined
    completed:boolean
}
export const Todolist = (props: PropsType) => {

    const [todosSt, setTodosSt] = useState<FetchDataType[]>([])
    const fetchRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodosSt(json))
    }
    useEffect(() => {
        fetchRequest()
    }, [])
    const showTodos = () => {
        fetchRequest()
    }
    const hideTodos = () => {
        setTodosSt([])
    }

    const [inputSt,setInputSt]=useState('')
    const addTodo=()=>{        
        setTodosSt([{id:todosSt.length+1,title:inputSt,completed:true},...todosSt])        
    }

    const addTodoSuper=(v:string)=>{        
        setInputSt(v)
    }

    const [listRef] = useAutoAnimate<HTMLUListElement>()
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

    const [inpSt, setInpSt] = useState('');
    const addTask = () => {
        setTasksSt([{ taskId: uuid(), title: inpSt, isDone: false }, ...tasksSt])
        filteredTasks = tasks;
        setInpSt('')
    }

    const onCheckboxClickHandler=(taskId:string,e:React.ChangeEvent<HTMLInputElement>)=>{
        setTasksSt(tasksSt.map(el=> el.taskId===taskId ? {...el,isDone:!el.isDone} : el))
    }
    const onFetchCheckboxClickHandler=(id:number,e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodosSt(todosSt.map(el=> el.id===id ? {...el,completed:!el.completed} : el))
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div>
                <Input setInpSt={setInpSt} value={inpSt} callback={addTask} />
                <Button name={'+'} callback={addTask} />
            </div>
            <ul ref={listRef}>
                {filteredTasks.map(el => {
                    return (
                        <li key={el.taskId}>
                            <Button name={'x'} callback={() => { onClickHandler(el.taskId) }} />
                            <input type="checkbox" checked={el.isDone} onChange={(e)=>onCheckboxClickHandler(el.taskId,e)}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <Button name={'All'} callback={() => { changeFilter('all') }} />
                <Button name={'Active'} callback={() => { changeFilter('active') }} />
                <Button name={'Completed'} callback={() => { changeFilter('completed') }} />
                <Button name={'Three'} callback={() => { changeFilter('three') }} />
                </div>
                <div>
                    <button onClick={removeAllButtononClickHandler}>remove all tasks</button>
                </div>
                ================================begin tasks from fetch========================================
                <div>
                    <div>
                        <SuperInput value={inputSt} callback={addTodoSuper}/>
                        <Button name={'add todo'}  callback={addTodo}/>
                    </div>
                    <button onClick={showTodos}>show todos</button>
                    <button onClick={hideTodos}>hide todos</button>
                    {todosSt.map(el => {
                        return (
                            <li key={el.id}>
                                <Button name={'x'} callback={() => { onClickHandler(el.id+'') }} />
                                <input type="checkbox" checked={el.completed} onChange={(e)=>onFetchCheckboxClickHandler(el.id,e)} />
                                <span>{el.title}</span>
                            </li>
                        )
                    }
                    )}
                </div>
                ================================end tasks from fetch========================================
            </div>
        )
    }
 */


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