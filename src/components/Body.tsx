import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { Todolist } from './Todolist';
import { Tasks } from './Tasks'

/* notRequiredMicroAdds #2
Hi guys! 
1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
Clicking the button removes all tasks
2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work*/


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
type PropsType = {
  
}
export const Body = (props: PropsType) => {

const tasks = [
    { taskId: uuid(), title: "HTML&CSS1", isDone: true },
    { taskId: uuid(), title: "JS1", isDone: true },
    { taskId: uuid(), title: "TS1", isDone: false },
    { taskId: uuid(), title: "HTML&CSS2", isDone: true },
    { taskId: uuid(), title: "JS2", isDone: true },
    { taskId: uuid(), title: "TS2", isDone: false }
];

let [tasksSt, setTasksSt] = useState(tasks)

const removeTask = (taskId: string) => {
    const newTasks = tasksSt.filter(el => el.taskId != taskId);
    // console.log(tasks);     
    setTasksSt(newTasks)
    console.log(tasksSt);
}
const removeAllTasks = () => {
    setTasksSt([])
}
  return (
    <div>
      <div>
        <Todolist title={'What to learn'} body={'this is body'}
          tasks={tasksSt} removeTask={removeTask} removeAllTasks={removeAllTasks} />
      </div>

      <div>
        <Tasks />
      </div>
    </div >
  )
};
