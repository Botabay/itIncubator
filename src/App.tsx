import React from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import { Todolist } from './components/Todolist';

export const App=()=> {
    let tasks= [
        {taskId: uuid(), title: "HTML&CSS1", isDone: true},
        {taskId: uuid(), title: "JS1", isDone: true},
        {taskId: uuid(), title: "TS", isDone: false}
    ];
    const removeTask=(taskId:string)=>{
        tasks=tasks.filter(el=>el.taskId!=taskId);
        console.log(tasks);
        
    }
    return (
        <div className="App">
            <Todolist title={'What to learn'} body={'this is body'} tasks={tasks} callback={removeTask}/>
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
