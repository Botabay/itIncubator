import { useState } from 'react';

type FilterType='all'|'active'|'completed'|'three';

type PropsType = {
    title: string
    body?: string
    tasks: Array<TaskType>
    removeTask:(taskId:string)=>void
    removeAllTasks:()=>void
}
type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    const onClickHandler=(taskId:string)=>{
        props.removeTask(taskId)
    }
    const removeAllButtononClickHandler=()=>{
        props.removeAllTasks()
    }

    let filteredTasks=props.tasks;
    let [filterSt,setFilterSt]=useState<FilterType>('all')

    if(filterSt==='active'){
        filteredTasks=props.tasks.filter(el=>el.isDone)    }

    if(filterSt==='completed'){
        filteredTasks=props.tasks.filter(el=>!el.isDone)
    }

    if(filterSt==='three'){
        filteredTasks=props.tasks.filter((el,ind)=>ind<3)
    }

    const changeFilter=(filter:FilterType)=>{
        setFilterSt(filter)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {filteredTasks.map((el)=>{
                    return (
                        <li key={el.taskId}>
                            <button onClick={()=>{onClickHandler(el.taskId)}}>x</button>
                            <input type="checkbox" checked={el.isDone} onChange={()=>{ }}/> 
                            <span>{el.title}</span>
                        </li>
                    )
                })}
                
            </ul>
            <div>
                <button onClick={()=>{changeFilter('all')}}>All</button>
                <button onClick={()=>{changeFilter('active')}}>Active</button>
                <button onClick={()=>{changeFilter('completed')}}>Completed</button> 
                <button onClick={()=>{changeFilter('three')}}>Three</button> 
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