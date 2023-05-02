import { v1 } from 'uuid'
import { useState } from 'react';
import { Todolist } from './Todolist';

export type FilterType = 'all' | 'active' | 'completed' | 'three';

type TodolistType = {
  todolistId: string
  title: string
  filter: FilterType
}

export type TaskType = {
  taskId: string
  title: string
  isDone: boolean
}
export type TasksType = {
  [key: string]: TaskType[]
}

export const Body = () => {
  let todolistId_1 = v1();
  let todolistId_2 = v1();
  const todolists:TodolistType[] = [
    { todolistId: todolistId_1, title: 'what to learn', filter: 'all' },
    { todolistId: todolistId_2, title: 'what to read', filter: 'all' }
  ]
  const tasks = {
    [todolistId_1]: [
      { taskId: v1(), title: "HTML", isDone: true },
      { taskId: v1(), title: "CSS", isDone: true },
      { taskId: v1(), title: "js", isDone: true },
    ],
    [todolistId_2]: [
      { taskId: v1(), title: "php", isDone: true },
      { taskId: v1(), title: "mongoDB", isDone: true },
      { taskId: v1(), title: "express", isDone: true },
    ]
  }
  const [todolistsSt, setTodolistsSt] = useState<TodolistType[]>(todolists)
  const [tasksSt, setTasksSt] = useState<TasksType>(tasks)

  const removeTask = (taskId: string, todolistId: string) =>
    setTasksSt({ ...tasksSt, [todolistId]: tasksSt[todolistId].filter(el => el.taskId !== taskId) })

  const addTask = (value: string, todolistId: string) =>
    setTasksSt({ ...tasksSt, [todolistId]: [{taskId:v1(),title:value,isDone:false},...tasksSt[todolistId]] })

  const removeAllTasks = (todolistId: string) =>
    setTasksSt({ ...tasksSt, [todolistId]: [] })

  const removeTodolist=(todolistId: string)=>setTodolistsSt(todolistsSt.filter(el=>el.todolistId!==todolistId))

  const changeTodolistFilter = (filter: FilterType, todolistId: string) =>
    // setTodolistsSt(todolists.map(el=>el.todolistId===todolistId?{...el,filter:filter}:el))
    setTodolistsSt(todolists.filter(el=>el.filter===filter))


  // const addTask = (todolistId: string) => {
  //   // if (inpSt.trim() !== '') {
  //     setTasksSt([{ taskId: v1(), title: inpSt.trim(), isDone: false }, ...tasksSt])
      // filteredTasks = tasks;
      // setInpSt('');
      // setErrorSt('')
    // } else {
    //   setErrorSt('empty string')
    // }
  // }

  const changeTaskStatus = (taskId: string, e: boolean, todolistId: string) => 
     setTasksSt({...tasksSt,[todolistId]:tasksSt[todolistId].map(el => el.taskId === taskId ? { ...el, isDone: !el.isDone } : el)} )
  
  

  return (
        <div>
      {todolistsSt.map(el => {
        const filteredTasksCalc = (filter:FilterType, todolistId: string) => {
          switch (filter) {
            case 'active': return tasksSt[todolistId].filter(el => !el.isDone);
            case 'completed': return tasksSt[todolistId].filter(el => el.isDone);
            default: return tasksSt[todolistId]
          }
        }
        let filteredTasks = filteredTasksCalc(el.filter, el.todolistId)
        return (
          <Todolist
            todolistId={el.todolistId}
            title={'s'}
            filter={el.filter}            
            filteredTasks={filteredTasks}

            removeTask={removeTask}
            removeAllTasks={removeAllTasks}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}

            changeTodolistFilter={changeTodolistFilter}
            removeTodolist={removeTodolist}
          />
        )
      })}
    </div>
  )
}




/**
 * 02.05.2023
 * import { Todolist } from './Todolist';
import { Tasks } from './Tasks'

notRequiredMicroAdds #2
Hi guys! 
1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
Clicking the button removes all tasks
2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work

export const Body = () => {

  return (
    <div>
      <div>
        <Todolist title={'What to learn'} body={'this is body'} />
      </div>
      <div>
        <Tasks />
      </div>
    </div >
  )
};
 */
