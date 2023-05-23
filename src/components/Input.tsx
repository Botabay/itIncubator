import { KeyboardEvent, ChangeEvent } from "react";
type PropsType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}
export const Input = ({
    // setInpSt,
    value,
    onChange,
    className
}: PropsType) => {
    const onChangeHandler =
        (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)
    const onKeyDownHandler =
        (e: KeyboardEvent<HTMLInputElement>) => (e.key === "Enter") && onChange(e: ChangeEvent<HTMLInputElement>)
    return (
        <input type="text"
            onChange={onChangeHandler}
            value={value}
            className={className}
            onKeyDown={onKeyDownHandler}
        />
    )
}

/**
 * import { KeyboardEvent, ChangeEvent } from "react";
type PropsType = {
    value: string
    callback: (v: string) => void
}
export const SuperInput = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.callback(e.currentTarget.value)
        }
    }
    return (
        <input type="text"
            onChange={onChangeHandler}
            value={props.value}
            onKeyDown={onKeyDownHandler}
        />
    )
}
 */