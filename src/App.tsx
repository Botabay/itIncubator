import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import { Todolist } from './components/Todolist';
import {Tasks} from './components/Tasks'

export type FilterType='all'|'active'|'completed';
export type DataType={
    title:string
    tasks:TasksType[]
    students:string[]
}
type TasksType={
    taskId:string
    title:string
    isDone:boolean
}
export const App=()=> {
    const data1:DataType = {
        title: "What to do",
        tasks: [
            {taskId: uuid(), title: "HTML&CSS2", isDone: true},
            {taskId: uuid(), title: "JS2", isDone: true}
        ],
        students: [
            'Jago Wormald1',
            'Saul Milne2',
            'Aariz Hester3',
            'Dion Reeve4',
            'Anisa Ortega5',
            'Blade Cisneros6',
            'Malaikah Phelps7',
            'Zeeshan Gallagher8',
            'Isobella Vo9',
            'Rizwan Mathis10',
            'Menaal Leach11',
            'Kian Walton12',
            'Orion Lamb13',
            'Faizah Huynh14',
            'Crystal Vaughan15',
            'Vivien Hickman16',
            'Stuart Lu17',
            'Karol Davison18',
            'Dario Burns19',
            'Chloe Rich20',
            'Martyna Felix',
            'Nida Glass',
            'Maeve Miles',
            'Hasnain Puckett',
            'Ayman Cano',
            'Safwan Perry',
            'Fox Kelly',
            'Louise Barlow',
            'Malaki Mcgill',
            'Leanna Cline',
            'Willard Hodge',
            'Amelia Dorsey',
            'Kiah Porter',
            'Jeanne Daly',
            'Mohsin Armstrong',
            'Laurie Rangel',
            'Princess Tierney',
            'Kasim Kendall',
            'Darryl Cope',
            'Elysha Ray',
            'Liyana Harris',
            'Kashif Blackburn',
            'Atif Zimmerman',
            'Sila Hartley',
            'Ralphie Hebert',
        ]
    }
    const data2 =   {
        title: "What to learn",
        tasks: [
            {taskId: uuid(), title: "HTML&CSS", isDone: true},
            {taskId: uuid(), title: "JS", isDone: true}
        ],
        students: [
            'Rick Kane',
            'Finnlay Bentley',
            'Samia North',
            'Isaac Morton',
            'Lily-Ann Clifford',
            'Thalia Park',
            'Sapphire Cruz',
            'Cieran Vazquez',
            'Anya Estes',
            'Dominika Field',
            'Rosanna Chung',
            'Safiyah Davey',
            'Ryley Beasley',
            'Kalvin Trejo',
            'Evie-Mae Farrell',
            'Juliet Valencia',
            'Astrid Austin',
            'Lyle Montgomery',
            'Nisha Mora',
            'Kylie Callaghan',
            'Star Wilks',
            'Marissa Colley',
            'Asa Fuller',
            'Leigh Kemp',
            'Avleen Dawson',
            'Sammy Bonilla',
            'Acacia Becker',
            'Coral Shepherd',
            'Melina Molina',
            'Kiran Bailey',
            'Clara Escobar',
            'Alexandru Horn',
            'Brandon-Lee Mercado',
            'Elouise Weston',
            'King Long',
            'Kerri Searle',
            'Kanye Hamer',
            'Elwood Benitez',
            'Mikail Whitaker',
            'Bobby Hardy',
            'Talha Ferry',
            'Priscilla Landry',
            'Olivia-Grace Cain',
            'Kiaan Wallace',
            'Wesley Padilla90',
            'Ella-Grace Wooten91',
            'Kaif Molloy92',
            'Kamal Broadhurst93',
            'Bianca Ferrell94',
            'Micheal Talbot95',
        ]
    }
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
            <div>
                <Todolist title={'What to learn'} body={'this is body'}
                tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter}/>
            </div>
            

            <div>
                <Tasks data={data1}/>
                <Tasks data={data2}/>
            </div>
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
