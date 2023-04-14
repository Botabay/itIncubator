import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import { Todolist } from './components/Todolist';

export type FilterType='all'|'active'|'completed';
export const App=()=> {

    const tasks= [
        {taskId: uuid(), title: "HTML&CSS1", isDone: true},
        {taskId: uuid(), title: "JS1", isDone: true},
        {taskId: uuid(), title: "TS", isDone: false}
    ];

    let [tasksSt,setTasksSt]=useState(tasks)

    const removeTask=(taskId:string)=>{
        const newTasks=tasksSt.filter(el=>el.taskId!=taskId);
        // console.log(tasks);     
        setTasksSt(newTasks)
        console.log(tasksSt);
    }

    let filteredTasks=tasksSt;
    let [filterSt,setFilterSt]=useState<FilterType>('all')

    if(filterSt==='active'){
        filteredTasks=tasksSt.filter(el=>el.isDone)    }

    if(filterSt==='completed'){
        filteredTasks=tasksSt.filter(el=>!el.isDone)
    }

    const changeFilter=(filter:FilterType)=>{
        setFilterSt(filter)
    }
    return (
        <div className="App">
            <Todolist title={'What to learn'} body={'this is body'}
            tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

/**
 * export const App=()=> {
    //test
    const titleValue='asdfadfadfasdfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk';
    const tasks1= [
        {taskId: uuid(), title: "HTML&CSS1", isDone: true},
        {taskId: uuid(), title: "JS1", isDone: true},
        {taskId: uuid(), title: "TS", isDone: false}
    ];
    const tasks2= [
        {taskId: uuid(), title: "HTML&CSS2", isDone: true},
        {taskId: uuid(), title: "JS2", isDone: true},
        {taskId: uuid(), title: "TS2", isDone: false},
        {taskId: uuid(), title: "PHP", isDone: true}
    ]
    return (
        <div className="App">
            <Todolist title={'What to learn'} body={'this is body'} tasks={tasks1}/>
            {/* <Todolist title={'What to remember'} tasks={tasks2}/> }
            {/* <Todolist title={titleValue}/> }
            </div>
            );
        }
 */
