import * as React from 'react';
import { DataType } from "../App";
//notRequiredMicroAdds #1
// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.
  

type PropsType={
  data: DataType
}
export const Tasks=({data}:PropsType)=>{
  return (
    <div>
      <h1>{data.title}</h1>
      <div>
        {data.tasks.map(el=><div>{el.taskId} - {el.title} - {el.isDone}</div>)}
      </div>
      <div>
      {data.students.map(el=><div>{el}</div>)}
      </div>
    </div>
  )
}