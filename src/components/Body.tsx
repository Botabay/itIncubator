import { v1 } from 'uuid'
import { useState } from 'react';
import { Todolist } from './Todolist';
import {
	TodolistType,
	todolists,
	tasks,
	FilterType,
	TasksType, TaskType
} from '../state/state';
import { AddItem } from './AddItem';

export const Body = () => {

	const [todolistsSt, setTodolistsSt] = useState<TodolistType[]>(todolists)
	const [tasksSt, setTasksSt] = useState<TasksType>(tasks)

	const removeTask = (taskId: string, todolistId: string) =>
		setTasksSt({
			...tasksSt, [todolistId]:
				tasksSt[todolistId].filter(el => el.taskId !== taskId)
		})

	const addTask = (value: string, todolistId: string) => {
		setTasksSt({
			...tasksSt, [todolistId]:
				[{ taskId: v1(), title: value, isDone: false }, ...tasksSt[todolistId]]
		});
	}

	const removeAllTasks = (todolistId: string) =>
		setTasksSt({ ...tasksSt, [todolistId]: [] })

	const removeTodolist = (todolistId: string) => {
		setTodolistsSt(todolistsSt.filter(el => el.todolistId !== todolistId));
		const copy = { ...tasksSt }
		delete copy[todolistId]
		setTasksSt(copy)
	}

	const addTodolist = (title: string) => {
		const todolistId = v1();
		setTodolistsSt([...todolistsSt, { todolistId, title, filter: 'all' }]);
		setTasksSt({ ...tasksSt, [todolistId]: [] })
	}

	const changeTodolistFilter = (filter: FilterType, todolistId: string) =>
		setTodolistsSt(todolistsSt.map(el => el.todolistId === todolistId ? { ...el, filter: filter } : el))


	const changeTaskStatus = (taskId: string, e: boolean, todolistId: string) =>
		setTasksSt({
			...tasksSt, [todolistId]: tasksSt[todolistId]
				.map(el => el.taskId === taskId ? { ...el, isDone: e } : el)
		})

	const changeTaskTitle = (taskId: string, title: string, todolistId: string) =>
		setTasksSt({
			...tasksSt, [todolistId]: tasksSt[todolistId]
				.map(el => el.taskId === taskId ? { ...el, title, } : el)
		})

	const filteredTasksCalc = (tasks: TaskType[], filter: FilterType) => {
		switch (filter) {
			case 'active': return tasks.filter(el => !el.isDone);
			case 'completed': return tasks.filter(el => el.isDone);
			case 'three': return tasks.filter((el, ind) => ind < 3);
			default: return tasks
		}
	}

	return (
		<div>
			<AddItem
				itemTitle={'add todolist'}
				addTask={addTodolist}
			/>
			{
				todolistsSt.map(el => {
					const filteredTasks = filteredTasksCalc(tasksSt[el.todolistId], el.filter)
					return (
						<Todolist
							key={el.todolistId}
							todolistId={el.todolistId}
							title={el.title}
							filter={el.filter}
							filteredTasks={filteredTasks}

							removeTask={removeTask}
							removeAllTasks={removeAllTasks}
							addTask={addTask}
							changeTaskStatus={changeTaskStatus}
							changeTaskTitle={changeTaskTitle}

							changeTodolistFilter={changeTodolistFilter}
							removeTodolist={removeTodolist}
						/>
					)
				})
			}
		</div>
	)
}
