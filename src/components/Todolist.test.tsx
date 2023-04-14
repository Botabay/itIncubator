// import React from 'react';
import { v4 as uuid } from 'uuid'
import { render,screen } from '@testing-library/react';
import {Todolist} from './Todolist';

const data={
    title:'hu',
    body:'bu',
     tasks: [
        {taskId: uuid(), title: "HTML&CSS1", isDone: true},
        {taskId: uuid(), title: "JS1", isDone: true},
        {taskId: uuid(), title: "TS", isDone: false}
    ],
    callback:()=>{ }
}

describe('List component', ()=>{
    it("List renders",()=>{
        render(<Todolist title={data.title} tasks={data.tasks} callback={data.callback}/>)

        expect(screen.getByText(/hu/)).toBeInTheDocument();
    })
})
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });