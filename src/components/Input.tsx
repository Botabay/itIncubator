import { KeyboardEvent, ChangeEvent, FocusEvent } from "react";

type PropsType = {
    value: string
    className: string
    autoFocus?:boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void
}
export const Input = ({
    value,
    className,
    onChange,
    onKeyDown,
    onBlur,
    autoFocus=false
}: PropsType) => {

    return (
        <input type="text"
            onChange={onChange}
            value={value}
            className={className}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            autoFocus={autoFocus}
        />
    )
}