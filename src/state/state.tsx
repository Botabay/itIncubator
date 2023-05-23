import { v1 } from 'uuid';

export type FilterType = 'all' | 'active' | 'completed' | 'three';

export type TodolistType = {
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

const todolistId_1 = v1();
const todolistId_2 = v1();

export const todolists: TodolistType[] = [
    { todolistId: todolistId_1, title: 'what to learn', filter: 'all' },
    { todolistId: todolistId_2, title: 'what to read', filter: 'all' }
]

export const tasks = {
    [todolistId_1]: [
        { taskId: v1(), title: "HTML", isDone: true },
        { taskId: v1(), title: "CSS", isDone: false },
        { taskId: v1(), title: "js", isDone: true },
    ],
    [todolistId_2]: [
        { taskId: v1(), title: "php", isDone: true },
        { taskId: v1(), title: "mongoDB", isDone: true },
        { taskId: v1(), title: "express", isDone: false },
    ]
}