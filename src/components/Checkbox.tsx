import { ChangeEvent } from 'react'
type PropsType = {
    isDone: boolean
    callback: (value: boolean) => void
}
export const Checkbox = ({ isDone, callback }: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        callback(e.currentTarget.checked)
    return <input type="checkbox" checked={isDone} onChange={onChangeHandler} />
}